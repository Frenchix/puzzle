<template>
        <div>
            <div class="text-center py-2">
                Joueurs
            </div>
            <ul class="px-2">
                <li v-for="item, index in players" class="flex justify-between">
                    <div>{{ item.userName }}</div>
                    <!-- <div>{{ formatTime(item.time) }}</div> -->
                </li>
            </ul>
        </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import socketService from '../composable/useSocketService';
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { id } = storeToRefs(store);

const players = ref([]);

onMounted(() => {
    socketService.onUpdatePlayerList((data) => {
        // Traiter les données de mise à jour de la room
        players.value = data;
        console.log(data)
    });
});
</script>