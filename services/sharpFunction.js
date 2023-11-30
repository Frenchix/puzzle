const sharp = require('sharp');

function applyMask(baseImagePath, maskImagePath, left, top, width, height, nbPiece, ORIGINAL_WIDTH, uuid) {
    const outputImagePath = `./pieces_a_assembler/${uuid}.png`
    sharp(maskImagePath)
        .resize({ 
            width: width,
            height: height,
            fit: 'fill'
        })
        .toBuffer()
        .then(data => {
            sharp(baseImagePath)
                .extract({ left: left, top: top, width: width, height: height })
                .composite([{ input: data, blend: 'dest-in' }])
                .toFile(outputImagePath)
                .then(() => {
                    // console.log(`Puzzle piece created at ${outputImagePath}`)
                })
                .catch(err => console.error(err));
        });
    
}

module.exports = { applyMask };