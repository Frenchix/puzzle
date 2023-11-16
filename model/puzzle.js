const { getMatchingType, getRandomType, getRandomInt } = require('../services/randomFunction');
const { applyMask } = require('../services/sharpFunction');

const ORIGINAL_WIDTH = 300;
const ORIGINAL_HEIGHT = 300;

class PuzzlePiece {
    constructor(id, top, right, bottom, left, row, col, attachmentPoints, width, height) {
        this.id = id;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.row = row;
        this.col = col;
        this.pieceName = this.pieceName();
        this.fileName = this.fileName();
        this.attachmentPoints = attachmentPoints;
        this.x = getRandomInt(800);
        this.y = getRandomInt(800);
        this.width = width;
        this.height = height;
        this.originalWidth = ORIGINAL_WIDTH;
        this.originalHeight = ORIGINAL_HEIGHT;
    }

    pieceName(){
        return `top-${this.top}_left-${this.left}_bot-${this.bottom}_right-${this.right}.png`;
    }
    fileName(){
        return `http://localhost:5002/pieces_a_assembler/${this.id}.png`;
    }
    
    static generatePuzzle(rows, cols){
        const baseImagePath = './gragas.jpeg';
        let i = 0;
        let puzzle = [];
        let topImage = 0;
        for (let row = 0; row < rows; row++) {
            let leftImage = 0;
            let rowPieces = [];
            for (let col = 0; col < cols; col++) {
                const attachment = [];
                topImage =  ORIGINAL_WIDTH * row;
                let width = ORIGINAL_WIDTH;
                let height = ORIGINAL_HEIGHT;
                leftImage = ORIGINAL_HEIGHT * col;
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
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + 74, y: 0, matchId: i - 7});
                    } else {
                        attachment.push({ x: ORIGINAL_WIDTH / 2, y: 0, matchId: i - 7});
                    }
                }
                if (right === 'Plein'){
                    if (top === 'Plein'){
                        attachment.push({ x: width, y: (ORIGINAL_HEIGHT / 2) + 74, matchId: i + 1});
                    } else {
                        attachment.push({ x: width, y: height / 2, matchId: i + 1});
                    }
                }
                if (bottom === 'Plein'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + 74, y: height, matchId: i + 7});
                    } else {
                        attachment.push({ x: width / 2, y: height, matchId: i + 7});
                    }
                }
                if (left === 'Plein'){
                    if (top === 'Plein'){
                        attachment.push({ x: 0, y: (ORIGINAL_HEIGHT / 2) + 74, matchId: i - 1});
                    } else {
                        attachment.push({ x: 0, y: height / 2, matchId: i - 1});
                    }
                }
                if (top === 'Vide'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + 74, y: 74, matchId: i - 7});
                    } else {
                        attachment.push({ x: width / 2, y: 74, matchId: i - 7});
                    }
                }
                if (right === 'Vide'){
                    if (top === 'Plein'){
                        attachment.push({ x: width - 74, y: (ORIGINAL_HEIGHT / 2) + 74, matchId: i + 1});
                    } else {
                        attachment.push({ x: width - 74, y: height / 2, matchId: i + 1});
                    }
                }
                if (bottom === 'Vide'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + 74, y: height - 74, matchId: i + 7});
                    } else {
                        attachment.push({ x: width / 2, y: height - 74, matchId: i + 7});
                    }
                }
                if (left === 'Vide'){
                    if (top === 'Plein'){
                        attachment.push({ x: 74, y: (ORIGINAL_HEIGHT / 2) + 74, matchId: i - 1});
                    } else {
                        attachment.push({ x: 74, y: height / 2, matchId: i - 1});
                    }
                }
                const puzzlePiece = new PuzzlePiece(i, top, right, bottom, left, row, col, attachment, width, height);
                const maskImagePath = './pieces_ordre/' + puzzlePiece.pieceName;
                applyMask(baseImagePath, maskImagePath, leftImage, topImage, width, height, i);
                rowPieces.push(puzzlePiece);
                i++;
            }
            puzzle.push(rowPieces);
        }
        return puzzle.flat();
    }
}

module.exports = PuzzlePiece;