# MG Eventos — Auditoría de implementación de componentes

> Estado actual (Feb 2026) de qué componentes nuevos están activos en cada página.

---

## Leyenda
| Símbolo | Significado |
|---------|-------------|
| ✅ | Implementado con nuevo estilo |
| ⚠️ | Presente pero con estilo antiguo — pendiente de migración |
| ➖ | No aplica para esta página |

---

## Home `/`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ✅ `SyntheticHero` | 3D shader, GSAP, ssr:false |
| Carrusel colaboradores | ✅ `Logos3` | Auto-scroll embla, text logos |
| Pilares de valor | ✅ `ValueProps` | Iconos lucide, grid 3 col |
| Sobre MG Eventos | ✅ `ServiceDetailBlock` | Layout 2 col texto+lista |
| Servicios grid | ✅ `ColorChangeCards` | Grayscale→color hover, framer-motion |
| CTA WhatsApp | ✅ `CallToAction` card dark | Degradado violeta |
| Stats Bodas | ✅ `AnimatedCounter` | Intersection observer |
| CTA Contacto | ✅ `CallToAction` card light | Tarjeta clara |

**Estado:** 8/8 componentes migrados ✅

---

## DJ para eventos `/dj-para-eventos-en-galicia`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | Sin mejoras visuales extra |
| ValueProps | ✅ Ya implementado | Correcto |
| ServiceDetailBlock ×2 | ✅ Ya implementado | Correcto |
| BudgetCTA | ⚠️ Componente antiguo | → Migrar a `CallToAction` dark |
| Sección inline texto | ⚠️ Raw `<Section>` + texto | → Mantener o mejorar |
| WhyMGSection | ✅ Ya implementado | Dark bg, stats animados |
| Servicios relacionados | ⚠️ Ninguno | → Añadir `ColorChangeCards` |

**Pendiente:** BudgetCTA → CallToAction, añadir servicios relacionados

---

## DJ para fiestas `/dj-para-fiestas-en-galicia`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | |
| ValueProps | ✅ | |
| ServiceDetailBlock | ✅ | |
| BudgetCTA | ⚠️ | → Migrar a `CallToAction` dark |
| WhyMGSection | ✅ | |
| Servicios relacionados | ⚠️ Ninguno | → Añadir `ColorChangeCards` |

**Pendiente:** BudgetCTA → CallToAction, añadir servicios relacionados

---

## DJ para bodas `/dj-para-bodas-en-galicia`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | |
| ValueProps | ✅ | |
| ServiceDetailBlock | ✅ | |
| BudgetCTA | ⚠️ | → Migrar a `CallToAction` dark |
| Sección fotomatón | ⚠️ Raw `<Section>` + lista | → Mejorar con `ColorChangeCards` |
| WhyMGSection | ✅ | |

**Pendiente:** BudgetCTA → CallToAction, sección relacionada → ColorChangeCards

---

## Fotomatón `/fotomaton-en-galicia`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | |
| ValueProps | ✅ | |
| ServiceDetailBlock | ✅ | |
| BudgetCTA | ⚠️ | → Migrar a `CallToAction` dark |
| Sección bodas | ⚠️ Raw `<Section>` + texto | → Mejorar |
| WhyMGSection | ✅ | |

---

## Pantallas LED `/pantallas-led-para-eventos-en-galicia`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | |
| ValueProps | ✅ | |
| ServiceDetailBlock | ✅ | |
| BudgetCTA | ⚠️ | → Migrar a `CallToAction` dark |
| WhyMGSection | ✅ | |

---

## Discotecas móviles `/discotecas-moviles-en-galicia`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | |
| ValueProps | ✅ | |
| ServiceDetailBlock | ✅ | |
| BudgetCTA | ⚠️ | → Migrar a `CallToAction` dark |
| WhyMGSection | ✅ | |

---

## Escenario móvil `/escenario-movil-para-eventos`

| Componente | Estado | Notas |
|------------|--------|-------|
| Hero | ⚠️ `HeroSection` antiguo | |
| ValueProps | ✅ | |
| ServiceDetailBlock | ✅ | |
| BudgetCTA | ⚠️ | → Migrar a `CallToAction` dark |
| WhyMGSection | ✅ | |

---

## Resumen global

| Página | % migrado | Pendiente principal |
|--------|-----------|---------------------|
| Home | **100%** | — |
| DJ eventos | 60% | CTA + relacionados |
| DJ fiestas | 60% | CTA + relacionados |
| DJ bodas | 60% | CTA + relacionados |
| Fotomatón | 60% | CTA + relacionados |
| Pantallas LED | 60% | CTA + relacionados |
| Discotecas móviles | 60% | CTA + relacionados |
| Escenario móvil | 60% | CTA + relacionados |

**Total componentes pendientes de migración: 14**
