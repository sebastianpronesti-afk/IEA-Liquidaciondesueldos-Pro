const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;

const htmlPath = path.join(__dirname, 'liquidacion_IEA_v4_29.html');
let htmlContent = '';

try {
  htmlContent = fs.readFileSync(htmlPath, 'utf-8');
  console.log('Archivo HTML cargado correctamente');
} catch (err) {
  console.error('Error al cargar el HTML:', err.message);
  process.exit(1);
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache'
  });
  res.end(htmlContent);
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});
