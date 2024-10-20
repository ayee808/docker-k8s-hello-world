const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, '../build', req.url === '/' ? 'index.html' : req.url);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404);
            res.end('File not found');
        } else {
            const ext = path.extname(filePath);

            // Set the Content-Type header based on the file extension
            let contentType = 'text/plain';
            switch (ext) {
                case '.html':
                case '.htm':
                    contentType = 'text/html';
                    break;
                case '.js':
                    contentType = 'application/javascript';
                    break;
                case '.css':
                    contentType = 'text/css';
                    break;
                case '.json':
                    contentType = 'application/json';
                    break;
                case '.xml':
                    contentType = 'application/xml';
                    break;
                case '.png':
                    contentType = 'image/png';
                    break;
                case '.jpg':
                case '.jpeg':
                    contentType = 'image/jpeg';
                    break;
                case '.gif':
                    contentType = 'image/gif';
                    break;
                case '.svg':
                    contentType = 'image/svg+xml';
                    break;
                default:
                    break;
            }

            res.writeHead(200, {'Content-Type': contentType});
            res.end(content);
        }
    });
});

server.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});