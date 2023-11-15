const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hellooo');
});

router.get('/images', (req, res) => {
    res.json([
        { id: 0, image: 'http://localhost:5002/pieces_a_assembler/0.png', x: 50, y: 50, width: 300, height: 300, originalWidth: 300, originalHeight: 300, attachmentPoints: [{ x: 223, y: 150, matchId: 1 }] },
        { id: 1, image: 'http://localhost:5002/pieces_a_assembler/1.png', x: 300, y: 50, width: 374, height: 300, originalWidth: 374, originalHeight: 300, attachmentPoints: [{ x: 0, y: 150, matchId: 0 }, { x: 300, y: 150, matchId: 2 }] },
        { id: 2, image: 'http://localhost:5002/pieces_a_assembler/2.png', x: 500, y: 50, width: 374, height: 300, originalWidth: 374, originalHeight: 300, attachmentPoints: [{ x: 0, y: 150, matchId: 1 }, { x: 300, y: 150, matchId: 3 }] },
        { id: 3, image: 'http://localhost:5002/pieces_a_assembler/3.png', x: 700, y: 50, width: 374, height: 374, originalWidth: 374, originalHeight: 300, attachmentPoints: [{ x: 0, y: 150, matchId: 2 }] }
    ]);
});


module.exports = router;