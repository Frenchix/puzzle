<script setup>
import Header from '../components/Header.vue';
import GameDuel from '../components/GameDuel.vue';
import { ref, onMounted, onUnmounted } from 'vue';
import socketService from '../composable/useSocketService';
import { useRoute } from 'vue-router'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { userName } = storeToRefs(store);

const route = useRoute();

const roomId = ref();

onMounted(() => {
    roomId.value = route.params.id;
    socketService.joinRoom(roomId.value, userName.value);
});

// onUnmounted(() => {
//     socketService.leaveRoom(roomId.value, userId.value);
// });
</script>

<template>
    <header>
        <Header/>
    </header>
    <GameDuel :roomId="roomId"></GameDuel>
</template>
