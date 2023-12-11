const { Server } = require('socket.io');
const PuzzlePiece = require('../model/puzzle');

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
                roomsInfo[roomId] = [];
            }
            
            // Ajouter l'utilisateur à la room
            roomsInfo[roomId].push({ id: socket.id, userName: userName });
            io.to(roomId).emit('updatePlayerList', roomsInfo[roomId]);
        });
    
        socket.on('disconnect', () => {
            // console.log("leave")
            for (const roomId in roomsInfo) {
                    const indexOfObject = roomsInfo[roomId].findIndex(object => {
                        return object.id === socket.id;
                    });
                    if (indexOfObject >= 0){
                        roomsInfo[roomId].splice(indexOfObject, 1);
                        io.to(roomId).emit('updatePlayerList', roomsInfo[roomId]);
                    }
    
                    // Optionnel : supprimer la room si elle est vide
                    if (roomsInfo[roomId].size === 0) {
                        delete roomsInfo[roomId];
                    }
    
                    // console.log(`Utilisateur ${socket.id} a quitté la room ${roomId}`);
            }
            // socket.leave(roomId);
            // Logique pour retirer l'utilisateur de la room dans Firebase
            // Vous pouvez ajouter de la logique ici pour gérer la sortie de l'utilisateur de la room
            // Par exemple, notifier les autres utilisateurs dans la room, mettre à jour la base de données, etc.
        });

        socket.on('puzzleSelected', async (roomId, imageId, numberPieces) => {
            // Générer les pièces du puzzle
            const pieces = await PuzzlePiece.generatePuzzle(imageId, numberPieces);
            // Informer les clients
            io.to(roomId).emit('puzzleReady', { pieces: pieces });
        });
    
        socket.on('puzzleLoaded', (roomId) => {
            // Vérifier si tous les utilisateurs ont chargé le puzzle
            checkAllUsersLoaded(roomId).then(allLoaded => {
                if (allLoaded) {
                    // Démarrer le compte à rebours
                    io.to(roomId).emit('startCountdown', { countdown: 5 });
                }
            });
        });
    
        // Autres gestionnaires d'événements...
    });

    return io;
};