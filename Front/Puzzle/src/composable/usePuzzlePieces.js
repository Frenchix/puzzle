import { ref, reactive } from 'vue';
// import { useTimer } from '../composable/useTimer';
import { useUserStore } from '@/store/user';
import { storeToRefs } from 'pinia';
import { useTimerStore } from '@/store/timer'
import socketService from '../composable/useSocketService';

// const { gameTime, startTimer, stopTimer, timer } = useTimer();
const showCompletionAnimation = ref(false);

export function usePuzzlePieces(id, nbPieces, duel, roomId) {
    const store = useTimerStore();
    const { gameTime } = storeToRefs(store);
    const { stopTimer, startTimer } = store;
    const pieces = ref([]);
    const groups = ref([]);
    const DISTANCE_POINTS = 50; // Seuil de proximité en pixels
    const selectedPiece = ref(null);
    const offset = reactive({ x: 0, y: 0 });

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
    const addToGroup = async (pieceToAdd, targetPiece) => {
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
        if(groups.value[0].pieces.length == nbPieces){
            const store = useUserStore();
            const { userName, bestScore } = storeToRefs(store);
            if(duel === "oui"){
                socketService.puzzleFinished(roomId, userName.value);
            } else {
                stopTimer();
                triggerCompletionAnimation();
                if (userName.value){
                    if (bestScore.value === 0 || gameTime.value < bestScore.value){
                        addScore(userName.value);
                    }
                }
            }
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

    function triggerCompletionAnimation() {
        showCompletionAnimation.value = true;
        
        // Optionnel : Masquer l'animation après un certain temps
        setTimeout(() => {
            showCompletionAnimation.value = false;
        }, 3000); // 3 secondes pour l'affichage de l'animation
      }
      
    async function addScore(userName) {
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: id,
                                    nbPieces: nbPieces,
                                    userName: userName,
                                    time: gameTime.value})
        };
        await fetch(`${import.meta.env.VITE_HOST_API}/addScore`, requestOptions);
    }

    function loadImage(src, piece, maxRetries = 3) {
        return new Promise((resolve, reject) => {
          const img = new Image();
          let attempts = 0;
      
          const load = () => {
              img.onload = () => {
                  piece.key = Date.now() + Math.random(); // Change la clé pour forcer le rerender
                  resolve(img);
              };
            img.onerror = () => {
              if (attempts < maxRetries) {
                attempts++;
                console.log(`Tentative de rechargement de l'image : ${src}, essai n° ${attempts}`);
                setTimeout(load, 1000); // Attente de 1 seconde avant de réessayer
              } else {
                //   hasError.value = true;
                //   errorMessage.value = "Erreur lors du chargement des pièces.";
                  reject(new Error(`Échec du chargement de l'image après ${maxRetries} tentatives : ${src}`));
              }
            };
            img.src = src;
          };
      
          load();
        });
      }

    return { pieces, gameTime, showCompletionAnimation, startDrag, onDrag, endDrag, loadImage, triggerCompletionAnimation };
}
