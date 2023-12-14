const { addRoom, leaveRoom } = require('../model/room');

const roomController = {
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