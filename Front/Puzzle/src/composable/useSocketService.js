import io from 'socket.io-client';

// URL de votre serveur backend
const SOCKET_URL = import.meta.env.VITE_HOST;

class SocketService {
    constructor() {
        this.socket = io(SOCKET_URL);
    }

    joinRoom(roomId, userName) {
        this.socket.emit('joinRoom', { roomId, userName });
    }

    leaveRoom(roomId, userId) {
        this.socket.emit('leaveRoom', { roomId, userId });
    }

    onRoomUpdate(callback) {
        this.socket.on('roomUpdate', callback);
    }

    onUpdatePlayerList(callback){
        this.socket.on('updatePlayerList', callback);
    }

    // Vous pouvez ajouter d'autres méthodes selon vos besoins
}

export default new SocketService();
