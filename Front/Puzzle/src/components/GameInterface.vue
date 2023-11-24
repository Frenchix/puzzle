<script setup>
import backgroundImage from "@/assets/gragas2.jpeg";
import { ref, reactive, onMounted } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute();

let timer = null;
const gameTime = ref(0);

const showCompletionAnimation = ref(false);

const isImageModalOpen = ref(false);

const imageId = ref(null);
const nbPieces = ref(null);
const isLoading = ref(true);
const hasError = ref(false);
const errorMessage = ref('');

const DISTANCE_POINTS = 50; // Seuil de proximité en pixels
const selectedPiece = ref(null);
const puzzleImage = ref(null);
const offset = reactive({ x: 0, y: 0 });

const scaleFactor = ref(0.3); // Facteur d'échelle initial

const pieces = ref([]);
const groups = ref([]);

const pieceStyle = (piece) => ({
    left: piece.x + 'px',
    top: piece.y + 'px',
    width: piece.width + 'px',
    height: piece.height + 'px',
    backgroundImage: `url(${piece.fileName})`,
    backgroundSize: 'cover',
    position: 'absolute'
});

const startDrag = (event, piece) => {
    startTimer();
    const group = piece.groupId ? groups.value.find(g => g.id === piece.groupId) : null;
    
    if (group) {
        // Définir l'état de déplacement pour le groupe entier
        group.isBeingDragged = true;
        // Calculez les offsets par rapport à la position de la souris
        group.offsetX = event.clientX;
        group.offsetY = event.clientY;

        // Mettre à jour les offsets initiaux pour chaque pièce dans le groupe
        group.pieces.forEach(p => {
            p.initialOffsetX = p.x - event.clientX;
            p.initialOffsetY = p.y - event.clientY;
        });
    }
    selectedPiece.value = piece;
    offset.x = event.clientX - piece.x;
    offset.y = event.clientY - piece.y;
};

const onDrag = (event) => {
    groups.value.forEach(group => {
        if (group.isBeingDragged) {
        group.pieces.forEach(piece => {
            piece.x = event.clientX + piece.initialOffsetX;
            piece.y = event.clientY + piece.initialOffsetY;
        });
        }
    });
    if (!selectedPiece.value) return;
    selectedPiece.value.x = event.clientX - offset.x;
    selectedPiece.value.y = event.clientY - offset.y;
};

const endDrag = (event) => {
    if (!selectedPiece.value) return; // Ne rien faire si aucune pièce n'est sélectionnée
    let groupToSnap = null;
    groups.value.forEach(group => {
        if(group.isBeingDragged){
            groupToSnap = group;
        }
        group.isBeingDragged = false;
    });
    if(groupToSnap){
        groupToSnap.pieces.forEach(piece => {
            checkForSnapping(piece, event);
        })
    } else {
        checkForSnapping(selectedPiece.value, event);
    }
    selectedPiece.value = null;
};

const checkForSnapping = (movedPiece, event) => {
  pieces.value.forEach(piece => {
    if(piece.groupId === movedPiece.groupId && piece.groupId !== undefined) {
        return;
    } else {
        if (piece !== movedPiece && isCloseEnough(movedPiece, piece)) {
            snapPieces(movedPiece, piece, event);
        }
    }
  });
};

const snapPieces = (movedPiece, stationaryPiece, event) => {
  const matchingPoints = movedPiece.attachmentPoints.find(point => point.matchId === stationaryPiece.id);
  if (!matchingPoints) return;

  const pointStationary = stationaryPiece.attachmentPoints.find(point => point.matchId === movedPiece.id);
  if (!pointStationary) return;

   // Calculez le décalage
  const offsetX = stationaryPiece.x + pointStationary.x - matchingPoints.x - movedPiece.x;
  const offsetY = stationaryPiece.y + pointStationary.y - matchingPoints.y - movedPiece.y;
//   // Obtenez le groupe ou créez-en un si nécessaire
  let group = movedPiece.groupId ? groups.value.find(g => g.id === movedPiece.groupId) : undefined;
  
//   // Ajustez les positions de toutes les pièces dans le groupe
if (group){
    group.pieces.forEach(piece => {
    piece.x += offsetX;
    piece.y += offsetY;
  });
} else {
    movedPiece.x = stationaryPiece.x + pointStationary.x - matchingPoints.x;
    movedPiece.y = stationaryPiece.y + pointStationary.y - matchingPoints.y;
}
  addToGroup(movedPiece, stationaryPiece);
};

