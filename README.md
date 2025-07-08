# 🐾 CRUD de Mascotas 🐾

Este es un proyecto de backend diseñado para gestionar información de mascotas, implementando las operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

## 🚀 Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express.js**: Framework web rápido y minimalista para Node.js, utilizado para construir la API RESTful.
- **Mongoose**: Librería de modelado de objetos para Node.js, que facilita la interacción con MongoDB.
- **MongoDB**: Base de datos NoSQL, utilizada para almacenar la información de las mascotas.
- **Dotenv**: Para cargar variables de entorno desde un archivo `.env`.

## 📂 Estructura del Proyecto

CRUD-MASCOTAS/
├── backend/
│ ├── src/
│ │ ├── conexionbd/ # Configuración de la conexión a la base de datos
│ │ ├── controlador/ # Lógica de negocio (manejo de peticiones HTTP)
│ │ ├── modelo/ # Interacción directa con la base de datos (operaciones CRUD)
│ │ ├── rutas/ # Definición de las rutas de la API
│ │ ├── schema/ # Definición de los esquemas de Mongoose
│ │ ├── index.js # Archivo principal del servidor Express
│ │ └── servidor.js # Configuración y arranque del servidor (opcional, a veces integrado en index.js)
│ ├── .env # Variables de entorno (IGNORADO por Git)
│ ├── .gitignore # Archivo para ignorar archivos y carpetas en Git
│ ├── package.json # Metadatos del proyecto y dependencias
│ ├── package-lock.json # Registro exacto de las dependencias
│ └── README.md # Este archivo
└── README.md # README principal del proyecto (opcional si solo hay un backend)

🚨 Códigos de Estado HTTP
Aquí se listan algunos de los códigos de estado HTTP que la API puede retornar:

200 OK: La solicitud fue exitosa.

201 Created: El recurso fue creado exitosamente.

400 Bad Request: La solicitud del cliente es inválida.

404 Not Found: El recurso solicitado no fue encontrado.

409 Conflict: Conflicto con el estado actual del recurso (ej. la raza de mascota ya existe).

500 Internal Server Error: Un error inesperado ocurrió en el servidor.

🤝 Contribuciones
Las contribuciones son bienvenidas. Si tienes sugerencias o encuentras errores, por favor abre un 'issue' o envía un 'pull request'.
