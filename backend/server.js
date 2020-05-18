const http = require('http');
const app = require('./app');

app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);

// if environnenment 3000 by default is not available
server.listen(process.env.PORT || 3000);