import { ref } from 'vue'
export default function useShimmer() {
  const shimmer = ref(
    'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 dark:before:via-white/10 before:to-transparent'
  )
  return shimmer
}
