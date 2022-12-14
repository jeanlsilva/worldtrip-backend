const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('server.json'); // <== Will be created later
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3333; // <== You can change the port

console.log(port)

server.use(middlewares);
server.use(router);

server.listen(port);