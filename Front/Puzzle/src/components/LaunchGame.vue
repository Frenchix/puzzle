<template>
    <div class="home-container">
      <div class="image-selection">
        <div v-for="image in preexistingImages" :key="image.id" class="image-card">
          <img :src="image.src" @click="selectImage(image)" />
        </div>
      </div>
  
      <div class="image-generation">
        <input v-model="imageDescription" placeholder="Description pour l'IA" />
        <button @click="generateImage">Générer Image</button>
        <img v-if="generatedImage" :src="generatedImage" />
      </div>
  
      <div class="puzzle-options">
        <select v-model="numberOfPieces">
          <option disabled value="">Nombre de pièces</option>
          <option v-for="number in pieceOptions" :key="number" :value="number">{{ number }}</option>
        </select>
        <button @click="startGame">Démarrer</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const preexistingImages = ref([{ id: 1, src: 'path_to_image_1.jpg' }, /* ... autres images ... */]);
  const imageDescription = ref('');
  const generatedImage = ref(null);
  const numberOfPieces = ref('');
  const pieceOptions = ref([100, 200, 300]); // Options pour le nombre de pièces
  
  function selectImage(image) {
    // Sélectionner une image préexistante
    // ...
  }
  
  function generateImage() {
    // Logique pour générer une image avec l'IA basée sur `imageDescription.value`
    // ...
  }
  
  function startGame() {
    // Lancer le jeu avec l'image et le nombre de pièces sélectionnés
    // ...
  }
  </script>
  
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
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  input {
    border: 2px solid #ddd;
    padding: 10px;
    border-radius: 4px;
  }
  
  input:focus {
    border-color: #007bff;
  }
  </style>
  
  