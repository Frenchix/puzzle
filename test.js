const PuzzlePiece = require('./model/puzzle');
const { getMatchingType, getRandomType } = require('./services/randomFunction');
const { applyMask } = require('./services/sharpFunction');

baseImagePath = 'gragas.jpeg';

function generatePuzzle(rows, cols) {
    let i = 0;
    let puzzle = [];
    let topImage = 0;
    for (let row = 0; row < rows; row++) {
        topImage =  300 * row;
        let leftImage = 0;
        
        let rowPieces = [];
        for (let col = 0; col < cols; col++) {
            const attachment = [];
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

            // On crée les points d'accroche
            if (top === 'Plein'){
                attachment.push({ x: width / 2, y: 0, matchId: i - 7});
            }
            if (right === 'Plein'){
                attachment.push({ x: width, y: height / 2, matchId: i + 1});
            }
            if (bottom === 'Plein'){
                attachment.push({ x: width / 2, y: height, matchId: i + 7});
            }
            if (left === 'Plein'){
                attachment.push({ x: 0, y: height / 2, matchId: i - 1});
            }
            if (top === 'Vide'){
                attachment.push({ x: width / 2, y: 74, matchId: i - 7});
            }
            if (right === 'Vide'){
                attachment.push({ x: width - 74, y: height / 2, matchId: i + 1});
            }
            if (bottom === 'Vide'){
                attachment.push({ x: width / 2, y: height - 74, matchId: i + 7});
            }
            if (left === 'Vide'){
                attachment.push({ x: 74, y: height / 2, matchId: i - 1});
            }
            const puzzlePiece = new PuzzlePiece(i, top, right, bottom, left, row, col, attachment);
            maskImagePath = './pieces_ordre/' + puzzlePiece.fileName;
            console.log(topImage);
            applyMask(baseImagePath, maskImagePath, leftImage, topImage, width, height, i);
            rowPieces.push(puzzlePiece);
            i++;
        }
        puzzle.push(rowPieces);
    }
    return puzzle;
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

console.log(generatePuzzle(7,7));