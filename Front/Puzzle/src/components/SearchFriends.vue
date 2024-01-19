<template>
    <div class="flex justify-center pt-10 gap-2">
        <input type="text" v-model="pseudo" placeholder="Tape le nom d'utilisateur" class="w-[200px] border-gray-500 border bg-gray-300 p-2">
        <button @click="sendRequest">Envoyer demande d'ami</button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useToast } from 'vue-toast-notification'
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { userName, uid } = storeToRefs(store);

const $toast = useToast();

const pseudo = ref('');

async function sendRequest() {
    // You should create a service layer file that handle all of your fetch() for better readability and to avoid code repetition
    try {
        if(userName.value){
            const requestOptions = {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ uid: uid.value,
                                            userName: userName.value,
                                            friendName: pseudo.value
                                        })
            };
            const response = await fetch(`${import.meta.env.VITE_HOST_API}/addFriendRequest`, requestOptions)
            const responseRequest = await response.json();
            if (response.ok){
                let instance = $toast.success(responseRequest);
            } else {
                let instance = $toast.error(responseRequest);
            }
            
        }
    } catch (error) {
        let instance = $toast.error("Une erreur s'est produite lors de la demande d'ami");
    }
}
</script>