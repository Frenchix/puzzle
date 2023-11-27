<script setup>
import logo from "@/assets/logo.png";
import { ref, onMounted } from 'vue';
import { useUserStore } from '../store/user'
import { useRouter } from 'vue-router'

const router = useRouter();

const store = useUserStore();
const { logout } = store;

onMounted(() => {
console.log(store.userName);    
})
const userName = ref('NomUtilisateur');
</script>

<template>
    <div class="game-header">
        <img :src="logo" alt="Logo" class="logo"/>
        <div>
            <span class="user-name">{{ store.userName }}</span>
            <button v-if="store.username" @click="logout()">Logout</button>
            <button @click="router.replace('/login')">Login</button>
        </div>
    </div>
</template>

<style>

.logo {
  height: 80px; /* Ajustez selon la taille de votre logo */
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
  padding: 0px 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

</style>