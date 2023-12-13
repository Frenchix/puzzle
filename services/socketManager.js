const { Server } = require('socket.io');
const PuzzlePiece = require('../model/puzzle');
const fs = require('fs');

module.exports = function(server) {
    roomsInfo = {};
    const io = new Server(server, {
        cors: {
            origin: "*", // Spécifiez les origines autorisées ou mettez '*' pour toutes
            methods: ["GET", "POST"]
        },
        transports: ['websocket', 'polling'], // Assurez-vous que les transports sont bien définis
    });

    io.on('connection', (socket) => {
        socket.on('joinRoom', ({ roomId, userName }) => {
            // console.log("join")
            socket.join(roomId);
            // Si la room n'existe pas, créez-la
            if (!roomsInfo[roomId]) {
                roomsInfo[roomId] = { players : [], pieces : []};
                // Ajouter l'utilisateur(admin) à la room
                roomsInfo[roomId]['players'].push({ id: socket.id, userName: userName, ready: true, isAdmin: true });
            } else {
                // Ajouter l'utilisateur à la room
                roomsInfo[roomId]['players'].push({ id: socket.id, userName: userName, ready: false, isAdmin: false });
            }
            io.to(roomId).emit('updatePlayerList', roomsInfo[roomId]['players']);
        });
    
        socket.on('disconnect', () => {
            // console.log("leave")
            for (const roomId in roomsInfo) {
                    const indexOfObject = roomsInfo[roomId]['players'].findIndex(object => {
                        return object.id === socket.id;
                    });
                    if (indexOfObject >= 0){
                        roomsInfo[roomId]['players'].splice(indexOfObject, 1);
                        io.to(roomId).emit('updatePlayerList', roomsInfo[roomId]['players']);
                    }
    
                    // Optionnel : supprimer la room si elle est vide
                    if (roomsInfo[roomId]['players'].size === 0) {
                        delete roomsInfo[roomId];
                    }
            }
        });

        socket.on('puzzleSelected', async (roomId, imageId, numberPieces, puzzleImage) => {
            // Générer les pièces du puzzle
            const pieces = await PuzzlePiece.generatePuzzle(imageId, numberPieces);
            roomsInfo[roomId]['pieces'] = [];
            roomsInfo[roomId]['pieces'].push(pieces)
            io.to(roomId).emit('puzzleReady', { pieces: pieces, imageId: imageId, nbPieces: numberPieces, puzzleImage: puzzleImage });
        });

        socket.on('readyToPlay', (roomId) => {
            let lauchCar = true;
            if (roomsInfo[roomId]) {
                // Trouver l'utilisateur dans la room
                const playerIndex = roomsInfo[roomId]['players'].findIndex(player => player.id === socket.id);
                
                if (playerIndex !== -1) {
                    // Mettre à jour le statut 'ready' de l'utilisateur
                    roomsInfo[roomId]['players'][playerIndex].ready = true;
                    
                    // Envoyer une mise à jour à tous les membres de la room
                    io.to(roomId).emit('updatePlayerList', roomsInfo[roomId]['players']);
                }
                roomsInfo[roomId]['players'].forEach(player => {
                    if (player.ready === false){
                        lauchCar = false;
                    }
                });
                if (lauchCar){
                    roomsInfo[roomId]['pieces'][0].forEach(piece => {
                        const pieceName = `./pieces_a_assembler/${piece.uuid}.webp`;
                        fs.unlink(pieceName, (err) => {
                            if (err) {
                              console.error(err);
                            }
                          });
                    });
                    io.to(roomId).emit('startCountdown');
                }
            }
        });
    });

    return io;
};