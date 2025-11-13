import { ref, onMounted, onUnmounted } from "vue";

export default function useIsMounted() {
  const isMounted = ref(false);

  onMounted(() => {
    isMounted.value = true;
  });

  onUnmounted(() => {
    isMounted.value = false;
  });

  return isMounted;
}
