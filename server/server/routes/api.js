const express = require('express');
const cors = require('cors');
const router = express.Router();

var saveEntry = require('./js/savePetition.js')

var corsOptions = {
    // only accept requests from veteransgolfnow
    origin: 'https://veteransgolfnow.com',
    optionsSuccessStatus: 200 
}
router.all('*', cors(corsOptions));

// use to test connection
router.get('/', (req, res) => {
    res.send('api works');
});

router.post('/support', (req, res) => {
    res.header('Access-Control-Allow-Origin', 'https://veteransgolfnow.com');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    var dbUpdate = saveEntry.saveEntry(req.body) 
    res.send({ "success": "true" });
});

module.exports = router;

