const express = require('express');
const app = express();
require('dotenv').config()
const http = require('http');
const https = require('https');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const server = http.createServer(app);
const router = require('./routes/router.js');
const setupWebSocket = require('./services/socketManager');

app.use(express.json());
app.use(cors());
app.use('/api', router);
app.use('/pieces_a_assembler', express.static(path.join(__dirname, 'pieces_a_assembler')));
app.use('/images', express.static(path.join(__dirname, 'images')));
if(process.env.NODE_ENV !== 'development') {
    app.use(express.static('public/dist'));
    // app.use(express.json());
    app.get('/*', function(req,res) {
        res.sendFile('index.html', { root: path.join(__dirname, './public/dist/') });
    });

    // const options = {
    //     key: fs.readFileSync('./cert/privkey.pem'),
    //     cert: fs.readFileSync('./cert/fullchain.pem')
    // };
    // const httpsServer = https.createServer(options, app);
    
    // setupWebSocket(httpsServer);

    // httpsServer.listen(process.env.PORT, () => {
    //     console.log('Serveur HTTPS démarré sur le port ' + process.env.PORT);
    // });
    setupWebSocket(server);

    server.listen(process.env.PORT, () => {
        console.log('listening on *:', process.env.PORT);
    });
} else {
    setupWebSocket(server);

    server.listen(process.env.PORT, () => {
        console.log('listening on *:', process.env.PORT);
    });
}





