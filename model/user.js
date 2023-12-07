const db = require('../database/firebase');

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
                    friendsDetails.push(friend); // ou tout autre détail souhaité
                }
            }
        }

        return friendsDetails;
    } catch (error) {
        console.error('Erreur lors de la récupération des amis :', error);
        throw error;
    }
}

async function getRequestFriend(uid) {
    try {
        const ref = db.ref(`friendRequest/${uid}`);
        const friends = await ref.once('value');
        return friends.val();
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function responseFriendRequest(uid, uidFriend, friendName, answer) {
    try {
        let friendsList = []
        if (answer) {
            await addFriend(uid, uidFriend);
            await addFriend(uidFriend, uid);
        }
        const ref = db.ref(`friendRequest/${uid}/${friendName}`);
        await ref.remove()
        friendsList = await getFriends(uid);
        return friendsList;
    } catch (error) {
        throw error;
    }
}

async function addFriend(uid, uidFriend) {
    try {
        const friendsRef = db.ref(`friends/${uid}`);
        const friends = await friendsRef.once('value');
        const friendsList = friends.val() || []; // Si la liste n'existe pas, utilisez un tableau vide

        if (!friendsList.includes(uidFriend)) {
            friendsList.push(uidFriend); // Ajout du nouvel ami à la liste

            // Mise à jour de la liste dans la base de données
            friendsRef.set(friendsList)
                .then(() => console.log('Liste d\'amis mise à jour avec succès'))
                .catch((error) => {
                    throw new Error(error)
                });
        }
    } catch (error) {
        throw new Error(error);
    }
}

async function addUser(uid, user) {
    try {
        const ref = db.ref(`users/${uid}`);
        ref.set({
                pseudo: user
        });
        const refPseudos = db.ref(`pseudos/${user}`);
        refPseudos.set({
            uid: uid
    });
    } catch (error) {
        throw error;
    }
}

async function updateStatus(uid, status) {
    try {
        const ref = db.ref(`users/${uid}/status`);
        await ref.set(status);
        // await admin.database().ref(`users/${userId}/status`).set(status);
      } catch (error) {
        throw error;
      }
}

async function addFriendRequest(uid, user, friend) {
    try {
        const pseudosRef = db.ref(`pseudos/${friend}`);
        const pseudos = await pseudosRef.once('value');
        const pseudoId = pseudos.val();

        const friendsRef = db.ref(`friends/${uid}`);
        const friends = await friendsRef.once('value');
        const friendsList = friends.val() || []; // Si la liste n'existe pas, utilisez un tableau vide

        if (!friendsList.includes(pseudoId.uid)) {
            if(pseudoId) {
                const ref = db.ref(`friendRequest/${pseudoId.uid}/${user}`);
                ref.set({
                        uid: uid,
                        status: "pending"
                });
            } else {
                throw new Error('Ce pseudo n existe pas');
            }
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { getFriends, addUser, addFriendRequest, getRequestFriend, responseFriendRequest, updateStatus };