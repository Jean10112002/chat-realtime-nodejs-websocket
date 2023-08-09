const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors'); // Importa el paquete cors
const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json());
app.use(cors());

io.on('connection', socket => {
  console.log('Usuario conectado:', socket.id);

  socket.on('message', data => {
    io.emit('message', data); // Enviar el mensaje a todos los clientes conectados
  });

  socket.on('disconnect', () => {
    console.log('Usuario desconectado:', socket.id);
  });
});



server.listen(3000, () => {
  console.log('Servidor API escuchando en el puerto 3000');
});
