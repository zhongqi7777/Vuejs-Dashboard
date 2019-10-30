const bodyParser = require("body-parser");
const jsonServer = require("json-server");

const server = jsonServer.create();
const router = jsonServer.router("./server/db/menu.json");

server.use(jsonServer.defaults());
server.use(bodyParser.json());

server.use(router);

server.listen(3000, () => {
  console.log("The API server is running At http://localhost:3000");
});
