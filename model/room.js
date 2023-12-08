const db = require('../database/firebase');
const { generateID } = require('../services/randomFunction');

async function addRoom (uid, userName) {
    try {
        const uuid = generateID();
        const ref = db.ref(`rooms/${uuid}/participants/${uid}`);
        await ref.set(userName);
        return uuid;
    } catch (error) {
        throw error;
    }
}

async function leaveRoom (uuid, uid) {
    try {
        const ref = db.ref(`rooms/${uuid}/participants/${uid}`);
        await ref.remove();
    } catch (error) {
        throw error;
    }
}

module.exports = { addRoom, leaveRoom };