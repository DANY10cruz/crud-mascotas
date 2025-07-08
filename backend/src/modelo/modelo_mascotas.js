import mongoose from "mongoose";
import esquemaMascotas from "../schema/schema_mascotas.js";

class modeloMascotas {
  constructor(parameters) {}
  async buscarMascota(raza) {
    return await esquemaMascotas.findOne({ raza: raza }); // correo = campo correo = valor
  }
  async crear(mascota) {
    return await esquemaMascotas.create(mascota);
  }

  async leerUno(id) {
    return await esquemaMascotas.findById(id);
  }
  async leerTodos() {
    return await esquemaMascotas.find();
  }
  async actualizar(id, mascota) {
    return await esquemaMascotas.findOneAndUpdate(
      {
        _id: new mongoose.Types.ObjectId(id),
      },
      mascota
    );
  }

  async eliminar(id) {
    return await esquemaMascotas.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export default new modeloMascotas();
