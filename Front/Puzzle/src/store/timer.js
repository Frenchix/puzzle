import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTimerStore = defineStore('timer', () => {
    const timer = ref()
    const gameTime = ref(0);

    function initTimer() {
      this.timer = null;
      this.gameTime = 0;
    }

    function startTimer() {
      if (!this.timer) {
        this.timer = setInterval(() => {
          this.gameTime++;
        }, 1000);
      }
    }
  
    function stopTimer() {
      if (this.timer) {
        clearInterval(this.timer);
        // this.timer = null;
      }
    }

    return { timer, gameTime, startTimer, stopTimer, initTimer }
  })