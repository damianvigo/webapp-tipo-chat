let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.use(express.static('client'));


app.get('/ruta-uno', function(req, res) {
  res.status(200).send('Desde la ruta 1');
});

io.on('connection', function(socket) {
  console.log('El cliente: con IP ' + socket.handshake.address + 'se ha conectado');

})

server.listen(6677, function() {
  console.log('Servidor funcionando en http://localhost:6677');
});

