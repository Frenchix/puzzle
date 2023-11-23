<script setup>
import { ref } from 'vue';

const userName = ref('NomUtilisateur');
</script>

<template>
    <div class="game-header">
        <img src="path_to_logo.png" alt="Logo" class="logo"/>
        <span class="user-name">{{ userName }}</span>
    </div>
</template>

<style>

.logo {
  height: 50px; /* Ajustez selon la taille de votre logo */
}

.user-name {
  font-size: 20px;
  color: #333;
}

.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

</style>