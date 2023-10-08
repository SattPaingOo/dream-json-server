const json_server = require('json-server');
const cors = require('cors');
const path = require('path');

const server = json_server.create();
const router = json_server.router(path.join(__dirname,'db.json'));
const middleware = json_server.defaults();

server.use(cors());
server.use(json_server.bodyParser);
server.use(middleware);
server.use(router);

const port = 8081

server.listen(port , () => {
    console.log(`Server started - running on http://localhost:${port} `);
} )