// Exemple de création d'un groupe
const addToGroup = (pieceToAdd, targetPiece) => {
    let newGroup = { id: groups.value.length > 0 ? groups.value[groups.value.length - 1].id + 1 : 1, pieces: [] };

    let groupToAdd = pieceToAdd.groupId ? groups.value.find(g => g.id === pieceToAdd.groupId) : null;
    let targetGroup = targetPiece.groupId ? groups.value.find(g => g.id === targetPiece.groupId) : null;

    if(groupToAdd) {
        groupToAdd.pieces.forEach(p => {
          newGroup.pieces.push(p);
          p.groupId = newGroup.id;
      });
    //   Supprimer l'ancien groupToAdd
      const indexToRemove = groups.value.indexOf(groupToAdd);
      if (indexToRemove !== -1) {
        groups.value.splice(indexToRemove, 1);
      }
    } else {
        pieceToAdd.groupId = newGroup.id;
        newGroup.pieces.push(pieceToAdd);
    }

    if(targetGroup) {
        targetGroup.pieces.forEach(p => {
          newGroup.pieces.push(p);
          p.groupId = newGroup.id;
      });
      //   Supprimer l'ancien groupToAdd
      const indexToRemove = groups.value.indexOf(targetGroup);
      if (indexToRemove !== -1) {
        groups.value.splice(indexToRemove, 1);
      }
    } else {
        targetPiece.groupId = newGroup.id;
        newGroup.pieces.push(targetPiece);
    }
    groups.value.push(newGroup);
    console.log(groups)
    if(groups.value[0].pieces.length == nbPieces.value){
        stopTimer();
        triggerCompletionAnimation();
    }
};

const isCloseEnough = (piece1, piece2) => {
  return piece1.attachmentPoints.some(point1 => {
    if (point1.matchId !== piece2.id) return false;
    const point1Absolute = { x: piece1.x + point1.x, y: piece1.y + point1.y };
    return piece2.attachmentPoints.some(point2 => {
      const point2Absolute = { x: piece2.x + point2.x, y: piece2.y + point2.y };

      const distanceX = Math.pow(point2Absolute.x - point1Absolute.x, 2);
      const distanceY = Math.pow(point2Absolute.y - point1Absolute.y, 2);

      return distanceX < DISTANCE_POINTS && distanceY < DISTANCE_POINTS;
    });
  });
};

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Échec du chargement de l'image : ${src}`));
    img.src = src;
  });
}

async function restartGame() {
    location.reload() 
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      gameTime.value++;
    }, 1000);
  }
}

function stopTimer() {
  if (timer) {
    clearInterval(timer);
    // timer = null;
  }
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
}

function enlargeImage() {
  isImageModalOpen.value = true;
}

function closeImageModal() {
  isImageModalOpen.value = false;
}

function triggerCompletionAnimation() {
  showCompletionAnimation.value = true;

  // Optionnel : Masquer l'animation après un certain temps
  setTimeout(() => {
    showCompletionAnimation.value = false;
  }, 3000); // 3 secondes pour l'affichage de l'animation
}

onMounted(async () => {
    //7*7 = 49 pieces
    // 10*10 = 100 pieces
    // 15*15 = 225 pieces
    // 20*20 = 400 pieces

  try {
    imageId.value = route.query.imageId;
    nbPieces.value = route.query.pieces;
    const responseImage = await fetch(`http://localhost:5002/api/getImage/${imageId.value}`);
    const image = await responseImage.json();
    puzzleImage.value = image.src;
    const response = await fetch(`http://localhost:5002/api/getPieces?id=${imageId.value}&nbPieces=${nbPieces.value}`);
    const puzzleData = await response.json();
    const loadImagePromises = puzzleData.map(piece => loadImage(piece.fileName));
    await Promise.all(loadImagePromises);
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    pieces.value = puzzleData;
    pieces.value.forEach(piece => {
        piece.width = piece.width * scaleFactor.value;
        piece.height = piece.height * scaleFactor.value;
        piece.attachmentPoints.forEach(attachmentPoint => {
            attachmentPoint.x *= scaleFactor.value;
            attachmentPoint.y *= scaleFactor.value;
        });
    });
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
    <div v-if="isLoading" class="loading-indicator">Chargement...</div>
    <!-- Message d'erreur -->
    <div v-if="hasError" class="error-message">{{ errorMessage }}</div>

    <div v-if="!isLoading && !hasError" class="game-container">
        <div class="w-full flex justify-around">
            <button class="button h-fit" @click="restartGame">Recommencer</button>
            <div class="timer">Temps écoulé: {{ formatTime(gameTime) }}</div>
            <div class="puzzle-preview" @click="enlargeImage">
                <img :src="puzzleImage" alt="Aperçu du puzzle" />
            </div>
        </div>
        <div v-if="isImageModalOpen" class="image-modal" @click="closeImageModal">
            <div class="image-modal-content" @click.stop>
                <img :src="puzzleImage" alt="Agrandissement du puzzle" />
                <button class="button close-modal" @click="closeImageModal">Fermer</button>
            </div>
        </div>
        <div class="puzzle-area">
            <div class="puzzle-pieces">
                <div v-for="piece in pieces" 
                    :key="piece.id" 
                    class="puzzle-piece" 
                    :style="pieceStyle(piece)"
                    @mousedown="event => startDrag(event, piece)">
                </div>
            </div>
        </div>
        <div v-if="showCompletionAnimation" class="completion-animation">
            Félicitations ! Puzzle terminé !
        </div>
    </div>
  </template>

<style>
.loading-indicator {
  text-align: center;
  font-size: 18px;
  color: #007bff;
}

.error-message {
  text-align: center;
  font-size: 18px;
  color: red;
}

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
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
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

@keyframes fadeInOut {
  0%, 100% { opacity: 0; }
  10%, 90% { opacity: 1; }
}
</style>
