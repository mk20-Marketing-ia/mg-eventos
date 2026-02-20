# Documento fundacional: Módulo Dashboard SEO

**Propósito:** Base de entrada para generación automática del PRP. No es un PRP. No incluye roadmap ni modifica el sistema actual de forma innecesaria.

**Alcance:** Extensión del sistema Marketing Brain existente para añadir un Dashboard SEO (estudio de palabras clave, clusterización por intención, análisis de competidores por silo), manteniendo coherencia de contexto, persistencia y arquitectura multi-agente actual.

---

## 1. Contexto real del sistema actual

### 1.1 Naturaleza del desarrollo

Este desarrollo **no** es un sistema independiente. Es una **extensión** del sistema ya desplegado. El sistema actual funciona correctamente y debe seguir funcionando sin regresiones.

### 1.2 Componentes existentes que no deben alterarse

| Componente | Ubicación / Descripción | Restricción |
|-----------|-------------------------|-------------|
| Investigación buyer persona | `backend/src/agents/buyer_persona_agent.py` | No modificar lógica ni regenerar si ya existe. Los nuevos agentes **leen** el buyer persona persistido. |
| Estudio de mercado / foros / pain points / customer journey | `MarketingBuyerPersona`: `full_analysis`, `forum_simulation`, `pain_points`, `customer_journey` | Solo lectura desde nuevos agentes. |
| Contexto de negocio y localización | Incluido en buyer persona y en conversación (chat) | Herencia vía `project_id` y `chat_id`; no duplicar. |
| Arquitectura multi-agente | `BaseAgent`, `RouterAgent`, `BuyerPersonaAgent`, `ContentGeneratorAgent` | Nuevos agentes deben heredar `BaseAgent` y usar el mismo patrón. |
| Agentes con memoria de largo contexto | `MemoryManager` (corto: ventana 10 mensajes; largo: BD; semántico: RAG) | Los nuevos agentes deben usar `memory.get_context()` y no omitir información. |
| Persistencia real | PostgreSQL, tablas con prefijo `marketing_` | No crear tablas duplicadas (p. ej. no segunda tabla de proyectos). |
| RAG | `RAGService`: `search_relevant_docs`, `search_learned_concepts`, etc. | Nuevos agentes pueden usar RAG para contexto adicional. |
| Gestión de conversación | `MarketingChat`, `MarketingMessage`, `ChatService` | Conversación vinculada a `project_id` y `chat_id`. |
| Tabla projects | `marketing_projects` (id, name, owner_user_id, created_at, updated_at) | **No duplicar.** Todas las entidades SEO se vinculan a `project_id` existente. |
| Base de datos | Nombre definido en configuración (ej. variable de entorno para conexión PostgreSQL; esquema con tablas `marketing_*`) | Respetar convención de nombres y relaciones actuales. |

### 1.3 Patrón obligatorio para nuevos agentes

Cada nuevo agente (Keyword Research, Clusterización, Análisis de competidores) debe:

1. **Heredar de `BaseAgent`** (`backend/src/agents/base_agent.py`): recibe `llm_service` y `memory_manager`; implementa `execute(chat_id, project_id, user_message)`.
2. **Contexto largo:** Obtener contexto vía `await self._get_context(chat_id, project_id, user_message)`, que internamente llama a `memory.get_context()`. No depender solo del último mensaje.
3. **Memoria conversacional:** El `MemoryManager` ya carga historial desde BD con `ensure_chat_loaded(chat_id, project_id, limit=20)` y expone `recent_chat`, `buyer_persona`, `relevant_docs`, etc. Los agentes deben usar este contexto en el prompt.
4. **Acceso a RAG:** Disponible en el contexto devuelto por `get_context()` (`relevant_docs`, `learned_concepts`). El agente puede además llamar a `rag_service` si necesita búsquedas adicionales específicas.
5. **Persistencia:** Escribir resultados en tablas nuevas (SEO) con `project_id` y, donde aplique, `chat_id`. Nunca solo en memoria o en el mensaje del chat.
6. **Consulta a base de datos:** Leer datos previos (p. ej. keywords aprobadas, clusters) desde BD en cada ejecución cuando sea necesario, no asumir que están solo en el hilo de conversación.
7. **No hardcode:** Configuración (URLs de API, límites, nombres de tablas) debe venir de config o variables de entorno.

---

## 2. Principio crítico: contexto

El documento debe definir con precisión cómo se mantiene y se transmite el contexto para que ningún agente omita información y el PRP generado no quede incompleto.

### 2.1 Herencia del contexto del proyecto

