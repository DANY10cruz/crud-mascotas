import "dotenv/config";
import conexionBaseDatos from "../conexionbd/baseDatos.js";
import servidor from "./servidor.js";

try {
  const puerto = process.env.PUERTO || 3000;
  conexionBaseDatos.conexion();
  servidor.listen(puerto);
  console.log(`Escuchando por el puerto ${puerto}`);
} catch (error) {
  console.log("Error al conectar el puerto");
}
