import { ref, onUnmounted } from 'vue';
import { useUserStore } from '@/store/user'
import { storeToRefs } from 'pinia'

export function useTimer() {
//   let timer = null;
    const store = useUserStore();
    const { timer } = storeToRefs(store);
  const gameTime = ref(0);

  function startTimer() {
    if (!timer.value) {
      timer.value = setInterval(() => {
        gameTime.value++;
      }, 1000);
    }
  }

  function stopTimer() {
    if (timer.value) {
      clearInterval(timer.value);
    //   timer = null;
    }
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  onUnmounted(() => {
    if (timer.value) {
      clearInterval(timer.value);
    }
  });

  return { gameTime, startTimer, stopTimer, formatTime };
}