- **project_id:** Todas las operaciones SEO están acotadas a un proyecto. Se obtiene del usuario autenticado (`user.project_id`) o del chat (`MarketingChat.project_id`). Los nuevos agentes reciben `project_id` en `execute()`.
- **chat_id:** Identifica la conversación actual. El buyer persona está asociado a `chat_id` en `marketing_buyer_personas`. Los agentes SEO pueden asociar resultados a un `chat_id` concreto (ej. keywords de “esta” conversación) o al proyecto entero según diseño (ver sección Base de datos).
- **Contexto inyectado:** `MemoryManager.get_context(chat_id, project_id, current_message)` devuelve un diccionario con: `recent_chat`, `buyer_persona`, `forum_simulation`, `pain_points`, `customer_journey`, `relevant_docs`, `has_buyer_persona`, `documents_count`, `document_summaries`, `learned_concepts`, `query_decomposition`. Los nuevos agentes deben recibir este bloque (o un subconjunto documentado) en cada ejecución y usarlo en el system/user prompt.

### 2.2 Acceso al buyer persona sin regenerarlo

- **Lectura desde BD:** El buyer persona se obtiene en `MemoryManager._get_buyer_persona_row(chat_id, project_id)`, que consulta `marketing_buyer_personas` con `chat_id` y `project_id`. El agente **nunca** debe invocar al BuyerPersonaAgent para “regenerar”; solo debe usar el resultado ya persistido que llega en `context["buyer_persona"]` (y `forum_simulation`, `pain_points`, `customer_journey`).
- **Condición de ejecución:** Si un agente SEO requiere buyer persona (p. ej. para adaptar estrategia local o tono), debe comprobar `context["has_buyer_persona"]` y, si es False, devolver un mensaje claro pidiendo generar primero el buyer persona en esta conversación.

### 2.3 Acceso a las keywords aprobadas

- **Fuente de verdad:** Las keywords aprobadas deben estar **persistidas en base de datos** en una tabla dedicada (p. ej. `marketing_seo_keywords` con estado `approved`). El Agente 2 (Clusterización) y el Agente 3 (Competidores) **deben leer siempre desde BD** por `project_id` (y opcionalmente `chat_id` si se decide que las keywords son por chat), no solo del último mensaje o del resumen del chat.
- **Flujo:** (1) El Agente 1 escribe keywords en BD con estado `pending` o `draft`. (2) El usuario aprueba (acción explícita en UI o en chat). (3) Se actualiza estado a `approved`. (4) El Agente 2 y 3 consultan `WHERE project_id = ? AND status = 'approved'` (y `chat_id` si aplica) y procesan **todas** las filas devueltas.
- **Garantía de no omisión:** La implementación debe usar una única query que devuelva todas las keywords aprobadas (con paginación solo si hay límite de volumen por request), y el agente debe recibir ese conjunto completo (o un resumen estructurado generado a partir de él) en su contexto. No confiar en “las últimas N keywords mencionadas en el chat”.

### 2.4 Garantía de que ningún agente omita información

- **Contrato de entrada:** Cada agente debe documentar qué datos necesita (buyer persona, keywords aprobadas, clusters previos, etc.) y de dónde los obtiene (BD vs. contexto de memoria).
- **Datos desde BD:** Para listas críticas (keywords aprobadas, clusters, competidores por silo), la implementación debe: (a) leer desde BD en el inicio del `execute()`, (b) incluir en el prompt (o en un resumen acotado por tokens) el conjunto completo o una representación fiel (p. ej. conteos + ejemplos + referencia a “N keywords en total”).
- **Validación:** Donde sea posible, validar que el número de ítems procesados coincida con el número de ítems en BD (p. ej. “clusterizar las 47 keywords aprobadas” y comprobar que el resultado cubre 47).

### 2.5 Memoria larga

- **Short-term:** `ConversationBufferWindowMemory(k=10)` por `chat_id`. Se alimenta con `load_chat_history()` desde `marketing_messages`. Los agentes SEO participan en la misma conversación; sus respuestas se persisten como mensajes y se cargan en la ventana.
- **Long-term:** Buyer persona y datos SEO en tablas. La “memoria larga” para SEO son las tablas `marketing_seo_*`; los agentes las leen y escriben en cada ejecución.
- **Semántica (RAG):** Sigue igual; los agentes pueden usar `relevant_docs` y `learned_concepts` del contexto para enriquecer respuestas (p. ej. técnicas de contenido o conocimiento del dominio).

### 2.6 Sincronización conversación + base de datos

