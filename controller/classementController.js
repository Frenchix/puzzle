const { getClassementByIdAndPieces, getClassement } = require('../model/classement');

const classementController = {
    getClassementByIdAndPieces: async (request, response) => {
        const id = request.params.id;
        const pieces = request.params.pieces;
        const data = await getClassementByIdAndPieces(id, pieces);
        response.status(200).json(data);
    },
    getClassement: async (request, response) => {
        response.status(200).json(getClassement());
    },
};

module.exports = classementController;