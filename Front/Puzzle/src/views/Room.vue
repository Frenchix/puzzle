<script setup>
import { ref, onUnmounted } from 'vue';
import socketService from '../composable/useSocketService';

const roomId = ref('room-id');
const userId = ref('user-id');

const joinRoom = () => {
    socketService.joinRoom(roomId.value, userId.value);
};
onUnmounted(() => {
    socketService.leaveRoom(roomId.value, userId.value);
});
</script>

<template>
    <button @click="joinRoom">Rejoindre la Room</button>
</template>