- **Escritura:** Tras cada ejecución exitosa de un agente SEO, los resultados estructurados (keywords, clusters, análisis de competidores) se persisten en sus tablas. Opcionalmente se puede añadir un mensaje de resumen al chat (`marketing_messages`) para que el usuario vea el resultado en la conversación.
- **Lectura:** Al iniciar una nueva ejecución (del mismo u otro agente), los datos se leen desde BD. Así, si el usuario abre el dashboard en otra pestaña o vuelve más tarde, la vista lee desde BD y no depende del estado del chat en memoria.
- **Idempotencia y re-ejecución:** Si el usuario pide “vuelve a clusterizar” o “actualiza el análisis de competidores”, el agente debe (1) leer de nuevo desde BD el estado actual (keywords aprobadas, clusters), (2) recalcular, (3) actualizar o reemplazar las filas afectadas según reglas de negocio (versionado o overwrite; ver sección 2.8).

### 2.7 Flujo de lectura completo desde BD

1. **Al entrar en flujo SEO para un proyecto:**  
   - Cargar `project_id` (y `chat_id` si la sesión SEO está ligada a un chat).  
   - Opcional: `ensure_chat_loaded(chat_id, project_id)` para tener el historial reciente en memoria.  
   - Para Agente 2/3: ejecutar query de keywords aprobadas por `project_id` (y `chat_id` si aplica); cargar clusters existentes si existen; cargar análisis de competidores por silo si existen.

2. **Evitar pérdida de contexto:**  
   - No asumir que “el usuario acaba de aprobar 10 keywords” solo por el último mensaje. La aprobación debe quedar reflejada en BD y la lectura debe ser desde BD.  
   - Si el contexto de conversación es muy largo, el resumen inyectado en el prompt puede incluir “En este proyecto hay X keywords aprobadas; IDs / lista resumida: …” generado desde la query, no desde el texto del chat.

### 2.8 Cómo un agente accede al output persistido del anterior

- **Agente 1 → Agente 2:** Agente 2 lee de `marketing_seo_keywords` con `status = 'approved'` y `project_id`. No recibe “el output del Agente 1” por parámetro; lo recibe vía BD.
- **Agente 2 → Agente 3:** Agente 3 lee de la tabla de clusters (p. ej. `marketing_seo_clusters`) por `project_id`. Para “las 3 keywords principales por silo”, obtiene los clusters y por cada cluster/silo toma las 3 keywords con mayor volumen o prioridad (según regla definida).
- **Encadenamiento:** Cada agente recibe `chat_id` y `project_id`, obtiene contexto con `_get_context()`, y luego hace sus propias lecturas SQL a tablas SEO. No se pasa el resultado “en memoria” de un agente al siguiente; la BD es el bus entre ellos.

### 2.9 Re-ejecución

- **Keyword Research (Agente 1):** Puede volver a ejecutar DataForSEO para las mismas o nuevas ideas; los resultados pueden reemplazar un “batch” por `project_id`/`chat_id` o crearse una nueva “versión” (campo `version` o `run_id`) según diseño. Debe documentarse si se hace soft-delete de keywords anteriores o se añaden nuevas filas.
- **Clusterización (Agente 2):** Al re-ejecutar, leer de nuevo todas las keywords aprobadas, recomputar clusters y actualizar la tabla de clusters (por ejemplo, borrar clusters anteriores del proyecto y insertar los nuevos, o marcar versión).
- **Competidores (Agente 3):** Similar: leer clusters y keywords principales, volver a llamar SERP, reemplazar o versionar análisis por silo.

### 2.10 Versionado de resultados

- **Estrategia recomendada:** Definir si cada entidad (keywords de un run, clusters de un run, análisis por silo) tiene `version` o `run_id` para poder comparar “antes/después” o mantener historial.  
- **Mínimo:** Al menos `created_at`/`updated_at` en cada tabla para saber cuándo se generó. Para clusters y competidores, decidir si se guarda una sola “versión actual” por proyecto o varias versiones (con `version` o `run_id`).  
- Este documento no impone una sola política; el PRP debe especificar la elegida (overwrite vs. versionado) por entidad.

---

## 3. Base de datos

### 3.1 Reglas generales

- **Base de datos existente:** Misma instancia PostgreSQL y esquema donde ya existen las tablas `marketing_*` (nombre de base de datos definido en configuración, ej. variable de entorno tipo `DATABASE_URL` o nombre lógico "marketing"). No crear otra base “para SEO”.  
- **Respetar tablas existentes:** En particular `marketing_projects`, `marketing_chats`, `marketing_messages`, `marketing_buyer_personas`, `marketing_knowledge_base`, `marketing_user_documents`, etc. No duplicar ni reemplazar.  
- **Solo tablas nuevas:** Añadir únicamente las tablas necesarias para SEO, con prefijo coherente (p. ej. `marketing_seo_*`).  
- **Nombres coherentes:** Siguiendo convención del proyecto: snake_case, prefijo `marketing_`, FKs a `marketing_projects.id`, `marketing_chats.id` donde corresponda.  
- **Relaciones:** Todas las tablas SEO deben tener al menos `project_id` FK a `marketing_projects(id)` con `ON DELETE CASCADE` para que al borrar un proyecto se borren sus datos SEO. Donde tenga sentido (ej. “keywords de esta conversación”), añadir `chat_id` FK a `marketing_chats(id)` con política adecuada (CASCADE o SET NULL).

