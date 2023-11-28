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
        return new Error(error)
    }
}

function getClassement() {
    ref.once('value', (snapshot) => {
        const data = snapshot.val();
        console.log(data);
        return data;
      }, (errorObject) => {
        console.log('La lecture des données a échoué : ' + errorObject.code);
      });
}

module.exports = { getClassementByIdAndPieces, getClassement };