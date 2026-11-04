const express = require('express');

const app = express();
const PORT = 3000;

const librosPut = require('./src/routes/libros.put');
const librosGet = require('./src/routes/libros.get');

app.use(express.json());

app.use(librosPut);
app.use(librosGet);

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
});