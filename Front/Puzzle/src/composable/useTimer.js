import { ref, onUnmounted } from 'vue';

export function useTimer() {
  let timer = null;
  const gameTime = ref(0);

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
    //   timer = null;
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  return { gameTime, startTimer, stopTimer, formatTime };
}
