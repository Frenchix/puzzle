<script setup>
import backgroundImage from "@/assets/gragas2.jpeg";
import { ref, reactive, onMounted } from 'vue';

const selectedPiece = ref(null);
const puzzleImage = ref(null);
const offset = reactive({ x: 0, y: 0 });

const originalSize = 2100; // Taille originale de l'image
const displayedWidth = ref(2100);
const scaleFactor = ref(0.3); // Facteur d'échelle initial

const pieces = ref([]);
// const piece1 = new URL('../assets/pieces_a_assembler/0.png', import.meta.url).href;
// const piece2 = new URL('../assets/pieces_a_assembler/1.png', import.meta.url).href;

// const pieces = ref([
//   { id: 1, image: piece1, x: 50, y: 50, width: 300, height: 300, originalWidth: 300, originalHeight: 300 },
//   { id: 2, image: piece2, x: 160, y: 50, width: 374, height: 300, originalWidth: 374, originalHeight: 300},
//   // Ajoutez d'autres pièces ici...
// ]);

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
        console.log(group.pieces)
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
    // document.addEventListener('mousemove', onDrag);
    // document.addEventListener('mouseup', () => {
    //     endDrag(piece)
    // });
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

const endDrag = () => {
    if (!selectedPiece.value) return; // Ne rien faire si aucune pièce n'est sélectionnée

    groups.value.forEach(group => {
        group.isBeingDragged = false;
    });
    checkForSnapping(selectedPiece.value);
    // document.removeEventListener('mousemove', onDrag);
    // document.removeEventListener('mouseup', endDrag);
    selectedPiece.value = null;
    console.log("groups", groups.value);
};

const checkForSnapping = (movedPiece) => {
  pieces.value.forEach(piece => {
    if (piece !== movedPiece && isCloseEnough(movedPiece, piece)) {
      snapPieces(movedPiece, piece);
    }
  });
};



// const snapPieces = (movedPiece, stationaryPiece) => {
//   const matchingPointsMoved = movedPiece.attachmentPoints.find(point => point.matchId === stationaryPiece.id);
//   const matchingPointsStationary = stationaryPiece.attachmentPoints.find(point => point.matchId === movedPiece.id);

//   if (!matchingPointsMoved || !matchingPointsStationary) return;

//   // Calculez le décalage
//   const offsetX = stationaryPiece.x + matchingPointsStationary.x - matchingPointsMoved.x - movedPiece.x;
//   const offsetY = stationaryPiece.y + matchingPointsStationary.y - matchingPointsMoved.y - movedPiece.y;

//   // Obtenez le groupe ou créez-en un si nécessaire
//   let group = movedPiece.groupId ? groups.value.find(g => g.id === movedPiece.groupId) : addToGroup(movedPiece, stationaryPiece);
  
//   // Ajustez les positions de toutes les pièces dans le groupe
//   group.pieces.forEach(piece => {
//     piece.x += offsetX;
//     piece.y += offsetY;
//   });
// };









const snapPieces = (movedPiece, stationaryPiece) => {
  const matchingPoints = movedPiece.attachmentPoints.find(point => point.matchId === stationaryPiece.id);
  if (!matchingPoints) return;

  const pointStationary = stationaryPiece.attachmentPoints.find(point => point.matchId === movedPiece.id);
  if (!pointStationary) return;

  movedPiece.x = stationaryPiece.x + pointStationary.x - matchingPoints.x;
  movedPiece.y = stationaryPiece.y + pointStationary.y - matchingPoints.y;
  addToGroup(movedPiece, stationaryPiece);
};

const groups = ref([]);

