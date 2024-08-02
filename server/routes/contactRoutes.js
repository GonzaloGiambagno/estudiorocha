const express = require('express');
const router = express.Router();
const { sendEmail } = require('../email'); 

router.post('/', async (req, res) => {
  const { nombre, email, telefono, consulta } = req.body;

  try {
    // console.log('Datos recibidos:', req.body); 
    await sendEmail(nombre, email, telefono, consulta);
    res.status(200).json({ message: 'Consulta enviada correctamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar la consulta.' });
  }
});

module.exports = router;