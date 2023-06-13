const net = require('net');

// Crear una conexión TCP al servidor
const client = net.createConnection({ port: 3000, host: 'localhost' }, () => {
  console.log('Conexión establecida con el servidor');
  
  // Enviar datos al servidor
  client.write('¡Hola, servidor!');
});

// Evento 'data': se ejecuta cuando se reciben datos desde el servidor
client.on('data', (data) => {
  console.log(`Datos recibidos desde el servidor: ${data}`);
});

// Evento 'end': se ejecuta cuando el servidor cierra la conexión
client.on('end', () => {
  console.log('Conexión con el servidor cerrada');
});
