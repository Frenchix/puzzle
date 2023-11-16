const PuzzlePiece = require('../model/puzzle');

const puzzleController = {

    //controller to get Accessibility informations
    getPieces: (request, response) => {
        const pieces = PuzzlePiece.generatePuzzle(7,7);
        response.status(200).json(pieces);
    },

};

module.exports = puzzleController;