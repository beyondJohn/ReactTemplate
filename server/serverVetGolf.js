// Get dependencies
const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');
const options = {
  hostname: 'switchmagic.com',
  key: fs.readFileSync('/etc/letsencrypt/live/switchmagic.com/privkey.pem'),
  cert: fs.readFileSync('/etc/letsencrypt/live/switchmagic.com/cert.pem'),
  ca: fs.readFileSync('/etc/letsencrypt/live/switchmagic.com/chain.pem')
};

// Get our API routes
const api = require('./server/routes/api');

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes
app.use('/api', api);


//test 
app.get('/test', (req, res) => {
    res.send({ title: 'My JSON File', content: { response: "myData" } });
});

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.send({});
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4567';
app.set('port', port);

/**
 * Create HTTPS server.
 */
const server = https.createServer(options, app);
server.listen(port, () => console.log(`API running on localhost:${port}`));
