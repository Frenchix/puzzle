const { getClassementByIdAndPieces, getClassement, addScore, getBestScore } = require('../model/classement');

const classementController = {
    // You should control whats coming from your id and pieces param also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    getClassementByIdAndPieces: async (request, response) => {
        try {
            const id = request.params.id;
            const pieces = request.params.pieces;
            const data = await getClassementByIdAndPieces(id, pieces);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
    // I think that the async here is not usefull as you return the getClassment() promise execution
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    getClassement: async (request, response) => {
        response.status(200).json(getClassement());
    },
    // You should control whats coming from your id and pieces param also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    addScore: async (request, response) => {
        try {
            const id = request.body.id;
            const nbPieces = request.body.nbPieces;
            const user = request.body.userName;
            const time = request.body.time
            await addScore(id, nbPieces, user, time);
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    },
     // You should control whats coming from your id and pieces param also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
   // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    getBestScore: async (request, response) => {
        try {
            const id = request.params.id;
            const pieces = request.params.pieces;
            const userName = request.params.userName;
            const data = await getBestScore(id, pieces, userName);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
};

module.exports = classementController;