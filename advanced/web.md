---
outline: deep
---

- 使用Cheese来搭建一个网页并与node交互


## HTML代码

```html
// index.html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Android Node</title>
</head>
<body>
<script>
const button = document.createElement('button')
button.innerHTML = 'shutdown server'
button.addEventListener('click', () => {
    fetch('/close').then(() => {
        alert('success')
    })
}, false)
document.body.append(button)
</script>
</body>
</html>
```

## Node代码
```typescript
const http = require('http')
const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
res.statusCode = 200
if (req.url === '/') {
res.setHeader('Content-Type', 'text/html; charset=utf-8')
res.statusCode = 200
require('fs').createReadStream('/storage/emulated/0/index.html').pipe(res)
} else if (req.url === '/close') {
// Close the server
server.close(() => { console.log('server closed') })
// Destroy all open sockets
res.statusCode = 200
res.end()
for (var socketId in sockets) {
console.log('socket', socketId, 'destroyed');
sockets[socketId].destroy();
}
} else {
res.statusCode = 200
res.end()
}
})

server.on('error', (e) => {
console.log(e)
});

// Maintain a hash of all connected sockets
var sockets = {}, nextSocketId = 0;
server.on('connection', function (socket) {
// Add a newly connected socket
var socketId = nextSocketId++;
sockets[socketId] = socket;
console.log('socket', socketId, 'opened');
// Remove the socket when it closes
socket.on('close', function () {
console.log('socket', socketId, 'closed');
delete sockets[socketId];
});
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`)
})
```