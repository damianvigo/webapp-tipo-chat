// 1: importamos express, http, socketio
let express = require('express');
let app = express();
let server = require('http').Server(app); // se la pasamos socketio
let io = require('socket.io')(server);
let socket = require('socket.io')(server);
// 5: middleware -- vista donde tengamos el formulario --vista estatica por defecto
app.use(express.static('client'));  // carga el index.html que esta en la carpeta de cliente

//3: creamos las rutas
app.get('/ruta-uno', function(req, res) {
  res.status(200).send('Desde la ruta 1');
});


const messages = [
  {
    id: 1,
    text: 'Bienvenido al chat privado de Damián Vigo',
    nickname: 'Bot - damianvigo'
  }
]

// 4: abrimos una conexion al socket

//se encarga de recibir las conecciones de los clientes y nos va  decir
//cuando alguien se ha conectado al socket
io.on('connection', function(socket) {
  console.log('El cliente: con IP ' + socket.handshake.address + 'se ha conectado');

})

  //7 emito este array de menssajes al cliente
  socket.emit('messages', messages);

server.listen(6677, function() {
  console.log('Servidor funcionando en http://localhost:6677');
}); //creacion de servidor de express

