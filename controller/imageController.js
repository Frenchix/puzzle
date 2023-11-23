const { getImages, getImageById } = require('../model/images');

const imageController = {
    getImages: async (request, response) => {
        response.status(200).json(getImages());
    },
    getImageById: async (request, response) => {
        const id = request.params.id;
        response.status(200).json(getImageById(id));
    },
};

module.exports = imageController;