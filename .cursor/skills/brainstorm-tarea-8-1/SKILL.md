---
name: brainstorm-tarea-8-1
description: Brainstorm y checklist para TAREA 8.1 (memoria conversacional, contexto largo y visualización). Úsala al iniciar TAREA 8.1 o cuando haya dudas/deuda técnica en memoria, routing o UI de análisis.
---

# Brainstorm TAREA 8.1 (Memoria + Contexto + Visualización)

## Objetivo
Evitar olvidos y detectar deuda técnica antes (y durante) la implementación de TAREA 8.1.

## Reglas (obligatorias)
- **Serena**: antes de cada cambio, ubicar símbolos/calls reales y listar archivos exactos a tocar.
- **Archon**: antes de decidir un patrón, validar el enfoque (memoria por sesión/chat, window \(k\), summarization, retrieval) y dejar “por qué”.
- **Consistencia**: no renombrar parámetros ni inventar sinónimos en nombres públicos.
- **Cambios mínimos**: resolver lo crítico primero (memoria + routing) antes de UI avanzada.

## Brainstorm rápido (hazlo siempre al empezar)
Responde mentalmente y deja notas en `docs/TAREAS_PENDIENTES_Y_GOTCHAS.md` si aplica:

### 1) ¿Qué significa “mantener conversación” aquí?
- **Must**: recordar los últimos \(N\) turnos del chat actual.
- **Must**: no mezclar conversaciones entre chats diferentes.
- **Should**: poder reabrir el chat y reconstruir la ventana desde DB.

### 2) ¿Qué memoria entra al prompt y cuándo?
- **Corto plazo**: últimos mensajes (ventana).
- **Largo plazo**: buyer persona / análisis guardado.
- **Semántico**: RAG (solo lo relevante por consulta).
- **Contexto largo de docs**: si se pide “siempre presente”, decidir **resúmenes persistentes** (y documentar si requiere migración DB).

### 3) Intent routing: ¿qué NO debe pasar?
- No clasificar “cualquier cosa” como `CONTENT_GENERATION`.
- No disparar agentes pesados cuando el usuario está respondiendo onboarding.

## Checklist de deuda técnica (marcar y priorizar)
- [ ] **Short-term memory por chat_id** (no global compartida)
- [ ] **Carga de historial** antes de route/ejecución (incluye streaming SSE)
- [ ] **Endpoint/UI** para ver buyer persona y estado de “forum/pain_points/journey”
- [ ] **Campos vacíos**: `forum_simulation`, `pain_points`, `customer_journey` siguen `{}` hasta implementar agentes
- [ ] **Contexto largo de docs**: requiere `summary` persistente (posible migración)

## Validación mínima (antes de cerrar TAREA 8.1)
- En un chat existente, el agente puede referirse a un mensaje anterior.
- Mensajes normales NO disparan generación de contenido.
- Hay forma de ver el buyer persona (API y UI básica).

