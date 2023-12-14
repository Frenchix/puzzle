const db = require('../database/firebase');
const { generateID } = require('../services/randomFunction');

async function addRoom (userName, userNameFriend) {
    try {
        const uuid = generateID();
        // const ref = db.ref(`rooms/${uuid}/participants/${uid}`);
        // await ref.set(userName);
        const ref = db.ref(`defi/${userNameFriend}`);
        await ref.push({ userName, uuid });
        return uuid;
    } catch (error) {
        throw error;
    }
}

async function leaveRoom (uuid) {
    try {
        const ref = db.ref(`rooms/${uuid}`);
        await ref.remove();
    } catch (error) {
        throw error;
    }
}

module.exports = { addRoom, leaveRoom };