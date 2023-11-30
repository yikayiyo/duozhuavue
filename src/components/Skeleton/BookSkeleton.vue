<template>
  <div class="book-wrapper relative overflow-hidden pb-12.75" :class="shimmer">
    <div
      class="book-header flex flex-col items-center bg-gray-100 px-3.75 pb-7 pt-7.5 dark:bg-darkbg"
    >
      <div class="image h-50 w-37.5 bg-gray-200 dark:bg-gray-800"></div>
    </div>
    <div class="book-main mx-3.75 pt-4.5">
      <div class="book-info pb-3.75 leading-category">
        <h1 class="h-[28px] w-20 bg-gray-200 dark:bg-gray-800"></h1>
        <div
          class="subtitle mb-4.5 mt-0.75 h-[18px] w-10 bg-gray-200 text-hsh dark:bg-gray-800"
        ></div>
        <div
          class="price-wrapper mt-4.25 flex h-[32px] w-40 items-center bg-gray-200 dark:bg-gray-800"
        ></div>
        <div
          class="p-wrapper mt-3.5 h-[400px] w-80 bg-gray-200 dark:bg-gray-800"
        ></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import useShimmer from "@/hooks/useShimmer";
const shimmer = useShimmer();
</script>
