<template>
  <div
    class="relative mr-2.625 h-oc-item w-oc-item flex-shrink-0 rounded-oc-item border border-gray-300 bg-gray-100 text-hsh shadow-sm dark:border-darkborder dark:bg-black"
  >
    <div
      class="inner relative box-border block h-full overflow-hidden p-3"
      :class="shimmer"
    >
      <h3
        class="title mb-oc-title h-10 w-full bg-gray-200 text-lg font-medium leading-oc-title line-clamp-3 dark:bg-darkbg"
      ></h3>
      <span
        class="inline-block h-5 w-20 bg-gray-200 align-middle text-cbl font-light dark:bg-darkbg"
      ></span>
      <div class="media absolute bottom-4 flex max-w-full items-center">
        <span
          class="media-avatar-wrapper block h-7.5 w-7.5 overflow-hidden rounded-99 bg-gray-200 dark:bg-darkbg"
        >
        </span>
        <div
          class="content ml-1.5 flex h-10 w-16 max-w-full flex-col overflow-hidden bg-gray-200 pr-4 dark:bg-darkbg"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import useShimmer from "../../hooks/useShimmer";
const shimmer = useShimmer();
</script>
