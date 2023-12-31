const images = [
    {
        id: 1, 
        src: `${process.env.HOST}/images/gragas.jpeg`,
        srcLocal: './images/gragas.jpeg'
    },
    { 
        id: 2,
        src: `${process.env.HOST}/images/hard.webp`,
        srcLocal: './images/hard.webp'
    },
    { 
        id: 3,
        src: `${process.env.HOST}/images/leopard.jpeg`,
        srcLocal: './images/leopard.jpeg'
    },
    { 
        id: 4,
        src: `${process.env.HOST}/images/sphere.webp`,
        srcLocal: './images/sphere.webp'
    },
    { 
        id: 5,
        src: `${process.env.HOST}/images/voiture.jpeg`,
        srcLocal: './images/voiture.jpeg'
    }
]

function getImages() {
    return images;
}

function getImageById(id) {
    return images.find((image) => image.id == id);
}

module.exports = { getImages, images, getImageById };