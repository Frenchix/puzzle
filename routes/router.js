const express = require('express');
const puzzleController = require('../controller/puzzleController');
const imageController = require('../controller/imageController');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hellooo');
});

router.get('/getPieces', puzzleController.getPieces);
router.get('/getImages', imageController.getImages);
router.get('/getImage/:id', imageController.getImageById);

module.exports = router;