<template>
        <div>
            <div class="text-center py-2">
                Joueurs
            </div>
            <ul class="px-2">
                <li v-for="item, index in players" class="flex justify-between">
                    <div>{{ item.userName }}</div>
                    <svg v-if="item.ready" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
                        <path fill="#43A047" d="M40.6 12.1L17 35.7 7.4 26.1 4.6 29 17 41.3 43.4 14.9z"></path>
                    </svg>
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
const { isAdmin, userName } = storeToRefs(store);

const players = ref([]);

onMounted(() => {
    socketService.onUpdatePlayerList((data) => {
        players.value = data;
        data.forEach(player => {
            if(player.userName === userName.value){
                if (player.isAdmin){
                    isAdmin.value = true;
                } else {
                    isAdmin.value = false;
                }
            }
        });
    });
});
</script>