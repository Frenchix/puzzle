const db = require('../database/firebase');

// async function getFriends(uid) {
//     try {
//         const ref = db.ref(`friends/${uid}`);
//         const friends = await ref.once('value');
//         return friends.val();
//     } catch (error) {
//         console.log(error)
//         throw error;
//     }
// }
async function getFriends(uid) {
    const friendsRef = db.ref(`friends/${uid}`);
    const userRef = db.ref('users');

    try {
        // Récupérer la liste des ID d'amis
        const friendsSnapshot = await friendsRef.once('value');
        const friendsIds = friendsSnapshot.val();
        // Récupérer les détails de chaque ami
        const friendsDetails = [];
        if (friendsIds){
            for (const friendId of friendsIds) {
                const friendSnapshot = await userRef.child(friendId).once('value');
                const friend = friendSnapshot.val();
                if (friend) {
                    friendsDetails.push(friend.pseudo); // ou tout autre détail souhaité
                }
            }
        }

        return friendsDetails;
    } catch (error) {
        console.error('Erreur lors de la récupération des amis :', error);
        throw error;
    }
}

async function addUser(uid, user) {
    try {
        const ref = db.ref(`users/${uid}`);
        ref.set({
                pseudo: user
        });
    } catch (error) {
        throw error;
    }
}

module.exports = { getFriends, addUser };