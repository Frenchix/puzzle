const { Server } = require('socket.io');

module.exports = function(server) {
    const io = new Server(server, {
        cors: {
            origin: "*", // Spécifiez les origines autorisées ou mettez '*' pour toutes
            methods: ["GET", "POST"]
        },
        transports: ['websocket', 'polling'], // Assurez-vous que les transports sont bien définis
    });

    io.on('connection', (socket) => {
        socket.on('joinRoom', ({ roomId, userId }) => {
            console.log("join")
            socket.join(roomId);
            // Logique pour ajouter l'utilisateur à la room dans Firebase
        });
    
        socket.on('disconnect', () => {
            console.log("leave")
            // socket.leave(roomId);
            // Logique pour retirer l'utilisateur de la room dans Firebase
            // Vous pouvez ajouter de la logique ici pour gérer la sortie de l'utilisateur de la room
            // Par exemple, notifier les autres utilisateurs dans la room, mettre à jour la base de données, etc.
        });
    
        // Autres gestionnaires d'événements...
    });

    return io;
};