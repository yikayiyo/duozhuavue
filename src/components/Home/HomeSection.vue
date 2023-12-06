<template>
  <div class="home-section-wrapper" ref="scrollComponent">
    <OcListSkeleton v-if="collectionLoading"></OcListSkeleton>
    <div class="text-label" v-else-if="collectionError">
      {{ collectionError }}
    </div>
    <div class="oc-wrapper" v-else>
      <router-link to="/open-collections" class="oc-header-wrapper">
        <div class="oc-header flex items-center p-3.75">
          <div class="oc-header-title flex-grow">
            <h2 class="text-xl font-medium leading-hsh">书单</h2>
          </div>
          <div
            class="oc-header-details flex flex-shrink-0 items-center text-hsh text-sold-out"
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
      <div
        class="oc-list-wrapper scrollbar-hidden mx-3.75 -mb-8.75 flex overflow-x-auto pb-8.75"
      >
        <oc-list-item
          v-for="collection of collections"
          :collection="collection"
          :key="collection.id"
        ></oc-list-item>
        <router-link to="/open-collections">
          <div
            class="flex h-oc-item w-oc-item flex-col items-center justify-center rounded-oc-item bg-red-400 text-is-active"
          >
            <span class="flex items-center text-lg font-medium">
              看全部书单
              <svg
                class="inline"
                width="7"
                viewBox="0 0 13 24"
                xmlns="http://www.w3.org/2000/svg"
                style="margin-left: 7px"
              >
                <g
                  fill="currentColor"
                  transform="translate(-707.000000, -346.000000)"
                >
                  <path
                    d="M720.039467,358 C720.054396,357.701471 719.947859,357.398 719.719857,357.169998 L719.719857,357.169998 L708.870845,346.320986 L708.870845,346.320986 C708.442863,345.893005 707.748968,345.893005 707.320986,346.320986 C706.893005,346.748968 706.893005,347.442863 707.320986,347.870845 L717.450141,358 L707.320986,368.129155 C706.893005,368.557137 706.893005,369.251032 707.320986,369.679014 C707.748968,370.106995 708.442863,370.106995 708.870845,369.679014 L719.719857,358.830002 L719.719857,358.830002 C719.947859,358.602 720.054396,358.298529 720.039467,358 Z"
                  />
                </g>
              </svg>
            </span>
            <span class="text-shiwu">{{ collections.length }}个</span>
          </div>
        </router-link>
      </div>
    </div>
    <FeedSkeleton v-if="categoryNetworkStatus === 1" />
    <div class="text-label" v-else-if="categoryFeedError">
      {{ categoryFeedError }}
    </div>
    <div v-else class="feed-content-wrapper mt-2.5 bg-menu dark:bg-darkbg">
      <feed
        v-for="category of categories"
        :key="category.id"
        :category="category"
        :loadMoreBooks="loadMoreBooks"
      />
      <div
        class="load-more-category feed-footer border-t-0.5 border-menu pb-15 text-center text-footer dark:border-none"
        v-if="hasNextPage && categoryNetworkStatus === 7"
        @click="loadMoreCategories"
      >
        加载更多分类
      </div>
      <div
        class="load-more-category feed-footer border-t-0.5 border-menu pb-15 text-center text-footer dark:border-none"
        v-else-if="hasNextPage && categoryNetworkStatus === 3"
      >
        <loading />
      </div>
      <div
        class="load-more-category feed-footer border-t-0.5 border-menu pb-15 text-center text-footer dark:border-none"
        v-else
      >
        都在这里了-0-
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from "@/components/Loading/Loading.vue";
import FeedSkeleton from "@/components/Skeleton/FeedSkeleton.vue";
import OcListSkeleton from "@/components/Skeleton/OcListSkeleton.vue";
import {
  GET_BOOKS_FROM_CATEGORY,
  GET_CATEGORY_FEED,
  GET_COLLECTIONS,
} from "@/graphql/schema";
import useLoggedInUserId from "@/hooks/useLoggedInUserId";
import { useQuery } from "@vue/apollo-composable";
import { onMounted, onUnmounted } from "@vue/runtime-core";
import { computed, ref } from "vue";
import Feed from "./Feed.vue";
import OcListItem from "./OcListItem.vue";
//获取书单数据
const {
  result: collectionsResult,
  loading: collectionLoading,
  error: collectionError,
} = useQuery(GET_COLLECTIONS);
const collections = computed(() => collectionsResult.value.collections ?? []);
// 获取书籍分类数据
const after = ref("");
const first = ref(1); // 一次加载一个分类
const userId = useLoggedInUserId();
const {
  result: categoryFeedResult,
  error: categoryFeedError,
  fetchMore,
  networkStatus: categoryNetworkStatus,
} = useQuery(
  GET_CATEGORY_FEED,
  () => ({
    after: after.value,
    first: first.value,
    itemsAfter: "",
    itemsFirst: 3,
    userId,
  }),
  {
    notifyOnNetworkStatusChange: true,
  },
);

const categoryFeed = computed(() => categoryFeedResult.value?.categoryFeed, {});

const cursor = computed(() => categoryFeed.value.pageInfo.endCursor);
const hasNextPage = computed(() => categoryFeed.value.pageInfo.hasNextPage);
// const categoryEdges = computed(() => categoryFeed.value.edges);
const categories = computed(() => {
  return categoryFeed.value.edges.map((edge) => edge.node);
});

const loadMoreBooks = (categoryId, itemCursor) => {
  fetchMore({
    query: GET_BOOKS_FROM_CATEGORY,
    variables: {
      categoryId,
      after: itemCursor,
      userId,
    },
  });
};

const loadMoreCategories = function () {
  if (hasNextPage.value) {
    fetchMore({
      variables: {
        after: cursor.value,
      },
    });
  }
};

// 滚动加载书籍分类
const scrollComponent = ref(null);

const handleScroll = (e) => {
  let element = scrollComponent.value;
  if (element.getBoundingClientRect().bottom <= window.innerHeight) {
    loadMoreCategories();
  }
  // console.log('视口高度 window.innerHeight: ',window.innerHeight);
  // console.log('元素相对于视口的位置 element.getBoundingClientRect().bottom: ', element.getBoundingClientRect().bottom);
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
