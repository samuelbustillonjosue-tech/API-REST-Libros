
const express = require('express');
const router = express.Router();

let libros = [];

router.post('/api/books', (req, res)=>{
    const libro = req.body;

    libros.push(libro);

    res.json({status:200,message:"success",data:libro});
});

module.exports = router;
