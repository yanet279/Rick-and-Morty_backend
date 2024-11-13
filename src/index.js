const express = require("express");
const cors = require("cors"); // Importa el paquete CORS
const server = express();
const PORT = 3001;
const { conn } = require("./DB_connection");
const router = require("./routes/index");

// Configurar CORS para permitir solicitudes desde el frontend
server.use(
  cors({
    origin: "https://shiny-paletas-d94bbe.netlify.app", // URL de tu frontend en producción
    credentials: true, // Permitir el uso de cookies y autenticación
  })
);

server.use(express.json());
server.use("/rickandmorty", router);

conn.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.info(`listening on port ${PORT}`);
  });
});
// const express = require("express");
// const cors = require("cors"); // Importa el paquete CORS
// const server = express();
// const PORT = 3001;
// const { conn } = require("./DB_connection");
// const router = require("./routes/index");

// // Configurar CORS para permitir solicitudes desde el frontend
// server.use(
//   cors({
//     origin: "http://localhost:5173", // Aquí defines la URL de tu frontend
//     credentials: true, // Permitir el uso de cookies y autenticación
//   })
// );

// server.use(express.json());

// // Middleware para manejar headers personalizados
// server.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://localhost:5173");
//   res.header("Access-Control-Allow-Credentials", "true");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
//   next();
// });

// // Rutas
// server.use("/rickandmorty", router);

// conn.sync({ force: false }).then(() => {
//   server.listen(PORT, () => {
//     console.info(`Escuchando en el puerto ${PORT}`);
//   });
// });
