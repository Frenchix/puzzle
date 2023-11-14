const sharp = require('sharp');

baseImagePath = 'gragas2.jpeg';

function applyMask(baseImagePath, maskImagePath, left, top, width, height, nbPiece) {
    const outputImagePath = `./pieces_a_assembler/${nbPiece}.png`
    sharp(baseImagePath)
        .extract({ left: left, top: top, width: width, height: height })
        .composite([{ input: maskImagePath, blend: 'dest-in' }])
        .toFile(outputImagePath)
        .then(() => console.log(`Puzzle piece created at ${outputImagePath}`))
        .catch(err => console.error(err));
}

class PuzzlePiece {
    constructor(top, right, bottom, left, row, col) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.row = row;
        this.col = col;
        this.fileName = this.imageName();
    }

    imageName(){
        return `top-${this.top}_left-${this.left}_bot-${this.bottom}_right-${this.right}.png`;
    }
}

function generatePuzzle(rows, cols) {
    let i = 0;
    let puzzle = [];
    let topImage = 0;
    for (let row = 0; row < rows; row++) {
        topImage =  300 * row;
        let leftImage = 0;
        
        let rowPieces = [];
        for (let col = 0; col < cols; col++) {
            let width = 300;
            let height = 300;
            leftImage = 300 * col;
            let top = row === 0 ? 'Plat' : getMatchingType(puzzle[row - 1][col].bottom);
            let left = col === 0 ? 'Plat' : getMatchingType(rowPieces[col - 1].right);
            let right = col === cols - 1 ? 'Plat' : getRandomType();
            let bottom = row === rows - 1 ? 'Plat' : getRandomType();

            if (top === 'Plein') {
                topImage = topImage - 74;
                height = height + 74;
            }
            if (bottom === 'Plein'){
                height = height + 74;
            }
            if (left === 'Plein'){
                leftImage = leftImage - 74;
                width = width + 74;
            }
            if (right === 'Plein'){
                width = width + 74;
            }
            const puzzlePiece = new PuzzlePiece(top, right, bottom, left, row, col);
            maskImagePath = './pieces_ordre/' + puzzlePiece.fileName;
            applyMask(baseImagePath, maskImagePath, leftImage, topImage, width, height, i);
            rowPieces.push(puzzlePiece);
            i++;
        }
        puzzle.push(rowPieces);
    }
    return puzzle;
}

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
// for (let i = 0; i < 49; i++){
//     switch (i) {
//         case 0 :
//             const random = getRandomInt(4) + 1;
//             maskImagePath = './pieces_ordre/' + random + '.png';
//             applyMask(baseImagePath, maskImagePath, outputImagePath);
            
//     }
// }
// maskImagePath = './pieces_ordre/top-Plat_left-Plat_bot-Plein_right-Plein.png';
// applyMask(baseImagePath, maskImagePath, outputImagePath);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//1-4 haut gauche
//5-12 haut
//13-16 haut droit
//17-24 droit
//25-28 bas droit
//29-36 bas
//37-40 bas gauche
//41-48 gauche
//48-64 milieu

//2100*2100 7 pieces par cote

generatePuzzle(7,7);