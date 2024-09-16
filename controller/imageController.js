const { getImages, getImageById } = require('../model/images');

const imageController = {
    getImages: async (request, response) => {
        response.status(200).json(getImages());
    },
      // You should control whats coming from your id also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    getImageById: async (request, response) => {
        const id = request.params.id;
        response.status(200).json(getImageById(id));
    },
};

module.exports = imageController;