<template>
    <div class="flex justify-center pt-10 gap-2">
        <input type="text" placeholder="Tape le nom d'utilisateur" class="w-[200px] border-gray-500 border bg-gray-300 p-2">
        <button>Envoyer demande d'ami</button>
    </div>
    <div v-if="friends.length > 0">

    </div>
    <div v-else class="flex justify-center pt-10 items-center">
        <span>Vous n'avez pas d'ami pour le moment</span>
        <img :src="curly" alt="Image paquet curly" class="w-[60px]">
    </div>
</template>

<script setup>
import curly from "@/assets/curly.jpg";
import { ref } from 'vue'
const friends = ref([])

</script>