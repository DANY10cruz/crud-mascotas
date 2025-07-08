import express from "express";
import morgan from "morgan";
import cors from "cors";
import ruta from "./rutas/rutas_mascotas.js";

const servidor = express();
servidor.use(cors());
servidor.use(morgan("dev"));
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));
servidor.use("/mascotas", ruta);

servidor.get("/", (solicitud, respuesta) => {
  respuesta.json({ message: "servidor arriba" });
});

export default servidor;
