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

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer);
    }
  });

  return { gameTime, startTimer, stopTimer };
}
