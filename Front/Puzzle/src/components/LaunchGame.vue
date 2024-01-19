<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router'
import ClassementPuzzle from "./ClassementPuzzle.vue";

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
  // You should create a service layer file that handle all of your fetch() for better readability and to avoid code repetition
    try {
        const response = await fetch(`${import.meta.env.VITE_HOST_API}/getImages`);
        images.value = await response.json();
    } catch (error) {
        console.error('Erreur lors du chargement des images', error);
    }
})
</script>

<template>
    <div class="home-container">
        <div class="image-selection">
            <div v-for="image in images" :key="image.id" class="image-card">
            <img :src="image.src" @click="selectImage(image)" :class="{ 'selected-image': selectedImageId === image.id }"/>
            </div>
        </div>
    
        <div class="puzzle-options">
            <select v-model="numberOfPieces">
            <option disabled value="">Nombre de pièces</option>
            <option v-for="number in pieceOptions" :key="number" :value="number">{{ number }}</option>
            </select>
            <button @click="startGame">Démarrer</button>
        </div>
        <div v-if="selectedImageId && numberOfPieces" class="w-2/12 py-2 max-w-[200px] m-auto lg:m-0">
            <ClassementPuzzle :id="selectedImageId" :pieces="numberOfPieces"/>
        </div>
    </div>
  </template>
  
  <style>
  .home-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }
  
  .image-selection, .image-generation {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
  }
  
  .image-card img {
    width: 150px; /* Ajustez selon la taille souhaitée */
    height: auto;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  
  .image-card img:hover {
    transform: scale(1.05);
  }
  
  .puzzle-options {
    display: flex;
    gap: 10px;
  }
  
  .puzzle-options select, .puzzle-options button, .image-generation input {
    padding: 8px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    background-color: #007bff;
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  .selected-image {
  border: 3px solid #007bff; /* ou tout autre style distinctif */
  transform: scale(1.1);
  transition: transform 0.3s ease, border 0.3s ease;
  box-shadow: 0 0 10px 3px rgba(0, 123, 255, 0.5); /* exemple d'ombre */
}

  </style>
  
  