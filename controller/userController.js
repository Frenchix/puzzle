const { getFriends, addUser, getUsername } = require('../model/user');

const userController = {
    getFriends: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getFriends(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
    addUser: async (request, response) => {
        try {
            const uid = request.body.uid;
            const user = request.body.userName;
            await addUser(uid, user);
            response.status(200).json("user created");
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    },
    getUsername: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getUsername(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
};

module.exports = userController;