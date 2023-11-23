const images = [
    {
        id: 1, 
        src: 'http://localhost:5002/images/gragas.jpeg',
        srcLocal: './images/gragas.jpeg'
    },
    { 
        id: 2,
        src: 'http://localhost:5002/images/hard.jpeg',
        srcLocal: './images/hard.jpeg'
    },
    { 
        id: 3,
        src: 'http://localhost:5002/images/leopard.jpeg',
        srcLocal: './images/leopard.jpeg'
    },
    { 
        id: 4,
        src: 'http://localhost:5002/images/sphere.jpeg',
        srcLocal: './images/sphere.jpeg'
    },
    { 
        id: 5,
        src: 'http://localhost:5002/images/voiture.jpeg',
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