<template>
        <div v-if="errorMsg" class="pl-2">
            Problème de récupération du classement
        </div>
        <div v-else>
            <div class="text-center py-2">
                Classement
            </div>
            <ul class="px-2">
                <li v-for="item, index in classement" class="flex justify-between">
                    <div>{{ index }}</div>
                    <div>{{ formatTime(item.time) }}</div>
                </li>
            </ul>
        </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue';
import { useFormat } from '../composable/useFormat';
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

const store = useUserStore();
const { userName, bestScore } = storeToRefs(store);
const { formatTime } = useFormat();

const classement = ref([]);
const errorMsg = ref(false);
const props = defineProps({
    id: Number,
    pieces: Number,
})

watchEffect(async () => {
    const response = await fetch(`http://localhost:5002/api/getClassement/${props.id - 1}/${props.pieces}`);
    classement.value = await response.json();
})

onMounted(async () => {
    try {
        if(userName.value){
            try {
                const responseBestScore = await fetch(`http://localhost:5002/api/getBestScore/${props.id - 1}/${props.pieces}/${userName.value}`);
                const bestScoreUser = await responseBestScore.json();
                if (bestScoreUser){
                    bestScore.value = bestScoreUser.time;    
                } else {
                    bestScore.value = 0;
                }
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        errorMsg.value = true;
    }
})

</script>