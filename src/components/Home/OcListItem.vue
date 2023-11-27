<template>
  <div
    class="flex-shrink-0 oc-item-wrapper w-oc-item h-oc-item text-oc-item mr-2.625 rounded-oc-item text-hsh dark:border-darkbg"
    :style="styleObj"
  >
    <router-link
      :to="linkTo"
      class="inner block box-border p-3 relative h-full"
    >
      <h3
        class="title mb-oc-title leading-oc-title text-lg font-medium line-clamp-3"
      >
        {{ collection.name }}
      </h3>
      <span class="text-cbl align-middle font-light">
        {{ collection.contributors.length }}人推荐了{{
          collection.items.length
        }}本书
      </span>
      <div class="media flex items-center absolute bottom-4 max-w-full">
        <span
          class="media-avatar-wrapper flex-shrink-0 box-border w-7.5 h-7.5 border border-menu rounded-99 overflow-hidden"
        >
          <img
            :src="collection.proposer.avatar"
            alt="user avatar
					"
            class="w-full"
          />
        </span>
        <div
          class="content flex flex-col max-w-full ml-1.5 pr-4 overflow-hidden"
        >
          <div
            class="name max-width-100% font-normal overflow-hidden overflow-ellipsis whitespace-nowrap text-footer"
          >
            {{ collection.proposer.name }}
          </div>
          <div class="desc text-xss font-light">客座鱼编</div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
const { collection } = defineProps({
  collection: {
    id: String,
    image: String,
    contributors: Array,
    items: Array,
    maskColor: String,
    proposer: {
      type: Object,
      default: () => ({ name: '', avatar: '' })
    }
  }
})

const styleObj = reactive({
  background: `linear-gradient(to top, ${collection.maskColor + 'CC'} 0%, ${
    collection.maskColor + '4D'
  } 35%, ${collection.maskColor} 59%) center top / auto no-repeat, url(${
    collection.image
  })center center / cover no-repeat`
})

const linkTo = ref('/open-collections/' + collection.id)
</script>

<style scoped></style>
