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

    puzzleSelected(roomId, imageId, numberPieces) {
        this.socket.emit('puzzleSelected', roomId, imageId, numberPieces );
    }

    readyToPlay(roomId) {
        this.socket.emit('readyToPlay', roomId );
    }

    onRoomUpdate(callback) {
        this.socket.on('roomUpdate', callback);
    }

    onUpdatePlayerList(callback){
        this.socket.on('updatePlayerList', callback);
    }

    onPuzzleReady(callback){
        this.socket.on('puzzleReady', callback);
    }
    
    onStartCountdown(callback){
        this.socket.on('startCountdown', callback);
    }
}

export default new SocketService();
