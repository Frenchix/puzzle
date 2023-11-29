const { getClassementByIdAndPieces, getClassement, addScore, getBestScore } = require('../model/classement');

const classementController = {
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
    getClassement: async (request, response) => {
        response.status(200).json(getClassement());
    },
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