const { addRoom, leaveRoom } = require('../model/room');

const roomController = {
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    addRoom: async (request, response) => {
        try {
            // const uid = request.body.uid;
            const userName = request.body.userName;
            const userNameFriend = request.body.userNameFriend;
            const uuidRoom = await addRoom(userName, userNameFriend);
            response.status(200).json(uuidRoom);
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    },
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    leaveRoom: async (request, response) => {
        try {
            const uuid = request.body.uuid;
            const uid = request.body.uid;
            const userName = request.body.userName;
            await leaveRoom(uuid, uid);
            response.status(200).json("room leaved");
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    }
};

module.exports = roomController;