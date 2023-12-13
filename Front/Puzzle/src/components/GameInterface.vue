<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { usePuzzlePieces } from '../composable/usePuzzlePieces';
import socketService from '../composable/useSocketService';
import ClassementPuzzle from "./ClassementPuzzle.vue";
import { useTimerStore } from '@/store/timer'
import { useFormat } from '../composable/useFormat';

const props = defineProps(['puzzleImage', 'puzzleData', 'nbPieces', 'imageId', 'duel', 'roomId', 'isAdmin']);

const store = useTimerStore();
const { stopTimer, initTimer, startTimer } = store;

const { formatTime } = useFormat();

const isImageModalOpen = ref(false);

const isLoading = ref(true);
const hasError = ref(false);
const errorMessage = ref('');
const showCountDown = ref(false);
const countdown = ref(5);
const isReady = ref(false);

const scaleFactor = ref(0.3); // Facteur d'échelle initial
const { pieces, gameTime, showCompletionAnimation, startDrag, onDrag, endDrag, loadImage } = usePuzzlePieces(props.imageId, props.nbPieces);

const pieceStyle = (piece) => ({
    left: piece.x + 'px',
    top: piece.y + 'px',
    width: piece.width + 'px',
    height: piece.height + 'px',
    backgroundImage: `url(${piece.fileName})`,
    backgroundSize: 'cover',
    position: 'absolute'
});

function readyToPlay() {
    isReady.value = true;
    socketService.readyToPlay(props.roomId);
}

function changePuzzle() {
    
    socketService.readyToPlay(props.roomId);
}

async function restartGame() {
    location.reload() 
}

function enlargeImage() {
  isImageModalOpen.value = true;
}

function closeImageModal() {
  isImageModalOpen.value = false;
}

onUnmounted(() => {
    stopTimer();
})

onMounted(async () => {
  try {
    initTimer();
    const loadImagePromises = props.puzzleData.map((piece) => {
        return loadImage(piece.fileName, piece);
    });
    await Promise.all(loadImagePromises);

    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    pieces.value = props.puzzleData;
    pieces.value.forEach(piece => {
        piece.key = Date.now() + Math.random();
        piece.width = piece.width * scaleFactor.value;
        piece.height = piece.height * scaleFactor.value;
        piece.attachmentPoints.forEach(attachmentPoint => {
            attachmentPoint.x *= scaleFactor.value;
            attachmentPoint.y *= scaleFactor.value;
        });
    });
    if (!props.duel) {
        fetch((`${import.meta.env.VITE_HOST_API}/deleteFiles`), {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(pieces.value)
        });
    } else {
        socketService.onStartCountdown(() => {
            showCountDown.value = true;
            const interval = setInterval(() => {
                countdown.value--;
                if (countdown.value === 0) {
                    clearInterval(interval);
                    showCountDown.value = false;
                    startTimer();
                }
            }, 1000);
        });
    }
    isLoading.value = false;
  } catch (error) {
    hasError.value = true;
    errorMessage.value = "Erreur lors du chargement des pièces.";
    isLoading.value = false;
    console.error('Erreur lors du chargement des données du puzzle:', error);
  }
});

</script>

<template>
    <!-- Loading -->
    <div v-if="isLoading" class="text-center text-lg text-[#007bff]">Chargement...</div>
    <!-- Message d'erreur -->
    <div v-if="hasError" class="text-center text-lg text-red-500">{{ errorMessage }}</div>

    <div v-if="!isLoading && !hasError" class="w-full flex flex-col-reverse lg:flex-row">
        <div v-if="props.imageId && props.nbPieces && !duel" class="w-2/12 py-2 max-w-[200px] m-auto lg:m-0">
            <ClassementPuzzle :id="props.imageId" :pieces="props.nbPieces"/>
        </div>
        <div class="game-container flex-auto min-w-[900px] m-auto">
            <div class="w-full flex justify-around">
                <div v-if="props.duel === 'oui'">
                    <button v-if="!isReady && !props.isAdmin" class="button h-fit" @click="readyToPlay">Prêt</button>
                    <button v-if="props.isAdmin" class="button h-fit" @click="$emit('changePuzzle')">Changer de puzzle</button>
                </div>
                <div v-else>
                    <button class="button h-fit" @click="restartGame">Recommencer</button>
                </div>
                <div class="timer">Temps écoulé: {{ formatTime(gameTime) }}</div>
                <div class="puzzle-preview" @click="enlargeImage">
                    <img :src="props.puzzleImage" alt="Aperçu du puzzle" />
                </div>
            </div>
            <div v-if="isImageModalOpen" class="image-modal" @click="closeImageModal">
                <div class="image-modal-content" @click.stop>
                    <img :src="props.puzzleImage" alt="Agrandissement du puzzle" />
                    <button class="button close-modal" @click="closeImageModal">Fermer</button>
                </div>
            </div>
            <div class="puzzle-area">
                <div class="puzzle-pieces">
                    <div v-for="piece in pieces" 
                        :key="piece.key" 
                        class="puzzle-piece" 
                        :style="pieceStyle(piece)"
                        @mousedown="event => startDrag(event, piece)">
                    </div>
                </div>
            </div>
            <div v-if="showCountDown" class="countdown">{{ countdown }}</div>
            <div v-if="showCompletionAnimation" class="completion-animation">
                Félicitations ! Puzzle terminé !
            </div>
        </div>
    </div>
  </template>

<style>

.puzzle-background {
  width: auto;
  height: 20vh;
  background-repeat: no-repeat;
  background-size: auto;
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


.game-container {
  /* max-width: 1000px;
  margin: 20px auto; */
  padding: 20px;
  background-color: #ffe;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #0056b3;
}

.timer {
  font-size: 20px;
  margin: 10px;
}



.puzzle-area {
  width: 100%;
  height: 700px; /* Ajustez selon les besoins de votre jeu */
  position: relative;
}
.image-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.image-modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  position: relative;
}

.image-modal-content img {
  max-width: 90vw;
  max-height: 80vh;
}

.close-modal {
  position: absolute;
  top: 10px;
  right: 10px;
}

.puzzle-preview {
    max-width: 100px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.puzzle-preview img {
  max-width: 100px;
  border-radius: 5px;
}
.completion-animation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #007bff;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  animation: fadeInOut 3s;
  z-index: 10;
}
.countdown {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 24px;
  animation: fadeInOut 3s;
  z-index: 10;
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
}
</style>
