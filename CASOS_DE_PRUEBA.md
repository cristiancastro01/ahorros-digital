## CASOS DE PRUEBA
---
# PRUBA-CS-001 – Registro exitoso 
Prioridad: P0
Modulo: Onboarding 
Precondiciones: Acceso al ambiente de pruebas ahorro digital, Usuario no registrado 
Datos: Usuario valido, Contraseña valida
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com/
2.	Dar clic sobre el menú del costado superior derecho
3.	Seleccionar la opción de registro
4.	Diligenciar los datos solicitados para el registro
5.	Clic en ‘registrar’
Resultado esperado: Usuario registrado y redirigido al dashboard
---
# PRUBA-CS-002 – Loguin fallido por contraseña/usuario incorrecto 
Prioridad: P0
Modulo: Onboarding 
Precondiciones: Acceso al ambiente de pruebas ahorro digital, tener usuario registrado
Datos: Usuario/contraseña invalido (uno de los dos)
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com /
2.	Diligenciar el formulario de inicio de sesión con usuario o contraseña incorrectos
3.	Dar clic en ingresar
4.	Validar que no se muestre el mensaje ‘Verifique los datos ingresados e intente nuevamente’
Resultado esperado: Mensaje de error y login no realizado
---
# PRUBA-CS-003 – Campos obligatorios vacíos – pantalla registro 
Prioridad: P0
Modulo: Onboarding 
Precondiciones: Acceso al ambiente de pruebas ahorro digital
Datos: N/A
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com/
2.	Dar clic sobre el menú del costado superior derecho
3.	Seleccionar la opción de registro
4.	No diligenciar los datos solicitados para el registro
5.	Validar que no se habilite el botón de ‘registrar’
Resultado esperado: botón de ´Registrar’ deshabilitado
---
# PRUBA-CS-004 – Recaptcha inválido  - Registro
Prioridad: P0
Modulo: Onboarding 
Precondiciones: Acceso al ambiente de pruebas ahorro digital
Datos: N/A
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com /
2.	Dar clic sobre el menú del costado superior derecho
3.	Seleccionar la opción de registro
4.	Diligenciar los datos solicitados para el registro
5.	No validar recaptcha
6.	Verificar que no permita realizar el registro
Resultado esperado: Registro bloqueado 
---
# PRUBA-CS-005 – Simulación de ahorro
Prioridad: P1
Modulo: Simulador
Precondiciones: Acceso al ambiente de pruebas ahorro digital, usuario autenticadop 
Datos: Monto 1.000.000
Pasos: 
1.	Ingresar a la url htttps://ahorrodigita-test l.com/
2.	Realizar proceso de login exitoso
3.	Ingresar monto 1.000.000 
4.	Dar clic en Simular 
5.	Genera simulación correctamente 
Resultado esperado: Se evidencia la simulación y la ganancia del ahorro correctamente 
---
# PRUBA-CS-006 – Simulación de ahorro sin monto
Prioridad: P1
Modulo: Simulador
Precondiciones: Acceso al ambiente de pruebas ahorro digital, usuario autenticado
Datos: Monto 0
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com/
2.	Realizar proceso de login exitoso
3.	Ingresar monto 0 
4.	Dar clic en Simular 
5.	Verificar que no se habilite el botón de simular 
Resultado esperado: no se habilita el botón de simular y se muestra alerta de monto invalido
 ---
# PRUBA-CS-007 – Simulación de ahorro negativo
Prioridad: P1
Modulo: Simulador
Precondiciones: Acceso al ambiente de pruebas ahorro digital, usuario autenticado
Datos: Monto -500
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com/
2.	Realizar proceso de login exitoso
3.	Intentar ingresar monto -500
4.	Verificar que el campo no permita ingresar valores menores a 0
Resultado esperado: No permite ingresar el ‘-‘ en el campo
---
# PRUBA-CS-008 – Acceder al simulador sin login
Prioridad: P1
Modulo: Simulador
Precondiciones: Acceso al ambiente de pruebas ahorro digital, usuario autenticado
Datos: N/A
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com /registrar
2.	Mensaje de error, validando que no hay login

Resultado esperado: Mensaje de error 401
---
# PRUBA-CS-009 – Validación de productos
Prioridad: P2
Modulo: Productos
Precondiciones: Acceso al ambiente de pruebas ahorro digital, usuario autenticado
Datos: N/A
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com
2.	Realiza procedo de login
3.	Ingresa a la opción de productos 
4.	Visualiza la lista de productos 

Resultado esperado: Visualización exitosa de la lista de productos 
---
# PRUBA-CS-010 – Página inexistente (404) - Productos
Prioridad: P2
Modulo: Productos
Precondiciones: Acceso al ambiente de pruebas ahorro digital, usuario autenticado
Datos: URL invalida
Pasos: 
1.	Ingresar a la url htttps://ahorrodigital-test.com
2.	Realiza procedo de login
3.	Ingresa a la opción de productos 
4.	Modificar la url de productos. Ej. htttps://ahorrodigital-test.com /productus1

Resultado esperado: Página no encontrada (404)

