import modeloMascotas from "../modelo/modelo_mascotas.js";

class ControladorMascotas {
  constructor() {}

  async crearMascota(solicitud, respuesta) {
    try {
      const mascotaExiste = solicitud.body;
      const masExiste = await modeloMascotas.buscarMascota(mascotaExiste.raza);

      if (masExiste) {
        // PASO 2: Si el correo ya existe, envía una respuesta de error.
        return respuesta.status(409).json({
          // 409 Conflict es un buen código para "recurso ya existente"
          mensaje: "Error: La mascota ya está registrada.",
        });
      }
      const resultado = await modeloMascotas.crear(solicitud.body);
      respuesta
        .status(201)
        .json({ mensaje: "Mascota creada", data: resultado });
    } catch (error) {
      respuesta
        .status(500)
        .json({ mensaje: "Mascota no creada", error: error.message });
    }
  }

  async leerUnaMascota(solicitud, respuesta) {
    try {
      const resultado = await modeloMascotas.leerUno(solicitud.params.id);
      respuesta.status(200).json({ mensaje: "Mascota leída", data: resultado });
    } catch (error) {
      respuesta
        .status(500)
        .json({ mensaje: "Mascota no leída", error: error.message });
    }
  }

  async leerMascotas(solicitud, respuesta) {
    try {
      const resultado = await modeloMascotas.leerTodos();
      respuesta
        .status(200)
        .json({ mensaje: "Mascotas leídas", data: resultado });
    } catch (error) {
      respuesta
        .status(500)
        .json({ mensaje: "Mascotas no leídas", error: error.message });
    }
  }

  async actualizarMascotas(solicitud, respuesta) {
    try {
      const resultado = await modeloMascotas.actualizar(
        solicitud.params.id,
        solicitud.body
      );
      respuesta
        .status(200)
        .json({ mensaje: "Mascota actualizada", data: resultado });
    } catch (error) {
      respuesta
        .status(500)
        .json({ mensaje: "Mascota no actualizada", error: error.message });
    }
  }

  async eliminarMascotas(solicitud, respuesta) {
    try {
      const resultado = await modeloMascotas.eliminar(solicitud.params.id);
      respuesta
        .status(200)
        .json({ mensaje: "Mascota eliminada", data: resultado });
    } catch (error) {
      respuesta
        .status(500)
        .json({ mensaje: "Mascota no eliminada", error: error.message });
    }
  }
}

export default new ControladorMascotas();
