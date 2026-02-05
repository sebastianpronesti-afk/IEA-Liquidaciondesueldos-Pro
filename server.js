const express = require('express');
const path = require('path');
const app = express();

// CRÍTICO: Usar el puerto que Railway asigna, sin fallback a 8080
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'liquidacion_IEA_v4_29.html'));
});

// Cualquier otra ruta redirige al index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'liquidacion_IEA_v4_29.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
