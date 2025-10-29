const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('🚀 API de gestión de usuarios funcionando');
});

// Rutas de usuarios
app.use('/api/users', userRoutes);

module.exports = app;
