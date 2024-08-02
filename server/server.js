const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes.js');

dotenv.config();

const app = express();

// Configurar CORS
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); 

app.use('/api/contact', contactRoutes);

app.listen(4000, () => {
  console.log('Listening on http://localhost:4000');
});
