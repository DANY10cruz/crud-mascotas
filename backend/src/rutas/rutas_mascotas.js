import express, { Router } from "express";
import controladorMascotas from "../controlador/controlador_mascotas.js";
const ruta = Router();
ruta.post("/", controladorMascotas.crearMascota);
ruta.get("/:id", controladorMascotas.leerUnaMascota);
ruta.get("/", controladorMascotas.leerMascotas);
ruta.put("/:id", controladorMascotas.actualizarMascotas);
ruta.delete("/:id", controladorMascotas.eliminarMascotas);

export default ruta;