### 3.2 Tablas propuestas (solo nuevas)

- **marketing_seo_keywords**  
  - Propósito: almacenar keywords generadas por el Agente 1 y su estado (draft/pending, approved, rejected).  
  - Campos mínimos sugeridos: `id` (UUID PK), `project_id` (FK), `chat_id` (FK, nullable si las keywords son por proyecto), `keyword` (text), `volume` (int), `difficulty` (int o decimal), `search_intent` (string), `is_short_tail` (bool), `metadata` (JSONB opcional: source, position, etc.), `status` (enum: draft, pending, approved, rejected), `created_at`, `updated_at`.  
  - Índices: `(project_id, status)`, `(project_id, chat_id)` si se usa chat_id.  
  - Relación: una fila por keyword por proyecto (y opcionalmente chat). Permite edición manual (update de keyword/volume/difficulty/intent) y eliminación (delete o status=rejected).

- **marketing_seo_clusters**  
  - Propósito: estructura de clusters por intención (Nivel 1 = Home, Nivel 2 = Subpáginas, Nivel 3 = Ramificaciones).  
  - Campos mínimos sugeridos: `id` (UUID PK), `project_id` (FK), `chat_id` (FK opcional), `cluster_number` (int, ej. 1, 2, 3…), `level` (1, 2 o 3), `label` (nombre del cluster/silo), `parent_id` (FK a misma tabla, nullable para nivel 1), `keyword_ids` (array de UUIDs referenciando `marketing_seo_keywords.id` o tabla intermedia cluster_keywords), `created_at`, `updated_at`.  
  - Relación: jerárquica dentro de la tabla (parent_id) o tres tablas (clusters nivel 1, 2, 3) según preferencia. Si se usa tabla intermedia `marketing_seo_cluster_keywords` (cluster_id, keyword_id), se evita array y se normaliza mejor.  
  - Vinculación: siempre `project_id`; opcionalmente `chat_id` para trazar en qué conversación se generó.

- **marketing_seo_competitor_analysis**  
  - Propósito: análisis de competidores por silo (top 3 keywords por silo → top 3 resultados SERP → análisis de contenido y oportunidades).  
  - Campos mínimos sugeridos: `id` (UUID PK), `project_id` (FK), `cluster_id` (FK a `marketing_seo_clusters`), `keyword` (text), `serp_results` (JSONB: top 3 URLs, títulos, snippets), `content_analysis` (JSONB o text), `opportunities` (JSONB o text), `strategy` (text), `created_at`, `updated_at`.  
  - Relación: una fila por (cluster/silo, keyword) o una por cluster con JSONB que agrupe las 3 keywords; definir según granularidad deseada.  
  - Vinculación: `project_id` y `cluster_id` (y por tanto al proyecto y al silo).

### 3.3 Relaciones con project_id y conversation_id (chat_id)

- **project_id:** Todas las tablas SEO tienen `project_id` para aislamiento multi-tenant. Las queries de los agentes y del dashboard filtran siempre por `project_id` (y por usuario vía `user.project_id` en la API).  
- **chat_id:** Si el flujo SEO está “dentro de” una conversación concreta, se puede guardar `chat_id` en keywords y clusters para trazabilidad y para que el contexto del chat (buyer persona de ese chat) siga siendo el mismo. Si el SEO es “por proyecto” independiente del chat, `chat_id` puede ser nullable. Este documento deja abierta la decisión; el PRP debe fijarla.  
- **conversation_id:** En el sistema actual, la conversación se identifica por `chat_id` (`marketing_chats.id`). No existe un “conversation_id” distinto; al hablar de “conversation_id” en requisitos se refiere a `chat_id`.

### 3.4 No romper el modelo actual

- No añadir columnas a `marketing_projects` para datos SEO que puedan vivir en tablas dedicadas.  
- No modificar esquema de `marketing_buyer_personas`, `marketing_messages` ni `marketing_chats` para almacenar keywords o clusters; usar solo tablas SEO.  
- Las migraciones deben ser aditivas (CREATE TABLE, CREATE INDEX, ADD COLUMN si hace falta en tablas nuevas), sin DROP ni cambios destructivos en tablas existentes.

---

## 4. Agente 1 — Keyword Research

### 4.1 Patrón de agente

- Hereda de `BaseAgent`.  
- Recibe `llm_service`, `memory_manager` y, como los demás agentes que persisten, una sesión de BD (`AsyncSession`).  
- Implementa `execute(chat_id, project_id, user_message)` y opcionalmente flujo de streaming si se desea mostrar progreso.

