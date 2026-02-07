# 🧪PLAN DE PRUEBAS AHORRO DIGITAL
## 1.	Introducción 
En este documento se consigna y describe el plan de pruebas para la aplicación WEB Ahorro Digital del banco xxxx, cuyo objetivo es permitir a los usuarios examinar y/o buscar productos de ahorro que se ajusten a sus necesidades, simulando el rendimiento de sus depósitos.

Este plan de pruebas establece alcance, objetivos, estrategia, riesgos y criterios de aceptación, generando una experiencia confiable y segura para el usuario final.

## 2.	Objetivos de prueba
-	Validar correcto ingreso y presentación del flujo de onboarding 
-	Garantizar que el simulador de ahorro realice la proyección de este de manera correcta
-	Detección de errores de manera temprana 
-	Asegurar experiencia de usuario entendible y con mensajes acertados 
-	Verificar que los productos de ahorro se visualicen de manera correcta 

## 3.	Alcance
•	En alcance
-	Registro de usuarios
-	Login
-	Validación de campos (obligatoriedad, caracteres y formatos)
-	Simulación de ahorros
-	Visualización y/o exploración de los productos de ahorro.
-	Validaciones de interfaz (tonos, ubicación de los elementos, mensajes, etc.)

•	Fuera del alcance 
-	Apertura del ahorro 
-	Notificaciones 
-	Integración con otras herramientas y/o aplicaciones del banco xxxx

## 4.	Tipos de pruebas 
-	Pruebas funcionales
-	Pruebas no funcionales 
-	Pruebas por mal (negativas)
-	Pruebas automatizadas (UI) 
-	Pruebas exploratorias (basadas en la experiencia)

## 5.	Estrategia de pruebas
Las pruebas se llevaran acabo mediante pruebas manuales y automatizadas, haciendo uso de herramientas y estándares como: 
-	ISTQB 
-	Automatización con playwright para flujos frontend 
-	Ejecución en modo headless
-	Evidencia mediante capturas de pantalla y reportes de automatización 

## 6.	Criterios de aceptación 
-	Campo monto, tipo de ahorro y plazo deben estar diligenciados
-	El botón de simular no se habilitará hasta que los campos obligatorios estén diligenciados 
-	Campo monto solo debe recibir valores numéricos mayores a 0 
-	Las tasas de simulación deben ser parametrizables 

## 7.	Identificación de prioridad y riesgos 
| Prioridad | Módulo | Riesgo | Impacto |  
| --- | --- | --- | --- |
| P0 | Onboarding | Login fallido (con credenciales correctas) | Usuario no puede acceder |
| P0 | Onboarding | No se presenta pantalla de onboarding | Usuarios sin correcto onboarding ‘introducción’ |
| P1 | Simulador | Cálculos incorrectos | Perdida de confianza / problemas legales |
| P2 | Productos | Información incorrecta de los productos | Confusiones y pérdida de confianza |	

## 8.	Entorno de pruebas 
-	Aplicación Web (entorno ficticio).
-	Navegadores: Chromium.
-	Sistema Operativo: Windows / macOS.
-	Herramienta de automatización: Playwright  
-	Control de versiones: GitHub.

## 9.	Roles y responsabilidades 
-	QA Automation: diseño y ejecución de pruebas automatizadas, reporte de defectos
-	QA Manual: Diseño y ejecución de pruebas manuales, reporte de defectos 
-	Desarrollo: Corrección de defectos 
-	P.O.: Validación de reglas de negocio 

## 10.	Criterios de entrada 
-	Historias definidas y refinadas 
-	Ambiente(s) disponibles 
-	Diseño de casos de prueba 

## 11.	Criterios de salida 
-	Ejecución completa de pruebas P0
-	Bugs documentados 
-	Evidencias de pruebas 
-	Reportes generados 

## 12.	Entregables
-	Plan de pruebas 
-	Casos de pruebas 
-	Scripts de automatización 
-	Repositorio público en Github 

## 13.	Recomendaciones 
-	Agregar notificaciones para usuarios 
-	Implementar validaciones backend y frontend 
-	Ejecutar pruebas automatizadas en CI/CD
