function getRandomType() {
    // Retourne un type aléatoire parmi Vide ou Plein
    const type = ['Vide', 'Plein'];
    return type[getRandomInt(type.length)];
}

function getMatchingType(type) {
    // Retourne le type correspondant pour s'assurer que les pièces s'imbriquent correctement : Vide ou plein
    if (type === 'Vide'){
        return 'Plein';
    } else {
        return 'Vide';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

module.exports = { getRandomType, getMatchingType, getRandomInt };