### 4.2 Memoria larga, RAG, persistencia, lectura/escritura BD

- Al inicio: `context = await self._get_context(chat_id, project_id, user_message)`. Usa `context["buyer_persona"]`, `context["relevant_docs"]`, `context["has_buyer_persona"]` para adaptar mensajes y estrategia.  
- RAG: ya incluido en `context`; puede usarse para técnicas de contenido o ejemplos de keywords si hay documentos relevantes.  
- Persistencia: escribe en `marketing_seo_keywords` (estado inicial draft o pending). Lee desde BD si hay keywords previas del proyecto para no duplicar o para “reprocesar” solo algunas.

### 4.3 Contexto existente del proyecto

- Usar `context["buyer_persona"]` para saber tipo de negocio, ubicación, dolor del cliente.  
- Si en buyer persona o en configuración/localización se indica “negocio local”, el agente debe adaptar la estrategia (ej. priorizar keywords con localidad, “cerca de mí”, etc.).  
- No regenerar buyer persona; solo leer.

### 4.4 Detección de negocio local

- Criterio: campo en buyer persona (ej. “tipo”: “local” o “ubicación” con ciudad/región) o pregunta explícita en el flujo. Debe documentarse en el PRP el criterio exacto (campo JSON, valor posible, fallback).  
- Si es local: incluir en el prompt del agente instrucciones para sugerir keywords con intención local y, si la API lo soporta, parámetros de ubicación en DataForSEO.

### 4.5 Flujo detallado

1. Usuario pide estudio de palabras clave (en chat o desde dashboard).  
2. Agente obtiene contexto (`_get_context`).  
3. Si no hay buyer persona y el agente lo requiere: responder pidiendo generar buyer persona primero.  
4. Generar ideas iniciales de keywords (con LLM) basándose en buyer persona, negocio y mensaje del usuario.  
5. **Aprobación humana:** Mostrar ideas al usuario y esperar confirmación o edición. No ejecutar DataForSEO masivo hasta que el usuario apruebe (o confirmar explícitamente “ejecutar estudio completo”).  
6. Tras aprobación: llamar a DataForSEO (vía MCP o servicio backend) para las ideas aprobadas; obtener para cada keyword: keyword, volume, difficulty, search_intent, short_tail/long_tail.  
7. Filtrar: omitir volumen 0. Ordenar por volumen descendente. Marcar o destacar dificultad alta (umbral definido en config).  
8. Persistir en `marketing_seo_keywords` con status `pending` o `approved` según flujo (ej. aprobación explícita tras revisión).  
9. Permitir edición manual (update de campos) y eliminación (delete o status=rejected). Permitir “reprocesamiento” (volver a llamar DataForSEO para keywords seleccionadas y actualizar filas).

### 4.6 Integración con DataForSEO (MCP o backend)

- **Opción A — MCP (DataForSEO):** Crear un servidor MCP nuevo (ej. `mcp-dataforseo`) o extender el MCP existente (`mcp-marketing-brain`) para exponer herramientas como `dataforseo_keyword_data` y `dataforseo_serp`. El backend (Python) actuaría como cliente MCP (HTTP o stdio) e invocaría esas tools desde el Agente 1 y el Agente 3. Requiere definir transporte (HTTP recomendado si el backend y el MCP corren en la misma red) y autenticación si aplica.  
- **Opción B — Servicio backend:** Servicio en el backend (Python) que llame directamente a la API REST de DataForSEO (Keyword Data, SERP, etc.) con API key desde variables de entorno. El agente llama a este servicio desde su `execute()` (sin MCP).  
- El documento fundacional no decide A vs B; el PRP debe especificar una y la firma (entrada: lista de keywords o ideas; salida: lista de objetos con keyword, volume, difficulty, search_intent, short_tail/long_tail).  
- **Manejo de costos:** DataForSEO cobra por request. Definir: máximo de keywords por request, agregación en batches, y opcionalmente tope por proyecto/usuario por día. Configuración en env o config.  
- **Rate limits:** Respetar límites de la API (requests/minuto); implementar backoff y cola si hace falta. Documentar en PRP.  
- **Control de errores:** Timeout, 4xx/5xx, respuesta vacía. No dejar el estado a medias: si falla un batch, guardar lo que se haya obtenido y marcar el run como parcial o reintentar según política. Validaciones: comprobar que cada item devuelto tenga al menos keyword y volume (o difficulty); omitir volumen 0.

### 4.7 Validaciones y estrategias anti-alucinación

