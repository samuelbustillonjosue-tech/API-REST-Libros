const express = require('express');
const fs = require('fs');
const path = require('path');

const router = express.Router();

const rutaArchivo = path.join(__dirname, '../data/libros.json');

// obtener todos los libros
router.get('/api/books', (req, res) => {
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    const libros = JSON.parse(data);

    res.json(libros);
});

// obtener un libro por id
router.get('/api/books/:id', (req, res) => {
    const data = fs.readFileSync(rutaArchivo, 'utf-8');
    const libros = JSON.parse(data);

    const id = parseInt(req.params.id);
    const libro = libros.find(l => l.id === id);

    if (!libro) {
        return res.status(404).json({ mensaje: 'No se encontro el libro' });
    }

    res.json(libro);
});

module.exports = router;