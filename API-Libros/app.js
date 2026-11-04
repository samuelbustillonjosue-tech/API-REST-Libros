const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

const librosPut = require('./src/routes/libros.put');
app.use(librosPut);

const librosDelete = require('./src/routes/libros.delete');
app.use(librosDelete);

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
});