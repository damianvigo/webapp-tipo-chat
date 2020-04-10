let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

app.get('/ruta-uno', function(req, res) {
  res.status(200).send('Desde la ruta 1');
});

server.listen(6677, function() {
  console.log('Servidor funcionando en http://localhost:6677');
});

