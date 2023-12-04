const sharp = require('sharp');

function applyMask(baseImagePath, maskImagePath, left, top, width, height, nbPiece, ORIGINAL_WIDTH, uuid) {
    return new Promise((resolve, reject) => {
        const outputImagePath = `./pieces_a_assembler/${uuid}.webp`;

        // Convertir le masque en WebP
        sharp(maskImagePath)
            .resize({ width, height, fit: 'fill' })
            .webp({ quality: 80, alphaQuality: 100 })
            .toBuffer()
            .then(maskBuffer => {
                // Convertir l'image source en WebP
                sharp(baseImagePath)
                    .extract({ left, top, width, height })
                    .webp({ quality: 80, alphaQuality: 100 })
                    .toBuffer()
                    .then(sourceBuffer => {
                        // Composite des images WebP
                        sharp(sourceBuffer)
                            .composite([{ input: maskBuffer, blend: 'dest-in' }])
                            .toFile(outputImagePath)
                            .then(() => resolve())
                            .catch(err => reject(err));
                    })
                    .catch(err => reject(err));
            })
            .catch(err => reject(err));
        });
}


module.exports = { applyMask };



// function applyMask(baseImagePath, maskImagePath, left, top, width, height, nbPiece, ORIGINAL_WIDTH, uuid) {
//     const outputImagePath = `./pieces_a_assembler/${uuid}.png`
//     sharp(maskImagePath)
//         .resize({ 
//             width: width,
//             height: height,
//             fit: 'fill'
//         })
//         .toBuffer()
//         .then(data => {
//             sharp(baseImagePath)
//                 .extract({ left: left, top: top, width: width, height: height })
//                 .composite([{ input: data, blend: 'dest-in' }])
//                 .toFile(outputImagePath)
//                 .then(() => {
//                     // console.log(`Puzzle piece created at ${outputImagePath}`)
//                 })
//                 .catch(err => console.error(err));
//         });
    
// }