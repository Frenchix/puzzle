import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth";
import { onAuthStateChanged } from 'firebase/auth'
import { ref, onValue, getDatabase, set, onDisconnect } from "firebase/database";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE__FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_ID,
    databaseURL: import.meta.env.VITE_FIREBASE_DB_URL
  };

export const firebaseApp = initializeApp(firebaseConfig)
export const auth = getAuth(firebaseApp);


export function getCurrentUser() {
    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(
        auth,
        (user) => {
          unsubscribe()
          resolve(user)
        },
        reject
      )
    })
  }

  export function setupUserOnlineStatusTracking() {
    const db = getDatabase(firebaseApp);
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userStatusRef = ref(db, `users/${user.uid}/status`);

        // Référence à l'état de connexion de Firebase
        const connectedRef = ref(db, '.info/connected');
  
        onValue(connectedRef, (snapshot) => {
          if (snapshot.val() === true) {
            // L'utilisateur est connecté, mettre à jour le statut en 'online'
            set(userStatusRef, 'online');

            // Configurer une action à exécuter lorsque l'utilisateur se déconnecte
            onDisconnect(userStatusRef).set('offline');
          }
        });

      }
    });
  }
  
  // Fonction pour envoyer une requête de mise à jour de statut au serveur backend
  export function updateUserStatusOnServer(uid, status) {
    fetch(`${import.meta.env.VITE_HOST_API}/updateStatus`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ uid, status })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Erreur lors de la mise à jour du statut:', error));
  }