const sharp = require('sharp');

function applyMask(baseImagePath, maskImagePath, left, top, width, height, nbPiece) {
    // console.log("maskImagePath", maskImagePath);
    // console.log("left", left);
    // console.log("top", top);
    // console.log("width", width);
    // console.log("height", height);
    // console.log("nbPiece", nbPiece);
    const outputImagePath = `./pieces_a_assembler/${nbPiece}.png`
    sharp(baseImagePath)
        .extract({ left: left, top: top, width: width, height: height })
        .composite([{ input: maskImagePath, blend: 'dest-in' }])
        .toFile(outputImagePath)
        .then(() => console.log(`Puzzle piece created at ${outputImagePath}`))
        .catch(err => console.error(err));
}

module.exports = { applyMask };