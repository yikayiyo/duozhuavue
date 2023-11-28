<template>
  <div
    class="relative overflow-hidden w-oc-item flex-shrink-0 h-oc-item mr-2.625 rounded-oc-item text-hsh bg-gray-100 shadow-sm"
    :class="shimmer"
  >
    <div class="inner block box-border p-3 relative h-full">
      <h3
        class="title w-full h-10 mb-oc-title leading-oc-title text-lg font-medium line-clamp-3 bg-gray-200"
      ></h3>
      <span
        class="inline-block w-20 h-5 bg-gray-200 text-cbl align-middle font-light"
      ></span>
      <div class="media flex items-center absolute bottom-4 max-w-full">
        <span
          class="block bg-gray-200 media-avatar-wrapper w-7.5 h-7.5 rounded-99 overflow-hidden"
        >
        </span>
        <div
          class="content w-16 h-10 bg-gray-200 flex flex-col max-w-full ml-1.5 pr-4 overflow-hidden"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const shimmer = ref(
  'before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent'
)
</script>
