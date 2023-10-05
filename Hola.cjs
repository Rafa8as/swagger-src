const express = require('express');
const app = express();

// Ruta que devuelve un JSON "Hola Mundo"
app.get('/', (req, res) => {
  res.json({ message: 'Hola Mundo' });
});

// Resto de la configuración de tu aplicación
// ...

// Arranca el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});