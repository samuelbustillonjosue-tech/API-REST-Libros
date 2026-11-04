const express = require('express');

const app = express();
const PORT = 3000;

const librosPut = require('./src/routes/libros.put');
const librosPost = require('./src/routes/libros.post');
app.use(express.json());

app.use(librosPut);
app.use(librosPost);

app.listen(PORT, () => {
    console.log(`El servidor esta escuchando en http://localhost:${PORT}`);
});