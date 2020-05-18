const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

// if environnenment 3000 by default is not available
server.listen(process.env.PORT || 3000);