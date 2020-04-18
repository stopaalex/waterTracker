/*

server.js

*/

const app       = require('./app');
const http      = require('http');

const env = 'DEV';

const server = http.createServer(app),
      port = 8000;

server.listen(port, () => {
    console.log(` *** Server listening on ${port} ***`);
});