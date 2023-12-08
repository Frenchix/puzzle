<script setup>
import Header from '../components/Header.vue';
import GameDuel from '../components/GameDuel.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import socketService from '../composable/useSocketService';
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { uid, userName } = storeToRefs(store);

const route = useRoute();

const players = ref([]);

onMounted(() => {
    const roomId = route.params.id;
    socketService.joinRoom(roomId, userName.value);
    socketService.onUpdatePlayerList((data) => {
        // Traiter les données de mise à jour de la room
        players.value = data;
    });
});

// onUnmounted(() => {
//     socketService.leaveRoom(roomId.value, userId.value);
// });
</script>

<template>
    <header>
        <Header/>
    </header>
    <GameDuel></GameDuel>
</template>
