<script setup>
import backgroundImage from "@/assets/gragas2.jpeg";
import { ref, reactive } from 'vue';

const selectedPiece = ref(null);
const puzzleImage = ref(null);
const offset = reactive({ x: 0, y: 0 });

const originalSize = 2100; // Taille originale de l'image
const displayedWidth = ref(2100);
const scaleFactor = ref(1); // Facteur d'échelle initial

const piece1 = new URL('../assets/pieces_a_assembler/0.png', import.meta.url).href;
const piece2 = new URL('../assets/pieces_a_assembler/1.png', import.meta.url).href;

const pieces = ref([
  { id: 1, image: piece1, x: 50, y: 50, width: 300, height: 300, originalWidth: 300, originalHeight: 300 },
  { id: 2, image: piece2, x: 160, y: 50, width: 374, height: 300, originalWidth: 374, originalHeight: 300},
  // Ajoutez d'autres pièces ici...
]);

// function pieceStyle(piece) {
//     return {
//       left: piece.x + 'px',
//       top: piece.y + 'px',
//       width: piece.width + 'px',
//       height: piece.height + 'px',
//       backgroundImage: `url(${piece.image})`,
//       backgroundSize: 'cover',
//       position: 'absolute'
//     };
//   }

const pieceStyle = (piece) => ({
    left: piece.x + 'px',
    top: piece.y + 'px',
    width: piece.width + 'px',
    height: piece.height + 'px',
    backgroundImage: `url(${piece.image})`,
    backgroundSize: 'cover',
    position: 'absolute'
});

const startDrag = (event, piece) => {
    selectedPiece.value = piece;
    offset.x = event.clientX - piece.x;
    offset.y = event.clientY - piece.y;
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
};

const onDrag = (event) => {
    if (!selectedPiece.value) return;
    selectedPiece.value.x = event.clientX - offset.x;
    selectedPiece.value.y = event.clientY - offset.y;
};

const endDrag = () => {
    document.removeEventListener('mousemove', onDrag);
    document.removeEventListener('mouseup', endDrag);
    selectedPiece.value = null;
};
const myObserver = new ResizeObserver(entries => {
    displayedWidth.value = entries[0].contentRect.width;
    scaleFactor.value = displayedWidth.value / originalSize;
    pieces.value.forEach(piece => {
        piece.width = piece.originalWidth * scaleFactor.value;
        piece.height = piece.originalHeight * scaleFactor.value;
        piece.x *= scaleFactor.value;
        piece.y *= scaleFactor.value;
    });
    
});

const onImageLoad = () => {
  displayedWidth.value = puzzleImage.value.clientWidth;
  myObserver.observe(puzzleImage.value);
};

</script>

<!-- <template>
    <div class="h-full">
        <div class="bg-cover h-full bg-[url('../assets/gragas2.jpeg')]">

        </div>
    </div>
</template> -->
<template>
    <div class="puzzle-container">
      <img class="puzzle-background" :src="backgroundImage" alt="Puzzle Background" ref="puzzleImage" @load="onImageLoad"/>
        <div class="puzzle-pieces">
            <div v-for="piece in pieces" 
                :key="piece.id" 
                class="puzzle-piece" 
                :style="pieceStyle(piece)"
                @mousedown="event => startDrag(event, piece)">
                <!-- L'image de la pièce est définie en CSS -->
            </div>
        </div>
    </div>
</template>

<style>
.puzzle-container {
  position: relative;
  width: 100%; /* ou la largeur souhaitée */
  height: 100vh; /* ou la hauteur souhaitée */
}

.puzzle-background {
  width: auto;
  height: 100vh;
  background-repeat: no-repeat;
  background-size: auto;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.puzzle-pieces {
  position: relative;
  z-index: 2;
}

.puzzle-piece {
  width: /* largeur de la pièce */;
  height: /* hauteur de la pièce */;
  position: absolute;
  cursor: move; /* Style du curseur pour le déplacement */
}
</style>
