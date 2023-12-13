<script setup>
import GameInterface from '../components/GameInterface.vue';
import Header from '../components/Header.vue';
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

const route = useRoute();

const imageId = ref(null);
const nbPieces = ref(null);
const isLoading = ref(true);
const hasError = ref(false);
const errorMessage = ref('');
const puzzleImage = ref(null);
const puzzleData = ref([]);

onMounted(async () => {
    //7*7 = 49 pieces
    // 10*10 = 100 pieces
    // 15*15 = 225 pieces
    // 20*20 = 400 pieces
    try {
        imageId.value = parseInt(route.query.imageId, 10);
        nbPieces.value = parseInt(route.query.pieces, 10);
        const responseImage = await fetch(`${import.meta.env.VITE_HOST_API}/getImage/${imageId.value}`);
        const image = await responseImage.json();
       
        puzzleImage.value = image.src;
        const response = await fetch(`${import.meta.env.VITE_HOST_API}/getPieces?id=${imageId.value}&nbPieces=${nbPieces.value}`, { mode: 'cors' });
        puzzleData.value = await response.json();
        isLoading.value = false;
    } catch (error) {
        hasError.value = true;
        errorMessage.value = "Erreur lors du chargement des pièces.";
        isLoading.value = false;
        console.error('Erreur lors du chargement des données du puzzle:', error);
    }
    
});
  
</script>

<template>
    <header>
        <Header/>
    </header>
    <!-- Loading -->
    <div v-if="isLoading" class="text-center text-lg text-[#007bff]">Chargement...</div>
    <!-- Message d'erreur -->
    <div v-if="hasError" class="text-center text-lg text-red-500">{{ errorMessage }}</div>
    <GameInterface v-if="!isLoading && !hasError" :puzzleImage="puzzleImage" :puzzleData="puzzleData" :imageId="imageId" :nbPieces="nbPieces" duel="non"></GameInterface>
</template>


