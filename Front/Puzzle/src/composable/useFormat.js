import { ref, onUnmounted } from 'vue';
// import { useUserStore } from '@/store/user'
// import { storeToRefs } from 'pinia'

export function useFormat() {
  // let timer = null;
    // const store = useUserStore();
    // const { timer } = storeToRefs(store);
  // const gameTime = ref(0);

  // function startTimer() {
  //   if (!timer) {
  //     timer = setInterval(() => {
  //       gameTime.value++;
  //     }, 1000);
  //   }
  // }

  // function stopTimer() {
  //   if (timer) {
  //     clearInterval(timer);
  //   //   timer = null;
  //   }
  // }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  }

  // onUnmounted(() => {
  //   console.log("timer", timer)
  //   if (timer) {
  //     clearInterval(timer);
  //   }
  // });

  return { formatTime };
}
