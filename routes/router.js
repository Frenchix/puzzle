const express = require('express');
const puzzleController = require('../controller/puzzleController');
const imageController = require('../controller/imageController');
const classementController = require('../controller/classementController');
const router = express.Router();
const fs = require('fs');

router.get('/', (req, res) => {
    res.send('Hellooo');
});


router.get('/getPieces', puzzleController.getPieces);
router.get('/getImages', imageController.getImages);
router.get('/getImage/:id', imageController.getImageById);
router.get('/getClassement/:id/:pieces', classementController.getClassementByIdAndPieces);
router.get('/getClassement', classementController.getClassement);
router.post('/addScore', classementController.addScore);
router.get('/getBestScore/:id/:pieces/:userName', classementController.getBestScore);
// router.get('/deleteFolder/:uuid', (req, res) => {
//     const uuid = req.params.uuid;
//     const folderName = `./pieces_a_assembler/${uuid}`;
//     if (fs.existsSync(folderName)) {
//         fs.rmSync(folderName, { recursive: true, force: true });
//       }
//     res.send('Youhou');
// })

module.exports = router;