<script setup>
import backgroundImage from "@/assets/gragas2.jpeg";
import { ref, reactive, onMounted } from 'vue';

const DISTANCE_POINTS = 50; // Seuil de proximité en pixels
const selectedPiece = ref(null);
const puzzleImage = ref(null);
const offset = reactive({ x: 0, y: 0 });

const scaleFactor = ref(0.2); // Facteur d'échelle initial

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

onMounted(async () => {
    //7*7 = 49 pieces
    // 10*10 = 100 pieces
    // 15*15 = 225 pieces
    // 20*20 = 400 pieces

  try {
    const response = await fetch('http://localhost:5002/api/getPieces');
    const puzzleData = await response.json();
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
  } catch (error) {
    console.error('Erreur lors du chargement des données du puzzle:', error);
  }
});

</script>

<template>
    <div class="game-container">
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
      <!-- <div class="puzzle-container"> -->
    </div>
    <!-- </div> -->
  </template>

<style>
.puzzle-container {
  position: relative;
  background-color:beige;
  width: 900px;
  height: 700px;
  border: 0px solid;
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
.game-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f5f5f5;
  padding: 10px 20px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.game-container {
  max-width: 1000px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.puzzle-area {
  width: 100%;
  height: 700px; /* Ajustez selon les besoins de votre jeu */
  position: relative;
}
</style>
