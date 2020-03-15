/**
 * Created by cristian.jora on 04.11.2016.
 */
const express = require('express');
const serveStatic = require("serve-static")
const path = require('path');
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));
const port = process.env.PORT || 80;
app.listen(port);

//jsonServer
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./server/db/db.json');
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;
const serverport = 3000;

server.use(middlewares);

// Add this before server.use(router)
server.use(jsonServer.rewriter({
    "/del/user/:id": "/userlist/:id",
    "/modify/user/:id": "/userlist/:id",
    "/add/user": "/userlist",
    "/del/flow/:id": "/flowlist/:id",
    "/modify/flow/:id": "/flowlist/:id",
    "/add/flow": "/flowlist",
    "/rtc/steps/settings/source": "/source",
    "/rtc/steps/settings/sink": "/sink"
}))
server.use("/api", router);

server.listen(serverport);