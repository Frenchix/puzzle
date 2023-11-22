const { getMatchingType, getRandomType, getRandomInt } = require('../services/randomFunction');
const { applyMask } = require('../services/sharpFunction');

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
        this.x = getRandomInt(600);
        this.y = getRandomInt(600);
        this.width = width;
        this.height = height;
        // this.originalWidth = ORIGINAL_WIDTH;
        // this.originalHeight = ORIGINAL_HEIGHT;
    }

    pieceName(){
        return `top-${this.top}_left-${this.left}_bot-${this.bottom}_right-${this.right}.png`;
    }
    fileName(){
        return `http://localhost:5002/pieces_a_assembler/${this.id}.png`;
    }
    
    static generatePuzzle(rows, cols){
        const ORIGINAL_WIDTH = 2100 / rows;
        const ORIGINAL_HEIGHT = 2100 / cols;
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
                    topImage = topImage - Math.round(ORIGINAL_WIDTH / 4.05);
                    height = height + Math.round(ORIGINAL_WIDTH / 4.05);
                }
                if (bottom === 'Plein'){
                    height = height + Math.round(ORIGINAL_WIDTH / 4.05);
                }
                if (left === 'Plein'){
                    leftImage = leftImage - Math.round(ORIGINAL_WIDTH / 4.05);
                    width = width + Math.round(ORIGINAL_WIDTH / 4.05);
                }
                if (right === 'Plein'){
                    width = width + Math.round(ORIGINAL_WIDTH / 4.05);
                }
                // On crée les points d'accroche
                if (top === 'Plein'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + Math.round(ORIGINAL_WIDTH / 4.05), y: 0, matchId: i - rows});
                    } else {
                        attachment.push({ x: ORIGINAL_WIDTH / 2, y: 0, matchId: i - rows});
                    }
                }
                if (right === 'Plein'){
                    if (top === 'Plein'){
                        attachment.push({ x: width, y: (ORIGINAL_HEIGHT / 2) + Math.round(ORIGINAL_WIDTH / 4.05), matchId: i + 1});
                    } else {
                        attachment.push({ x: width, y: ORIGINAL_HEIGHT / 2, matchId: i + 1});
                    }
                }
                if (bottom === 'Plein'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + Math.round(ORIGINAL_WIDTH / 4.05), y: height, matchId: i + rows});
                    } else {
                        attachment.push({ x: ORIGINAL_WIDTH / 2, y: height, matchId: i + rows});
                    }
                }
                if (left === 'Plein'){
                    if (top === 'Plein'){
                        attachment.push({ x: 0, y: (ORIGINAL_HEIGHT / 2) + Math.round(ORIGINAL_WIDTH / 4.05), matchId: i - 1});
                    } else {
                        attachment.push({ x: 0, y: ORIGINAL_HEIGHT / 2, matchId: i - 1});
                    }
                }
                if (top === 'Vide'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + Math.round(ORIGINAL_WIDTH / 4.05), y: Math.round(ORIGINAL_WIDTH / 4.05), matchId: i - rows});
                    } else {
                        attachment.push({ x: ORIGINAL_WIDTH / 2, y: Math.round(ORIGINAL_WIDTH / 4.05), matchId: i - rows});
                    }
                }
                if (right === 'Vide'){
                    if (top === 'Plein'){
                        attachment.push({ x: width - Math.round(ORIGINAL_WIDTH / 4.05), y: (ORIGINAL_HEIGHT / 2) + Math.round(ORIGINAL_WIDTH / 4.05), matchId: i + 1});
                    } else {
                        attachment.push({ x: width - Math.round(ORIGINAL_WIDTH / 4.05), y: ORIGINAL_HEIGHT / 2, matchId: i + 1});
                    }
                }
                if (bottom === 'Vide'){
                    if (left === 'Plein'){
                        attachment.push({ x: (ORIGINAL_WIDTH / 2) + Math.round(ORIGINAL_WIDTH / 4.05), y: height - Math.round(ORIGINAL_WIDTH / 4.05), matchId: i + rows});
                    } else {
                        attachment.push({ x: ORIGINAL_WIDTH / 2, y: height - Math.round(ORIGINAL_WIDTH / 4.05), matchId: i + rows});
                    }
                }
                if (left === 'Vide'){
                    if (top === 'Plein'){
                        attachment.push({ x: Math.round(ORIGINAL_WIDTH / 4.05), y: (ORIGINAL_HEIGHT / 2) + Math.round(ORIGINAL_WIDTH / 4.05), matchId: i - 1});
                    } else {
                        attachment.push({ x: Math.round(ORIGINAL_WIDTH / 4.05), y: ORIGINAL_HEIGHT / 2, matchId: i - 1});
                    }
                }

                const puzzlePiece = new PuzzlePiece(i, top, right, bottom, left, row, col, attachment, width, height);
                const maskImagePath = './pieces_ordre/' + puzzlePiece.pieceName;

                applyMask(baseImagePath, maskImagePath, leftImage, topImage, width, height, i, ORIGINAL_WIDTH);
                rowPieces.push(puzzlePiece);
                i++;
            }
            puzzle.push(rowPieces);
        }
        return puzzle.flat();
    }
}

module.exports = PuzzlePiece;