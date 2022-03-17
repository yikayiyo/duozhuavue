import { onMounted, onUnmounted, ref } from "vue";

export default function useWindowWidth() {
  const windowWidth = ref(window.innerWidth);
  const onWindowWidthChange = () => {
    windowWidth.value = window.innerWidth;
    // console.log(windowWidth.value);
  }
  onMounted(() => {
    window.addEventListener('resize', onWindowWidthChange);
  });
  onUnmounted(() => {
    window.removeEventListener('resize', onWindowWidthChange);
  });
  return windowWidth;
}