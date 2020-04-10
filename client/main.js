let socket = io.connect('http://192.168.0.13:6677', {'forceNew':true });

socket.on('messages', function(data) { //datos del servidor
  console.log(data);
  render(data);
})

function render(data) {
  let html = data.map(function (message, index) {
    return (`
      <div class="message">
        <strong>${message.nickname}</strong> dice:
         <p>${message.text}</p>
      </div>
    `);
  }).join(' ');

  document.getElementById('messages').innerHTML = html;
}