- Las keywords que se envían a DataForSEO deben ser las aprobadas por el usuario o las generadas por el LLM con un paso de confirmación. No inventar keywords no aprobadas.  
- Al recibir respuesta de DataForSEO, mapear solo campos que existan en la respuesta; no rellenar con valores por defecto inventados (ej. difficulty 0 si no viene).  
- Para ideas generadas por LLM: validar que sean cadenas no vacías y sin caracteres inválidos; límite de longitud.  
- Persistir solo lo que venga de la API (o lo editado explícitamente por el usuario); no “completar” con datos sintéticos.

---

## 5. Agente 2 — Clusterización

### 5.1 Objetivo

Agrupar las keywords aprobadas por intención de búsqueda y organizarlas en una jerarquía: Nivel 1 = Home, Nivel 2 = Subpáginas, Nivel 3 = Ramificaciones. Resultado numerado (cluster 1, 2, 3…) y persistido.

### 5.2 Acceso a keywords aprobadas

- **Fuente única:** Base de datos. Query: `SELECT * FROM marketing_seo_keywords WHERE project_id = ? AND status = 'approved'` (y `chat_id = ?` si aplica).  
- **Garantía:** El agente no debe usar “las keywords del último mensaje” ni un subconjunto arbitrario. Debe procesar **todas** las filas devueltas por la query. Si el volumen es muy alto (ej. >500), definir estrategia: procesar en chunks con resumen incremental o aumentar límite de contexto; el PRP debe especificarlo.  
- **Memoria larga:** El conjunto de keywords se carga al inicio de `execute()` y se incluye en el prompt (o en un resumen estructurado por tokens) para que el LLM clusterice sobre el conjunto completo.

### 5.3 Coherencia conversacional

- El agente recibe `chat_id` y `project_id` y usa `_get_context()` para tener historial reciente y buyer persona. Las respuestas en lenguaje natural deben ser coherentes con el tono y con lo que el usuario ha pedido antes (ej. “clusterizar por intención comercial”).

### 5.4 Estructura de salida

- Nivel 1: clusters que corresponden a “Home” o temas principales.  
- Nivel 2: subpáginas bajo cada nivel 1.  
- Nivel 3: ramificaciones bajo cada nivel 2.  
- Cada cluster debe tener número (1, 2, 3…), etiqueta y lista de keyword_ids (o filas en tabla intermedia).  
- Persistir en `marketing_seo_clusters` (y en `marketing_seo_cluster_keywords` si se usa tabla intermedia), con `project_id` y opcionalmente `chat_id`.

### 5.5 Script Python existente

- Si existe un script Python (externo o en el repo) que ya hace clusterización por intención (ej. embeddings + clustering), el agente puede: (a) invocar ese script pasándole la lista de keywords desde BD y leyendo su salida para persistirla, o (b) reimplementar la lógica en el agente con LLM + reglas.  
- Alternativas técnicas: (1) Solo LLM: prompt con todas las keywords y pedir JSON de clusters. (2) Híbrido: script hace pre-clustering por similitud; LLM asigna etiquetas y niveles. (3) Solo script: si el script ya devuelve niveles, el agente solo orquesta lectura BD → script → escritura BD.  
- Riesgos: script con dependencias distintas (versión Python, librerías); tiempo de ejecución; formato de salida estable. Documentar en PRP la opción elegida y el contrato de entrada/salida del script.

### 5.6 Persistencia y vinculación

- Borrar o marcar como obsoletos los clusters anteriores del proyecto (o crear nueva versión) antes de escribir los nuevos. Evitar duplicar clusters sin limpiar.  
- Vincular cada cluster a `project_id` y a los `keyword_id` que contiene.

---

## 6. Agente 3 — Análisis de competidores

### 6.1 Objetivo

Por cada silo (cluster): tomar las 3 keywords principales, consultar SERP (DataForSEO SERP o equivalente), obtener top 3 resultados, analizar contenido, detectar oportunidades y generar estrategia para superar a los competidores.

### 6.2 Entrada

- Leer desde BD: clusters del proyecto (tabla `marketing_seo_clusters`) y para cada cluster las 3 keywords con mayor volumen (o criterio definido) desde `marketing_seo_keywords`.  
- Contexto de conversación y buyer persona vía `_get_context()`.

### 6.3 Flujo

1. Obtener clusters por `project_id`.  
2. Para cada cluster, obtener las 3 keywords principales (desde BD).  
3. Para cada keyword, llamar a DataForSEO SERP (o API equivalente) y obtener top 3 resultados (URL, título, snippet).  
4. Analizar contenido (títulos, snippets, intención) — puede ser con LLM.  
5. Detectar oportunidades (gaps, debilidades de competidores).  
6. Generar estrategia para superarlos (texto o estructura).  
7. Persistir en `marketing_seo_competitor_analysis` por silo/cluster, vinculado a `project_id` y `cluster_id`.

