<template>
    <div class="w-2/12 py-2 max-w-[200px] m-auto lg:m-0">
        <div class="text-center py-2">
            Classement
        </div>
        <ul class="pl-2">
            <li>Frenchix 3m15</li>
            <li>Catherinix 2m58</li>
        </ul>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';

const props = defineProps(['id', 'pieces']);

onMounted(async () => {
    console.log("props.id", props.id);
    console.log("props.pieces", props.pieces);
    try {
        const response = await fetch(`http://localhost:5002/api/getClassement/${props.id}/${props.pieces}`);
        const classement = await response.json();
        console.log(classement);
    } catch (error) {
        
    }
})

</script>