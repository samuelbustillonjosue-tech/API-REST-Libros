const express = require('express');
const router = express.Router();

router.delete('/libros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const filtroLibro = libros.filter(libro => libro.id !== id);

    if (filtroLibro.length !== libros.length) {
        libros = filtroLibro;
        res.status(200).json({status:200, message:"Libro eliminado con exito"});
    } else {
        res.status(404).json({status:404, message:"No se encontro el libro"});
    }
});

module.exports = router;