### 6.4 Manejo de HTML, parsing, limitaciones

- Si la API SERP devuelve HTML de la página (no solo snippet), opcionalmente parsear para análisis más profundo. Documentar: librería de parsing (BeautifulSoup, etc.), limpieza de scripts/estilos, extracción de texto.  
- Limitaciones: tamaño máximo de HTML a analizar, tiempo de timeout, coste por request.  
- Si solo se usan título y snippet del SERP (sin fetch de página), no hay parsing HTML; solo manejo de strings. El PRP debe indicar si se hace scraping de página o solo SERP.

### 6.5 Costes y riesgos legales

- Costes: igual que Agente 1, definir tope y rate limits por API SERP.  
- Riesgos legales: scraping de contenido completo de competidores puede tener implicaciones de derechos de autor y términos de uso. Recomendación: usar solo datos que la API SERP devuelva oficialmente (título, URL, snippet) y no hacer scraping masivo sin revisión legal. El PRP debe reflejar esta decisión.

### 6.6 Dependencias externas

- DataForSEO (o proveedor SERP) como dependencia crítica. Plan de contingencia si la API no está disponible: guardar estado “pendiente” y reintentar; no bloquear el resto del flujo.

---

## 7. Dashboard

### 7.1 Nueva sección SEO

- Añadir una sección “SEO” o “Dashboard SEO” dentro del sistema actual (por ejemplo, bajo el mismo layout que “Biblioteca de Conocimiento” y “Videos”).  
- Barra lateral (sidebar): además de “Nueva Conversación”, lista de chats, “Biblioteca de Conocimiento” y “Videos”, incluir entrada(s) para:  
  - **Palabras clave** (listado y detalle de keywords del proyecto, desde BD).  
  - **Clusterización** (vista de clusters por nivel, desde BD).  
  - **Competidores** (vista de análisis por silo, desde BD).  
- Cada sección debe **leer desde base de datos** (API que consulte `marketing_seo_keywords`, `marketing_seo_clusters`, `marketing_seo_competitor_analysis` filtrado por `project_id` del usuario). No depender exclusivamente del chat para mostrar datos; el chat puede ser el canal de comandos y de mensajes, pero la fuente de verdad para listados y tablas es la BD.

### 7.2 Coherencia con UI actual

- Reutilizar el mismo patrón de navegación (sidebar con botones que hacen `router.push('/dashboard/...')`), autenticación y obtención de `project_id` (desde usuario logueado). Rutas sugeridas: `/dashboard/seo/keywords`, `/dashboard/seo/clusters`, `/dashboard/seo/competitors` (o nombres equivalentes).  
- Las páginas del dashboard SEO deben usar la misma capa de API (fetch desde frontend al backend) y el backend debe exponer endpoints GET (y POST/PATCH donde haga falta para aprobar keywords, re-ejecutar, etc.) que lean/escriban las tablas SEO.

---

## 8. Análisis preventivo

### 8.1 Riesgos de romper el contexto actual

- **Riesgo:** Nuevos agentes no llamen a `_get_context()` o ignoren `buyer_persona` y tomen decisiones sin contexto.  
- **Mitigación:** Contrato claro en código y en PRP: todos los agentes SEO reciben `chat_id` y `project_id`, llaman a `_get_context()` al inicio y usan al menos `has_buyer_persona` y, si existe, `buyer_persona` en el prompt.  
- **Riesgo:** Añadir estados al RouterAgent que envíen a agentes SEO sin haber cargado el historial.  
- **Mitigación:** En el endpoint de chat, seguir llamando `ensure_chat_loaded(chat_id, project_id)` antes de procesar; los agentes SEO se ejecutan en el mismo flujo y ya tendrán memoria cargada.

### 8.2 Riesgos de duplicar tablas

- **Riesgo:** Crear “proyectos_seo” o “keyword_sets” que dupliquen el concepto de proyecto.  
- **Mitigación:** Solo tablas `marketing_seo_*` con `project_id` FK a `marketing_projects`. No crear otra entidad “proyecto”.

### 8.3 Riesgos de inconsistencia de memoria

- **Riesgo:** Agente 2 clusteriza con un subconjunto de keywords porque leyó del chat en lugar de BD.  
- **Mitigación:** Siempre leer keywords aprobadas desde `marketing_seo_keywords` con query explícita; no parsear mensajes del chat para extraer keywords.  
- **Riesgo:** Dos ejecuciones simultáneas del mismo agente (ej. dos clusters a la vez) sobrescribiendo resultados.  
- **Mitigación:** Bloqueo optimista o cola por proyecto (o por chat_id); o mensaje al usuario “espera a que termine la clusterización anterior”.

