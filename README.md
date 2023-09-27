# MoochSock
Archivo README para un proyecto socket que agrega usuarios
Descripción
Este proyecto socket permite agregar usuarios a una aplicación web. Los usuarios pueden comunicarse entre sí a través de mensajes de texto en tiempo real.
Requisitos
Node.js
TypeScript
Instalación
git clone https://github.com/tu-usuario/proyecto-socket.git
cd proyecto-socket
npm install

Ejecución
Para ejecutar el proyecto, utilice el siguiente comando:
npm start

El proyecto se iniciará en el puerto 3000. Puede acceder a la aplicación web en http://localhost:3000.
Scripts
El proyecto incluye los siguientes scripts:
test: Ejecuta las pruebas unitarias.
start: Inicia el servidor socket.
ts-node: Inicia el servidor socket usando TypeScript.
dev: Inicia el servidor socket en modo desarrollo.
build: Compila el código TypeScript a JavaScript.
Uso
Para agregar un usuario, envíe una solicitud POST a la siguiente ruta:
http://localhost:3000/users

La solicitud debe incluir el nombre del usuario en el cuerpo de la solicitud.
Para obtener una lista de todos los usuarios, envíe una solicitud GET a la siguiente ruta:
http://localhost:3000/users

Para obtener un usuario específico, envíe una solicitud GET a la siguiente ruta:
http://localhost:3000/users/:id

Donde :id es el identificador del usuario.
Para eliminar un usuario, envíe una solicitud DELETE a la siguiente ruta:
http://localhost:3000/users/:id

Donde :id es el identificador del usuario.
Contribuciones
Se aceptan contribuciones a este proyecto. Para contribuir, siga estos pasos:
Forkea el repositorio.
Crea una nueva rama para tu contribución.
Realiza tus cambios.
Agrega tus cambios al repositorio.
Crea una solicitud de extracción.
Licencia
Este proyecto está licenciado bajo la licencia MIT.

