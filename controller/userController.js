const { getFriends, addUser, getUsername, addFriendRequest, getRequestFriend, responseFriendRequest, updateStatus, getDefi, deleteDefi } = require('../model/user');

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
    updateStatus: async (request, response) => {
        try {
            const uid = request.body.uid;
            const status = request.body.status;
            await updateStatus(uid, status);
            response.status(200).json("Status mis à jour");
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    },
    responseFriendRequest: async (request, response) => {
        try {
            const uid = request.body.uid;
            const friendName = request.body.friendName;
            const answer = request.body.answer;
            const uidFriend = request.body.uidFriend;
            const friendsList = await responseFriendRequest(uid, uidFriend, friendName, answer);
            response.status(200).json(friendsList);
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    },
    addFriendRequest: async (request, response) => {
        try {
            const uid = request.body.uid;
            const user = request.body.userName;
            const friend = request.body.friendName;
            await addFriendRequest(uid, user, friend);
            response.status(200).json("Demande d'ami envoyé");
        } catch (error) {
            console.log("error", error)
            response.status(500).json("L'utilisateur n'existe pas ou une erreur est survenue");
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
    getRequestFriend: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getRequestFriend(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
    getDefi: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getDefi(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
    deleteDefi: async (request, response) => {
        try {
            const userName = request.body.username;
            await deleteDefi(userName);
            response.status(200).json("defi deleted");
        } catch (error) {
            console.log("error", error)
            response.status(500).json(error.message);
        }
    }
};

module.exports = userController;