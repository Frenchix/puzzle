<template>
    <!-- Loading -->
    <!-- <div v-if="isLoading" class="text-center text-lg text-[#007bff]">Chargement...</div> -->
    <!-- Message d'erreur -->
    <!-- <div v-if="hasError" class="text-center text-lg text-red-500">{{ errorMessage }}</div> -->

    <div class="w-full h-full flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/12 py-2 lg:max-w-[200px] m-auto lg:m-0 bg-slate-100">
            <PlayersList />
        </div>
        <div class="flex-auto pt-5">
            <div class="image-selection">
                <div v-for="image in images" :key="image.id" class="image-card">
                <img :src="image.src" @click="selectImage(image)" :class="{ 'selected-image': selectedImageId === image.id }"/>
                </div>
            </div>
        
            <div class="puzzle-options py-5 justify-center">
                <select v-model="numberOfPieces">
                <option disabled value="">Nombre de pièces</option>
                <option v-for="number in pieceOptions" :key="number" :value="number">{{ number }}</option>
                </select>
                <button @click="startGame">Démarrer</button>
            </div>
        </div>
        <div class="lg:w-2/12 py-2 lg:max-w-[200px] w-[400px] m-auto lg:m-0 bg-slate-100">
            <Messages />
        </div>
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import PlayersList from "./PlayersList.vue";
import Messages from "./Messages.vue";

const router = useRouter();

const images = ref([]);
const numberOfPieces = ref('');
const selectedImageId = ref(null);
const pieceOptions = ref([49, 100, 225, 400]); // Options pour le nombre de pièces

function selectImage(image) {
  selectedImageId.value = image.id;
}

function startGame() {
    if (selectedImageId.value && numberOfPieces.value) {
    router.push({
      path: '/game',
      query: { imageId: selectedImageId.value, pieces: numberOfPieces.value },
    });
  }
}

onMounted(async () => {
    try {
        const response = await fetch(`${import.meta.env.VITE_HOST_API}/getImages`);
        images.value = await response.json();
    } catch (error) {
        console.error('Erreur lors du chargement des images', error);
    }
})
</script>

<style>

</style>