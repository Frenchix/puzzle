<template>
    <div class="w-[400px] mx-auto pt-5">
        <div class="font-bold">Mes amis</div>
        <div v-if="friends.length > 0">
            <ul class="px-2 pt-2">
                <li v-for="friend in friends" class="flex justify-center gap-5 items-center py-2">
                    <div class="w-1/2">{{ friend }}</div>
                    <button class="bg-green-600">Défier</button>
                </li>
            </ul>
        </div>
        <div v-else class="flex justify-center pt-10 items-center">
            <span>Vous n'avez pas d'ami pour le moment</span>
            <img :src="curly" alt="Image paquet curly" class="w-[60px]">
        </div>
        <div class="pt-5">
            <div class="font-bold">Mes demandes d'amis</div>
            <div v-if="friendsRequest">
                <ul class="px-2 pt-2">
                    <li v-for="friend, index in friendsRequest" class="flex justify-center gap-5 items-center py-1">
                        <div class="w-1/3">{{ index }}</div>
                        <button class="bg-green-600" @click="responseFriendRequest(true, index, friend.uid)">Accepter</button>
                        <button class="bg-red-600" @click="responseFriendRequest(false, index, friend.uid)">Refuser</button>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import curly from "@/assets/curly.jpg";
import { ref, onMounted } from 'vue'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'
import { useToast } from 'vue-toast-notification'

const $toast = useToast();

const store = useUserStore();
const { uid } = storeToRefs(store);

const friends = ref([]);
const friendsRequest = ref([]);

async function responseFriendRequest(answer, index, uidFriend) {
    try {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ uid: uid.value,
                                    friendName: index,
                                    answer: answer,
                                    uidFriend: uidFriend
                                })
            };
        
        const response = await fetch(`${import.meta.env.VITE_HOST_API}/responseFriendRequest`, requestOptions);
        friends.value = await response.json();
        let instance = $toast.success("Demande pris en compte");
        delete friendsRequest.value[index];
    } catch (error) {
        console.log(error)
        let instance = $toast.error("Un problème est survenu");
    }
}

onMounted(async () => {
    const response = await fetch(`${import.meta.env.VITE_HOST_API}/getFriends/${uid.value}`);
    friends.value = await response.json();
    const responseFriendsRequest = await fetch(`${import.meta.env.VITE_HOST_API}/getRequestFriend/${uid.value}`);
    friendsRequest.value = await responseFriendsRequest.json();
});

</script>

<style scoped>
button {
    width: fit-content;
    padding: 10px;
    border-radius: 4px;
    color: white;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
</style>