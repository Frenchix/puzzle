import { createUserWithEmailAndPassword, deleteUser, signOut, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";
import { auth } from '../database/firebase'
import { useUserStore } from '../store/user'

// export function createUser(email, password, pseudo) {
//     return new Promise((resolve, reject) => {
//         createUserWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 // Signed in 
//                 const user = userCredential.user;
//                 updateProfile(auth.currentUser, {
//                     displayName: pseudo
//                   }).then(() => {
//                     resolve();
//                   }).catch((error) => {
//                     deleteUser(auth.currentUser).then(() => {
//                         // User deleted.
//                       }).catch((error) => {
//                         // An error ocurred
//                         // ...
//                       });
//                     reject(error);
//                   });
//             })
//             .catch((error) => {
//                 reject(error);
//             });
//      });
// }

export function logoutUser(){
    const store = useUserStore();
    const { logout } = store;
    return new Promise((resolve, reject) => {
        signOut(auth).then(() => {
            // Sign-out successful.
            logout();
            resolve();
        }).catch((error) => {
            // An error happened.
            reject();
        });
    });
}

export function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    const store = useUserStore();
    const { updateUser } = store;
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                updateUser(user.displayName,'','','','');
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                resolve();
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
                reject();
            });
     });
}