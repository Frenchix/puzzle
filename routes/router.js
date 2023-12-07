const express = require('express');
const puzzleController = require('../controller/puzzleController');
const imageController = require('../controller/imageController');
const classementController = require('../controller/classementController');
const userController = require('../controller/userController');
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
router.delete('/deleteFiles', (req, res) => {
    const pieces = req.body;
    pieces.forEach(piece => {
        const pieceName = `./pieces_a_assembler/${piece.uuid}.webp`;
        fs.unlink(pieceName, (err) => {
            if (err) {
              console.error(err);
            }
          });
    });
    res.send('Youhou');
});
router.get('/getFriends/:uid', userController.getFriends);
router.get('/getUsername/:uid', userController.getUsername);
router.post('/addUser', userController.addUser);
router.post('/addFriendRequest', userController.addFriendRequest);
router.get('/getRequestFriend/:uid', userController.getRequestFriend);
router.post('/responseFriendRequest', userController.responseFriendRequest);
router.post('/updateStatus', userController.updateStatus);

module.exports = router;