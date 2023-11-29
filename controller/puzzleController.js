const PuzzlePiece = require('../model/puzzle');
const { images } = require('../model/images');

const puzzleController = {

    //controller to get Accessibility informations
    getPieces: (request, response) => {
        const nbPieces = request.query.nbPieces;
        const id = request.query.id;
        if (images.some((image) => image.id == id) && (nbPieces == 49 || nbPieces == 100 || nbPieces == 225 || nbPieces == 400)){
            const pieces = PuzzlePiece.generatePuzzle(id,nbPieces);
            response.status(200).json(pieces);
        } else {
            // console.log(images.some((image) => image.id == id))
            response.status(400).json('Une erreur est survenue lors du chargement des pièces');
        }
        
    },

};

module.exports = puzzleController;