const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const ShortUniqueId = require('short-unique-id');

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

function generateID(){
    // const uuid = uuidv4();
    // fs.mkdirSync(`./pieces_a_assembler/${uuid}`);
    const uid = new ShortUniqueId({ length: 10 });
     // p0ZoB1FwH6
    return uid.rnd();
}

module.exports = { getRandomType, getMatchingType, getRandomInt, generateID };