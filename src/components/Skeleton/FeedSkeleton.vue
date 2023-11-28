<template>
  <div class="feed-section relative mt-6.25">
    <div
      class="title-wrapper w-20 h-5.5 ml-3.75 bg-gray-100 dark:bg-darkbg"
    ></div>
    <div class="book-list-wrapper w-full h-[200px]">
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
      <BookListItemSkeleton />
    </div>
  </div>
</template>
<script setup>
import BookListItemSkeleton from './BookListItemSkeleton.vue'
</script>
