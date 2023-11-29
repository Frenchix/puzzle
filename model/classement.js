const db = require('../database/firebase');

async function getClassementByIdAndPieces(id, pieces) {
    try {
        const ref = db.ref(`classement/${id}/${pieces}`);
        // const classement = await ref.once('value', (snapshot) => {
        //     const data = snapshot.val();
        //     console.log("data", data);
        // }, (errorObject) => {
        //     console.log('La lecture des données a échoué : ' + errorObject.code);
        // });
        const classement = await ref.once('value');
        return classement.val();
    } catch (error) {
        console.log(error)
        throw error;
    }
}

async function addScore(id, pieces, user, time) {
    try {
        const ref = db.ref(`classement/${id - 1}/${pieces}/${user}`);
        ref.set({
                time: time
        });

    } catch (error) {
        throw error;
    }
}

async function getBestScore(id, pieces, userName) {
    try {
        const ref = db.ref(`classement/${id}/${pieces}/${userName}`);
        // const classement = await ref.once('value', (snapshot) => {
        //     const data = snapshot.val();
        //     console.log("data", data);
        // }, (errorObject) => {
        //     console.log('La lecture des données a échoué : ' + errorObject.code);
        // });
        const score = await ref.once('value');
        return score.val();
    } catch (error) {
        console.log(error)
        throw error;
    }
}

// function getClassement() {
//     ref.once('value', (snapshot) => {
//         const data = snapshot.val();
//         console.log(data);
//         return data;
//       }, (errorObject) => {
//         console.log('La lecture des données a échoué : ' + errorObject.code);
//       });
// }

module.exports = { getClassementByIdAndPieces, addScore, getBestScore };