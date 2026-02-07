# 🧪 Prueba Técnica – ESPECIALISTA QA  
## Proyecto: Ahorro Digital

---

## 📌 Descripción General

Este repositorio contiene la solución a la **Prueba Técnica de QA Automation**, cuyo objetivo es validar la calidad de la aplicación web ficticia **Ahorro Digital**, diseñada para que los usuarios exploren productos de ahorro y simulen posibles ganancias antes de su salida a producción.

La solución cubre:
- Planeación de pruebas
- Diseño de casos de prueba
- Automatización de pruebas UI
- Reporte de defectos
- Recomendaciones de mejora

---

## 🎯 Objetivos de la Prueba

- Validar el flujo de **registro e inicio de sesión (Onboarding)**.
- Verificar reglas de negocio del **simulador de ahorro**.
- Garantizar una correcta experiencia de usuario (UI).
- Detectar errores críticos antes de producción.
- Demostrar buenas prácticas de QA Automation.

---

## 📂 Estructura del Repositorio

ahorro-digital-qa/
│
├── tests/
│ ├── onboarding.spec.ts
│ ├── simulator.spec.ts
│
├── reports/
│ └── playwright-report/
│
├── evidence/
│ ├── screenshots/
│ └── videos/
│
├── playwright.config.ts
├── PLAN_DE_PRUEBAS.md
├── CASOS_DE_PRUEBA.md
└── README.md


---

## 🧠 Plan de Pruebas

El **Plan de Pruebas** define:
- Objetivos
- Alcance
- Tipos de pruebas
- Criterios de aceptación
- Riesgos clasificados por prioridad

### 🔥 Priorización de Riesgos
- **P0**: Onboarding (registro e inicio de sesión)
- **P1**: Simulador de ahorro
- **P2**: Visualización de productos y validaciones UI

📄 Documento: `PLAN_DE_PRUEBAS.md`

---

## 🧪 Casos de Prueba

Se diseñaron **12 casos de prueba**, incluyendo:
- Casos funcionales
- Casos negativos
- Validaciones de interfaz (UI)

Todos los casos están clasificados por:
- Prioridad (P0 / P1 / P2)
- Módulo funcional

📄 Documento: `CASOS_DE_PRUEBA.md`

---

## 🤖 Automatización de Pruebas

### 🛠 Herramientas Utilizadas
- **Playwright** – Automatización UI
- **TypeScript**
- **Node.js**
- **GitHub**

### 📌 Casos Automatizados
Se automatizaron **5 pruebas críticas**, entre ellas:
- Registro exitoso
- Registro fallido por campos obligatorios vacíos
- Login con credenciales inválidas
- Simulación de ahorro con monto válido
- Validación de monto inválido (0)

---

## ▶️ Ejecución de Pruebas

### 🔹 Requisitos Previos
- Node.js versión 18 o superior
- npm o yarn

### 🔹 Instalación de dependencias
```bash
npm install


