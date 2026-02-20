# Plan de implementación — Migración de estilos a páginas de servicio

## Cambios por página (aplicar en este orden)

Para cada página se aplicarán exactamente **2 tipos de cambios**:

### Cambio A — `BudgetCTA` → `CallToAction`
Reemplazar el bloque de presupuesto antiguo por el nuevo componente de tarjeta oscura.

**Antes:**
```tsx
<BudgetCTA title="..." description="..." ctaText="..." ctaHref="..." />
```

**Después:**
```tsx
<CallToAction
  layout="card"
  dark
  badge="Presupuesto sin compromiso"
  title="..."
  description="..."
  primaryButton={{ text: "...", href: "/contacto", icon: "arrow" }}
  secondaryButton={{ text: "Háblanos por WhatsApp", href: WHATSAPP_URL, icon: "whatsapp", variant: "whatsapp", external: true }}
/>
```

---

### Cambio B — Sección "Servicios relacionados" con `ColorChangeCards`
Añadir antes de `WhyMGSection` un bloque con 3-4 servicios relacionados.

```tsx
<Section variant="light">
  <Heading as="h2">Otros servicios de MG Eventos</Heading>
  <ColorChangeCards services={[...serviciosRelacionados]} />
</Section>
```

---

## Orden de páginas

| # | Página | Slug |
|---|--------|------|
| 1 | **DJ para eventos** | `/dj-para-eventos-en-galicia` |
| 2 | DJ para fiestas | `/dj-para-fiestas-en-galicia` |
| 3 | DJ para bodas | `/dj-para-bodas-en-galicia` |
| 4 | Fotomatón | `/fotomaton-en-galicia` |
| 5 | Pantallas LED | `/pantallas-led-para-eventos-en-galicia` |
| 6 | Discotecas móviles | `/discotecas-moviles-en-galicia` |
| 7 | Escenario móvil | `/escenario-movil-para-eventos` |

---

## Servicios relacionados por página

| Página principal | Servicios relacionados a mostrar |
|-----------------|----------------------------------|
| DJ para eventos | Disco móvil · Pantallas LED · Fotomatón |
| DJ para fiestas | DJ bodas · Disco móvil · Fotomatón |
| DJ para bodas | Fotomatón · Pantallas LED · DJ fiestas |
| Fotomatón | DJ bodas · Disco móvil · DJ eventos |
| Pantallas LED | DJ eventos · Escenario · Disco móvil |
| Discotecas móviles | DJ eventos · Escenario · Fotomatón |
| Escenario móvil | Pantallas LED · Disco móvil · DJ eventos |

---

## Estado de ejecución

- [x] Home — completada
- [x] DJ para eventos — completada
- [x] DJ para fiestas — completada
- [x] DJ para bodas — completada
- [x] Fotomatón — completada
- [x] Pantallas LED — completada
- [x] Discotecas móviles — completada
- [x] Escenario móvil — completada ✅ PLAN COMPLETADO
- [ ] Fotomatón
- [ ] Pantallas LED
- [ ] Discotecas móviles
- [ ] Escenario móvil
