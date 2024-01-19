const { getFriends, addUser, getUsername, addFriendRequest, getRequestFriend, responseFriendRequest, updateStatus, getDefi, deleteDefi } = require('../model/user');

const userController = {
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    getFriends: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getFriends(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
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
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
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
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
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
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
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
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    getUsername: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getUsername(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    getRequestFriend: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getRequestFriend(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
     // Beware of franglish : 100% french or 100% english but not both :) 
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
    getDefi: async (request, response) => {
        try {
            const uid = request.params.uid;
            const data = await getDefi(uid);
            response.status(200).json(data);
        } catch (error) {
            response.status(500).json(error.message);
        }
    },
    // Beware of franglish : 100% french or 100% english but not both :) 
     // You should control whats coming from your payload also if they present or not
    // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining
    // Donc forget to send another exception if the coming payload is not correct like piece === bolean => Throw a 400 instead of a 500
    // Also dont forget to add functional monitoring to your controller, thats better if you'll have to manage bug tracking one day :)
    // You can also deconstruct your param and re-create a sanitaized object for your model with a mapper function
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