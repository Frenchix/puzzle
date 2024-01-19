const PuzzlePiece = require('../model/puzzle');
const { images } = require('../model/images');

const puzzleController = {

    //controller to get Accessibility informations
    // You should control whats coming from your id and pieces param also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    // Your condition should be placed in a Helper method, controller should only be responsible of receipt and send data, he dont serve intelligence
    // You missed the try catch also, thats better to handle exception than a classic if else 
    getPieces: async (request, response) => {
        const nbPieces = request.query.nbPieces;
        const id = request.query.id;
        if (images.some((image) => image.id == id) && (nbPieces == 49 || nbPieces == 100 || nbPieces == 225 || nbPieces == 400)){
            const pieces = await PuzzlePiece.generatePuzzle(id,nbPieces);
            response.status(200).json(pieces);
        } else {
            // console.log(images.some((image) => image.id == id))
            response.status(400).json('Une erreur est survenue lors du chargement des pièces');
        }
        
    },

};

module.exports = puzzleController;