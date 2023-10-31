# Reporte de pruebas del frontend para el Sistema de Gestión de Trabajos de Grado de la Universidad del Cauca
Este informe detalla las pruebas de integración realizadas en el Frontend
del Sistema de Gestión de Trabajos de Grado de la Universidad del Cauca,
construido con Angular.
Utilizando la potente herramienta Selenium,
hemos registrado y evaluado el funcionamiento del sistema,
realizando pruebas de integracion para garantizar su estabilidad y eficiencia.
A través de este informe,
exploraremos las pruebas,
procedimientos y resultados que aseguran un Frontend confiable y acorde a las necesidades de la comunidad universitaria,
junto con unas pruebas de regresion que nos permite verificar que el trabajo se hace de manera incremental y asertiva.

A continuacion se presenta la configuracion para ejecutar las pruebas y sus resultados:

## Ejecucion de las pruebas
Se asume que la base de datos y el backend ya estan funcionando y corriendo.

### 1. Instalar la extension de Selenium IDE
[Selenium IDE (Extension)](https://www.selenium.dev/selenium-ide/)

### 2. Ejecutar la extension
Click en la extension instalada en el navegador

![Selenium IDE (extension)](Test/img/Selenium_IDE_extension.png)

### 3. Abrir el archivo de test de Selenium IDE
Cargar el archivo `testGestionTrabajosGrado.side` en la extension Selenium IDE
con la opcion "Open an existing project" archivo ubicado en Test/

![Selenium IDE (Welcome)](Test/img/Selenium_IDE_welcome.png))

### 4. Ejecutar las pruebas
Ejecutar las pruebas con el boton `Run all tests`

Advertencia: Tener en cuenta que es muy posible que las pruebas no vayan a funcionar
debido a que estan configuradas con la ip de un equipo local,
por lo tanto para correr las pruebas adecuadamente,
se necesita ajustar las pruebas para que apunten a la direccion ip adecuada.

![Selenium IDE (Run all tests)](Test/img/Selenium_IDE_tests.png)


## Resultados
Los resultados seran plasmados a detalle en un documento de excel llamado
`Bateria_de_pruebas_Gestion_Trabajos_grados` ubicado en Test/

A continuacion se muestra un gif que muestra el proceso de ejecucion junto con una serie de tablas que resumen las pruebas realizadas, esta ejecucion corresponde a la `iteracion 1` y tambien se encuentra como video presente en el repositorio en la ubicacion `Test/img/vid_test_run_1.mp4` o tambien en Youtube (Click en la imagen GIF).

[![Selenium IDE (Executing run all tests)](Test/img/gif_test_run_1.gif)](https://www.youtube.com/embed/OEZgHWcUAYk)

### **Tests Gestion de usuarios**

#### Iteracion 2
| # Test | Descripcion | Resultado | Observacion |
|--------|-------------|-----------|-----------|
| 1 | Buscar userTest (ID = 0) | Exito ||
| 2 | Crear el usuario (ID = 1060) | Exito ||
| 3 | Crear el usuario (ID = 1061) | Exito ||
| 4 | Buscar el usuario (ID = 1060) | Exito ||
| 5 | Buscar el usuario (ID = 1061) | Exito ||
| 6 | Eliminar el usuario (ID = 1060) | Exito ||
| 7 | Eliminar el usuario (ID = 1061) | Exito ||
| 8 | Crear usuario sin ID y con rol seleccionado | Exito | La prueba es exitosa porque impide la creación de un usuario sin un ID, sin embargo, no se proporciona al usuario final información acerca de por qué la creación no se llevó a cabo. |
| 9 | Crear usuario (ID = xyz) y con rol seleccionado | Exito | La prueba es exitosa porque impide la creación de un usuario con ID alfabetico, sin embargo, no se proporciona al usuario final información acerca de por qué la creación no se llevó a cabo. |
| 10 | Crear usuario sin  Rol | Fallo | Al presionar el boton guardar el servidor se detiene inesperadamente. |
| 11 | Crear usuario sin rol y con campos vacios | Fallo | Al presionar el boton guardar el servidor se detiene inesperadamente. |
| 12 | Crear usuario con (ID = 99) sin Rol y los demas campos vacios | Fallo | Al presionar el boton guardar el servidor se detiene inesperadamente. |
| 13 | Crear usuario con (ID = 99) con rol seleccionado y los demas campos vacios | Fallo | Al presionar el boton guardar se permite crear el usuario 99 con los campos vacios. |
| 14 | Editar usuario (ID = 0) sin rol y con los demas campos vacios | Fallo | Al presionar el boton guardar el servidor se detiene inesperadamente. |
| 15 | Editar usuario (ID = 0) con rol seleccionado y los demas campos vacios | Fallo | Al presionar el boton guardar se permite guardar un usuario con campos vacios. |

### **Tests Gestion de formatos**
| # Test | Descripcion | Resultado | Observacion |
|--------|-------------|-----------|-----------|
| 1 | Subir formato  |  | |