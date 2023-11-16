const express = require('express');
const puzzleController = require('../controller/puzzleController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hellooo');
});

router.get('/getPieces', puzzleController.getPieces);


module.exports = router;