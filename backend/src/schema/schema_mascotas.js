import mongoose from "mongoose";
const esquemaMascotas = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    raza: { type: String, required: true },
    sexo: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default mongoose.model("usuario", esquemaMascotas);
