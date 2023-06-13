const net = require('net');

// Crear un servidor TCP
const server = net.createServer((socket) => {
  // Evento 'data': se ejecuta cuando se reciben datos desde un cliente
  socket.on('data', (data) => {
    console.log(`Datos recibidos desde el cliente: ${data}`);
    socket.write("bienvenido usuario")//funcion para escribir
  });

  // Evento 'end': se ejecuta cuando un cliente cierra la conexión
  socket.on('end', () => {
    console.log('Cliente desconectado');
  });
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, 'localhost', () => {
  console.log('Servidor iniciado y escuchando en el puerto 3000');
});