// Exemple de création d'un groupe
const addToGroup = (pieceToAdd, targetPiece) => {
  let groupToAdd = pieceToAdd.groupId ? groups.value.find(g => g.id === pieceToAdd.groupId) : null;
  let targetGroup = targetPiece.groupId ? groups.value.find(g => g.id === targetPiece.groupId) : null;

  if (groupToAdd && targetGroup) {
    // Si les deux pièces appartiennent à des groupes différents, fusionnez-les
    if (groupToAdd !== targetGroup) {
      // Fusionner les pièces de groupToAdd dans targetGroup
      groupToAdd.pieces.forEach(p => {
        if (!targetGroup.pieces.includes(p)) {
          targetGroup.pieces.push(p);
          p.groupId = targetGroup.id;
        }
      });

      // Supprimer l'ancien groupToAdd
      const indexToRemove = groups.value.indexOf(groupToAdd);
      if (indexToRemove !== -1) {
        groups.value.splice(indexToRemove, 1);
      }
    }
  } else if (groupToAdd || targetGroup) {
    // Si une des pièces est dans un groupe, ajoutez l'autre pièce à ce groupe
    let existingGroup = groupToAdd || targetGroup;
    if (!existingGroup.pieces.includes(pieceToAdd)) {
      existingGroup.pieces.push(pieceToAdd);
      pieceToAdd.groupId = existingGroup.id;
    }
    if (!existingGroup.pieces.includes(targetPiece)) {
      existingGroup.pieces.push(targetPiece);
      targetPiece.groupId = existingGroup.id;
    }
  } else {
    // Si aucune des pièces n'est dans un groupe, créez un nouveau groupe
    let newGroup = { id: groups.value.length + 1, pieces: [pieceToAdd, targetPiece] };
    pieceToAdd.groupId = newGroup.id;
    targetPiece.groupId = newGroup.id;
    groups.value.push(newGroup);
  }
  console.log(groups.value)
};


const DISTANCE_POINTS = 50; // Seuil de proximité en pixels

const isCloseEnough = (piece1, piece2) => {
  return piece1.attachmentPoints.some(point1 => {
    if (point1.matchId !== piece2.id) return false;
    const point1Absolute = { x: piece1.x + point1.x, y: piece1.y + point1.y };
    return piece2.attachmentPoints.some(point2 => {
      const point2Absolute = { x: piece2.x + point2.x, y: piece2.y + point2.y };
    //   const distance = Math.sqrt(Math.pow(point2Absolute.x - point1Absolute.x, 2) + Math.pow(point2Absolute.y - point1Absolute.y, 2));
      const distanceX = Math.pow(point2Absolute.x - point1Absolute.x, 2);
      const distanceY = Math.pow(point2Absolute.y - point1Absolute.y, 2);

    //   if (distanceX < DISTANCE_POINTS && distanceY < DISTANCE_POINTS){
    //     addToGroup(piece1, piece2);
    //   }
      return distanceX < DISTANCE_POINTS && distanceY < DISTANCE_POINTS;
    });
  });
};
// const myObserver = new ResizeObserver(entries => {
//     displayedWidth.value = entries[0].contentRect.width;
//     scaleFactor.value = displayedWidth.value / originalSize;
//     pieces.value.forEach(piece => {
//         piece.width = piece.originalWidth * scaleFactor.value;
//         piece.height = piece.originalHeight * scaleFactor.value;
//         piece.x *= scaleFactor.value;
//         piece.y *= scaleFactor.value;
//     });
    
// });

// const onImageLoad = () => {
//   displayedWidth.value = puzzleImage.value.clientWidth;
//   myObserver.observe(puzzleImage.value);
// };

onMounted(async () => {
  try {
    const response = await fetch('http://localhost:5002/api/getPieces');
    const puzzleData = await response.json();
    document.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    pieces.value = puzzleData;
    pieces.value.forEach(piece => {
        piece.width = piece.width * scaleFactor.value;
        piece.height = piece.height * scaleFactor.value;
        // piece.x *= scaleFactor.value;
        // piece.y *= scaleFactor.value;
        piece.attachmentPoints.forEach(attachmentPoint => {
            attachmentPoint.x *= scaleFactor.value;
            attachmentPoint.y *= scaleFactor.value;
        });
    });
    console.log(pieces.value);
  } catch (error) {
    console.error('Erreur lors du chargement des données du puzzle:', error);
  }
});

</script>

<!-- <template>
    <div class="h-full">
        <div class="bg-cover h-full bg-[url('../assets/gragas2.jpeg')]">

        </div>
    </div>
</template> -->
<template>
    <img class="puzzle-background" :src="backgroundImage" alt="Puzzle Background" ref="puzzleImage" @load="onImageLoad"/>
    <div class="puzzle-container">
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
  width: 800px; /* ou la largeur souhaitée */
  height: 800px; /* ou la hauteur souhaitée */
  border: 2px solid;
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
</style>