### 8.4 Riesgos de costes API

- **Riesgo:** Llamadas ilimitadas a DataForSEO (keywords + SERP) por usuario o proyecto.  
- **Mitigación:** Límites por request (máx. keywords por run, máx. SERPs por run), y opcionalmente tope diario por proyecto; configuración en env. Mostrar advertencia en UI si se acerca al tope.

### 8.5 Ambigüedades en SEO local

- **Riesgo:** “Negocio local” no está bien definido (solo ciudad, solo país, radio, etc.) y el agente no adapta bien.  
- **Mitigación:** Definir en PRP un criterio único (campo en buyer persona o en configuración de proyecto) y documentar en el prompt del Agente 1 cómo adaptar keywords (ej. añadir “en [ciudad]”, “cerca de mí”).

### 8.6 Problemas de sincronización multi-agente

- **Riesgo:** Agente 3 se ejecuta antes de que Agente 2 haya persistido clusters.  
- **Mitigación:** Flujo guiado en UI o en chat: “Primero aprueba keywords → luego clusteriza → luego analiza competidores”. Opcionalmente comprobar en Agente 3 que existan clusters antes de ejecutar; si no, devolver mensaje “Ejecuta antes la clusterización”.

### 8.7 Estrategias para evitar pérdida de información

- **Keywords:** Siempre persistir antes de “aprobar”; no perder nunca la lista por un error de frontend.  
- **Clusters:** Tras clusterizar, escribir en BD y luego mostrar resumen en chat; si falla la respuesta en chat, los datos ya están en BD.  
- **Idempotencia:** Re-ejecutar no debe borrar datos sin criterio; definir si se versiona o se reemplaza y documentarlo.  
- **Logs:** Registrar en logs qué `project_id`/`chat_id` y cuántas filas se leen/escriben en cada ejecución de agente para depuración.

---

## 9. Resumen de decisiones que debe fijar el PRP

- **chat_id en datos SEO:** ¿Keywords y clusters son por proyecto o por chat? Si es por chat, todas las tablas SEO llevan `chat_id` no nulo y las queries filtran por él.  
- **Versionado:** Overwrite vs. version/run_id para keywords runs, clusters y análisis de competidores.  
- **DataForSEO:** Integración vía MCP vs. servicio backend; endpoints exactos y formato de respuesta.  
- **Límites:** Máximo keywords por run, máximo SERPs por run, tope diario por proyecto (si aplica).  
- **Script de clusterización:** Si se usa script Python existente, ruta, contrato y cómo se invoca desde el agente.  
- **Criterio “negocio local”:** Campo(s) en buyer persona o en proyecto y cómo el Agente 1 adapta la estrategia.  
- **Rutas y nombres de sección en el dashboard:** Rutas exactas y textos de la barra lateral.

---

## 10. Referencias de código actual (anclaje al codebase)

- **BaseAgent:** `backend/src/agents/base_agent.py` — `execute(chat_id, project_id, user_message)`, `_get_context()`.  
- **MemoryManager:** `backend/src/services/memory_manager.py` — `get_context()`, `ensure_chat_loaded()`, `load_chat_history()`, `_get_buyer_persona_row()`.  
- **RAGService:** `backend/src/services/rag_service.py` — `search_relevant_docs()`, `search_learned_concepts()`.  
- **Modelos BD:** `backend/src/db/models.py` — `MarketingProject`, `MarketingChat`, `MarketingMessage`, `MarketingBuyerPersona`; tablas en esquema con prefijo `marketing_`.  
- **Chat API y agentes:** `backend/src/api/chat.py` — `get_agent_system()` instancia `RouterAgent`, `BuyerPersonaAgent`, `MemoryManager`; `ensure_chat_loaded()` se llama antes de procesar mensaje.  
- **Sidebar (navegación):** `frontend/app/components/Sidebar.tsx` — enlace a “Biblioteca de Conocimiento” (`/dashboard/knowledge`) y “Videos” (`/dashboard/videos/loras`); aquí se añadirán enlaces SEO.  
- **Esquema SQL inicial:** `backend/db/001_initial_schema.sql` — definición de `marketing_projects`, `marketing_chats`, `marketing_messages`, `marketing_buyer_personas`. Las migraciones SEO deben ser archivos nuevos (ej. `backend/db/00X_seo_tables.sql`) sin modificar 001.  
- **MCP existente:** `mcp-marketing-brain/src/server.py` — FastMCP con tools actuales; referencia para extender con DataForSEO o para crear MCP separado.

---

*Fin del documento fundacional. Este archivo sirve como input completo y técnico para un flujo posterior que generará el PRP automáticamente. Si falta contexto en alguna sección, debe completarse antes de generar el PRP para que el resultado no quede incompleto.*
