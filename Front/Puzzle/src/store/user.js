import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
    const userName = ref()
    const userMail = ref()
    const emailVerified = ref()
    const provider = ref()
    const uid = ref()
    const bestScore = ref(0)
    const timer = ref()
    
    function updateUser(userName, userMail, emailVerified, provider, uid) {
      this.userName = userName;
      this.userMail = userMail;
      this.emailVerified = emailVerified;
      this.provider = provider;
      this.uid = uid
    }

    function logout() {
        this.userName = ''
        this.userMail = ''
        this.emailVerified = ''
        this.provider = ''
        this.uid = ''
        this.bestScore = 0
    }

    return { userName, userMail, emailVerified, provider, uid, updateUser, logout, bestScore, timer }
  })