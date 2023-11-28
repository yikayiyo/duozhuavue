<script>
import { ref, provide } from 'vue'
import Wrapper from './components/Wrapper/Wrapper.vue'
export default {
  components: {
    Wrapper
  },
  setup() {
    const isDark = ref(false)
    const toggleMode = () => {
      isDark.value = !isDark.value
    }
    provide('isDark', isDark)
    provide('toggleMode', toggleMode)
    return {
      isDark
    }
  }
}
</script>

<template>
  <div :class="isDark ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-darkbg">
      <wrapper />
    </div>
  </div>
</template>

<style></style>
