<template>
    <!-- Loading -->
    <!-- <div v-if="isLoading" class="text-center text-lg text-[#007bff]">Chargement...</div> -->
    <!-- Message d'erreur -->
    <!-- <div v-if="hasError" class="text-center text-lg text-red-500">{{ errorMessage }}</div> -->

    <div class="w-full h-full flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/12 py-2 lg:max-w-[200px] m-auto lg:m-0 bg-slate-100">
            <PlayersList />
        </div>
        <div v-if="hasError" class="w-full text-center text-lg text-red-500">{{ errorMessage }}</div>
        <div v-else class="w-full">
            <div v-if="isLaunched" class="w-full">
                <!-- <div v-if="isLoading" class="text-center text-lg text-[#007bff]">Chargement...</div> -->
                <!-- Message d'erreur -->
                <!-- <div v-if="hasError" class="text-center text-lg text-red-500">{{ errorMessage }}</div> -->
                <GameInterface :puzzleImage="puzzleImage" :puzzleData="puzzleData" :imageId="selectedImageId" :nbPieces="numberOfPieces" duel="false" :roomId="props.roomId"></GameInterface>
            </div>
            <div v-else class="flex-auto pt-5">
                <div v-if="isAdmin">
                    <div v-if="isLoading" class="w-full text-center">
                        Génération des pieces ...
                    </div>
                    <div v-else>
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
                </div>
                <div v-else class="text-center pt-5">
                    En attente de l'hôte.
                </div>
            </div>
        </div>
        
        <!-- <div class="lg:w-2/12 py-2 lg:max-w-[200px] w-[400px] m-auto lg:m-0 bg-slate-100">
            <Messages />
        </div> -->
    </div>
  </template>

<script setup>
import { ref, onMounted } from 'vue';
import PlayersList from "./PlayersList.vue";
// import Messages from "./Messages.vue";
import socketService from '../composable/useSocketService';
import GameInterface from './GameInterface.vue';

const props = defineProps(['roomId']);

const isAdmin = ref();
const isLaunched = ref(false);
const isLoading = ref(false);
const hasError = ref(false);
const puzzleImage = ref(null);
const puzzleData = ref([]);
const errorMessage = ref('');
const images = ref([]);
const numberOfPieces = ref('');
const selectedImageId = ref(null);
const pieceOptions = ref([49, 100, 225, 400]); // Options pour le nombre de pièces

function selectImage(image) {
  selectedImageId.value = image.id;
}

async function startGame() {
    if (selectedImageId.value && numberOfPieces.value) {
        try {
            isLoading.value = true
            const responseImage = await fetch(`${import.meta.env.VITE_HOST_API}/getImage/${selectedImageId.value}`);
            const image = await responseImage.json();
            // puzzleImage.value = image.src;
            socketService.puzzleSelected(props.roomId, selectedImageId.value, numberOfPieces.value, image.src);
        } catch (error) {
            console.log(error)
            hasError.value = true;
            errorMessage.value = "Probleme lors du chargement de l'image"
        }
  }
}

onMounted(async () => {
    isAdmin.value = localStorage.getItem('isAdmin');
    try {
        const response = await fetch(`${import.meta.env.VITE_HOST_API}/getImages`);
        images.value = await response.json();
    } catch (error) {
        console.error('Erreur lors du chargement des images', error);
        hasError.value = true;
        errorMessage.value = "Probleme lors du chargement des images"
    }
    socketService.onPuzzleReady((data) => {
        console.log("ready")
        puzzleData.value = data.pieces;
        puzzleImage.value = data.puzzleImage;
        selectedImageId.value = data.imageId;
        numberOfPieces.value = data.nbPieces;
        isLoading.value = false
        isLaunched.value = true
        // Traiter les données de mise à jour de la room
        // loadPuzzlePieces(data.piecesUrls).then(() => {
        //         socket.emit('puzzleLoaded', roomId);
        //     })
    });
})
</script>

<style>

</style>