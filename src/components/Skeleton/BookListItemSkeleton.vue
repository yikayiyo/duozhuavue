<template>
  <div
    class="book-list-item-wrapper relative overflow-hidden flex px-3.75 py-4.5"
    :class="shimmer"
  >
    <div
      class="image-wrapper w-22.5 h-32 shadow-book-list-item-image bg-gray-200 dark:bg-darkbg dark:border-darkborder"
    ></div>
    <div class="content ml-3 mr-3 flex-1 flex flex-col">
      <div class="content-top flex-1 flex">
        <div class="content-left flex-1 flex flex-col">
          <h3
            class="book-name h-10 rounded bg-gray-200 dark:bg-darkbg my-bk-list-item-title"
          ></h3>
          <div
            class="book-author w-10 h-5 bg-gray-200 dark:bg-darkbg text-xs text-sold-out mt-1.25"
          ></div>
          <div
            class="douban-rating w-20 h-5 bg-gray-200 dark:bg-darkbg text-xs text-dbr mt-1.25"
          ></div>
        </div>
      </div>
      <div class="content-bottom mt-1.25 leading-category">
        <div class="price-wrapper flex items-center">
          <div class="price text-lg w-20 h-5 bg-gray-200 dark:bg-darkbg"></div>
          <span
            class="discount w-20 h-5 bg-gray-200 dark:bg-darkbg ml-1.25 px-1.5 rounded"
          ></span>
          <div
            class="bookmark w-7.5 h-7.5 rounded-99 bg-gray-200 dark:bg-darkbg ml-0.75"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import useShimmer from '../../hooks/useShimmer'

const shimmer = useShimmer()
</script>
