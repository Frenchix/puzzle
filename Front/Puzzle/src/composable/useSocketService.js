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

    puzzleSelected(roomId, imageId, numberPieces, puzzleImage) {
        this.socket.emit('puzzleSelected', roomId, imageId, numberPieces, puzzleImage );
    }

    readyToPlay(roomId) {
        this.socket.emit('readyToPlay', roomId );
    }

    changePuzzle(roomId) {
        this.socket.emit('changePuzzle', roomId );
    }

    puzzleFinished(roomId, winner) {
        this.socket.emit('puzzleFinished', roomId, winner );
    }

    onPuzzleFinished(callback) {
        this.socket.on('puzzleFinished', callback);
    }

    onchangePuzzle(callback) {
        this.socket.on('changePuzzle', callback);
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
