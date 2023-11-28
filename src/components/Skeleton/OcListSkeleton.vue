<template>
  <div>
    <router-link
      to="/open-collections"
      class="oc-header-wrapper"
    >
      <div class="oc-header flex items-center p-3.75">
        <div class="oc-header-title flex-grow">
          <h2 class="text-xl font-medium leading-hsh">书单</h2>
        </div>
        <div
          class="oc-header-details flex items-center flex-shrink-0 text-hsh text-sold-out"
        >
          全部书单
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            xmlns="http://www.w3.org/2000/svg"
            class="w-hicon"
            style="margin-right: -4px"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </div>
    </router-link>
    <div class="oc-list-wrapper mx-3.75 flex overflow-x-auto pb-8.75 -mb-8.75">
      <OcListItemSkeleton />
      <OcListItemSkeleton />
    </div>
  </div>
</template>
<script setup>
import OcListItemSkeleton from './OcListItemSkeleton.vue'
</script>
