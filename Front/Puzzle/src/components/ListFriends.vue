<template>
    <div v-if="friends.length > 0">
        <ul class="px-2 pt-5">
            <li v-for="friend in friends" class="flex justify-center">
                <div>{{ friend }}</div>
            </li>
        </ul>
    </div>
    <div v-else class="flex justify-center pt-10 items-center">
        <span>Vous n'avez pas d'ami pour le moment</span>
        <img :src="curly" alt="Image paquet curly" class="w-[60px]">
    </div>
</template>

<script setup>
import curly from "@/assets/curly.jpg";
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { uid } = storeToRefs(store);

const friends = ref([]);

onMounted(async () => {
    const response = await fetch(`${import.meta.env.VITE_HOST_API}/getFriends/${uid.value}`);
    friends.value = await response.json();
});

</script>