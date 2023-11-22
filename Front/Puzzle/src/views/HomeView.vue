<script setup>
import GameInterface from '../components/GameInterface.vue';
import LaunchGame from '../components/LaunchGame.vue';
import { ref } from 'vue';

const userName = ref('NomUtilisateur');
</script>

<template>
    <header class="game-header">
      <img src="path_to_logo.png" alt="Logo" class="logo"/>
      <span class="user-name">{{ userName }}</span>
    </header>
    <LaunchGame></LaunchGame>
  </template>

<style>

.logo {
  height: 50px; /* Ajustez selon la taille de votre logo */
}

.user-name {
  font-size: 20px;
  color: #333;
}

</style>
