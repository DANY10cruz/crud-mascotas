import mongoose from "mongoose";

class conexionBaseDatos {
  constructor() {}
  async conexion() {
    try {
      const linkBaseDatos = process.env.BASEDATOS;
      await mongoose.connect(linkBaseDatos);
      console.log("conectado a la base de datos");
    } catch (error) {
      console.log(error);
    }
  }
}

export default new conexionBaseDatos();
