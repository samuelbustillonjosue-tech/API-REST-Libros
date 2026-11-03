const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const rutaLibros = path.join(__dirname, '../data/libros.json');

router.put('/libros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const libro = req.body;
    const libros = JSON.parse(fs.readFileSync(rutaLibros, 'utf8'));

    let isBook = false;

    if (libros.length > 0) {

        libros.forEach(registro => {
            if (registro.id === id) {
                isBook = true;

                registro.titulo = libro.titulo;
                registro.autor = libro.autor;
                registro.genero = libro.genero;
                registro.anioPublicacion = libro.anioPublicacion;
            }
        });

        if (isBook) {
            fs.writeFileSync(rutaLibros, JSON.stringify(libros, null, 2));

            res.status(200).json({
                status: 200,
                message: "Libro actualizado correctamente",
                data: libros.find(registro => registro.id === id)
            });

        } else {
            res.status(404).json({
                status: 404,
                message: "No se encontro el libro"
            });
        }

    } else {
        res.status(404).json({
            status: 404,
            message: "No se encontraron registros"
        });
    }
});

module.exports = router;