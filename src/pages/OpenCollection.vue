<template>
  <loading v-if="loading" />
  <div v-else-if="error" class="p-3.75">error</div>
  <div class="oc-wrapper" v-else>
    <div
      class="oc-header overflow-auto px-3.75 text-shiwu font-light leading-category text-white"
      :style="ocHeaderStyleObj"
    >
      <div class="top mb-20 mt-8">
        <router-link :to="'/users/' + collection.proposer.id">
          <div class="wrapper mb-3.5 flex items-center">
            <span
              class="h-9 box-border w-9 flex-shrink-0 overflow-hidden rounded-99 border border-menu bg-menu"
            >
              <img alt="user avatar" :src="collection.proposer.avatar" />
            </span>
            <div class="ml-2.5 max-w-oc">
              <div class="name flex text-base font-medium">
                <p
                  class="flex-1 overflow-hidden overflow-ellipsis whitespace-nowrap"
                >
                  {{ collection.proposer.name }}
                </p>
                <img
                  alt="客座鱼编"
                  :src="proposer_badge"
                  class="jsx-1779555337 ml-2 w-21 flex-shrink-0"
                />
              </div>
              <div class="desc text-xs">提案</div>
            </div>
          </div>
        </router-link>
        <h1 class="mb-4 text-3xl font-medium">
          {{ collection.name }}
        </h1>
        <span class="font-normal leading-1.6">{{
          collection.description
        }}</span>
      </div>
      <div class="bottom mb-7.5">
        <span>
          {{ collection.contributors.length }} 人推荐了
          {{ collection.items.length }} 本书
        </span>
      </div>
    </div>
    <div
      class="oc-nav sticky top-0 z-50 bg-white font-medium text-sold-out dark:bg-black"
    >
      <nav
        class="oc-nav-items flex h-12 items-center justify-between border-b-0.5 border-menu dark:border-darkborder"
      >
        <span
          class="popular relative flex items-center self-stretch text-is-active"
          >热门</span
        >
        <span class="latest flex items-center self-stretch">最新</span>
      </nav>
    </div>
    <div class="oc-content">
      <oc-item
        v-for="conb of collection.contributions"
        :conb="conb"
        :key="conb.id"
      ></oc-item>
    </div>
    <div
      class="footer flex justify-center py-12 text-footer text-gray-300 dark:text-darkborder"
    >
      <div class="flex items-center">
        <div class="w-10 border-t border-current"></div>
        <svg
          width="12"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          class="mx-2.25 rotate-45 transform"
        >
          <rect x="4" y="4" width="16" height="16" class=""></rect>
        </svg>
        <div class="w-10 border-t border-current"></div>
      </div>
    </div>
    <oc-footer></oc-footer>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { computed } from "@vue/reactivity";
import { useRoute } from "vue-router";
import proposer_badge from "../assets/proposer_badge.png";
import Loading from "../components/Loading/Loading.vue";
import OcItem from "../components/MainSection/OcItem.vue";
import OcFooter from "../components/NavFooter/OcFooter.vue";
import { GET_COLLECTION } from "../graphql/schema";
const route = useRoute();
const { result, loading, error } = useQuery(GET_COLLECTION, {
	collectionId: route.params.id,
});
const collection = computed(() => result.value.collection);
const ocHeaderStyleObj = computed(() => {
	return {
		backgroundImage: `linear-gradient(
					to top,
					${collection.value.maskColor + "99"},
					${collection.value.maskColor} 56%
				), url(${collection.value.image})`,
		backgroundSize: `cover, cover`,
		backgroundPosition: `center top, center center`,
	};
});


</script>

<style scoped>
.oc-nav-items::after,
.oc-nav-items::before {
  display: block;
  content: "";
}
.dark .text-is-active {
  color: white;
}
</style>
