<script>
import useDark from "@/hooks/useDark";
import { provide } from "vue";
import Wrapper from "./components/Wrapper/Wrapper.vue";
export default {
  components: {
    Wrapper,
  },
  setup() {
    const { mode, toggleMode } = useDark();
    provide("isDark", mode);
    provide("toggleMode", toggleMode);
    return {
      mode,
    };
  },
};
</script>

<template>
  <div :class="mode === 'dark' ? 'dark' : ''">
    <div class="bg-gray-100 dark:bg-darkbg">
      <wrapper />
    </div>
  </div>
</template>

<style></style>
