<template>
  <div class="container">
    <div
      class="search-wrapper sticky top-0 bg-white px-3.75 pb-3.75 pt-5 text-footer dark:bg-black"
    >
      <div class="search relative flex w-full items-center">
        <div class="icon-wrapper absolute left-1 p-1.5">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <path
                d="M4.92926182,4.43309524 C7.5052251,1.85713196 11.6829004,1.85834556 14.2603607,4.43580588 C16.6839335,6.85937868 16.8297062,10.6977887 14.6969054,13.2890629 L17.8535358,16.4483686 C18.0484555,16.6438126 18.0484555,16.9602367 17.8535358,17.1556807 L17.7776353,17.2316253 C17.604302,17.4054245 17.3349035,17.4248082 17.1399984,17.289871 L17.070734,17.232036 L17.070734,17.2316253 L13.9239066,14.0833736 C11.3325723,16.3380487 7.39916198,16.2313836 4.93197246,13.7641941 C2.35451214,11.1867338 2.35329854,7.00905853 4.92926182,4.43309524 Z M13.4123254,5.28384118 C11.3034942,3.17501 7.88539628,3.17401706 5.77778996,5.28162338 C3.67018364,7.3892297 3.67117658,10.8073276 5.78000776,12.9161588 C7.88883893,15.02499 11.3069369,15.0259829 13.4145432,12.9183766 C13.4695242,12.8633956 13.5230703,12.8075227 13.5751814,12.7508045 C13.6010889,12.7226086 13.6267662,12.6940624 13.6520853,12.665311 L13.5751814,12.7508045 C13.626104,12.6953799 13.6756564,12.6391481 13.7238386,12.5821525 L13.6520853,12.665311 C13.70224,12.6083573 13.7509893,12.5505985 13.7983333,12.4920795 L13.7238386,12.5821525 C15.5164394,10.4616497 15.4123853,7.28390106 13.4123254,5.28384118 Z"
                stroke="#AAAAAA"
                stroke-width="0.2"
                fill="#AAAAAA"
              ></path>
            </g>
          </svg>
        </div>
        <input
          type="search"
          placeholder="搜索书名、作者、分类、ISBN"
          class="flex-1 rounded border-0 bg-search-input py-2.25 pl-9 pr-4 outline-none dark:bg-darkbg"
          value=""
        />
      </div>
    </div>
    <loading v-if="loading" />
    <div class="error" v-else-if="error">{{ error }}</div>
    <div class="categories-wrapper p-2.5" v-else>
      <section
        class="category mb-2.5 leading-category"
        v-for="category in categories"
        :key="category.id"
      >
        <div class="title-wrapper p-2.5 text-elc font-medium">
          {{ category.name }}
        </div>
        <div
          class="items-wrapper m-2.5 flex flex-wrap border-b-0.5 border-menu dark:border-darkborder"
        >
          <div
            class="category-item mb-5 w-5/12 flex-grow"
            v-for="subCat in category.subCategory"
            :key="subCat.id"
          >
            <router-link
              :to="'/categories/' + subCat.id"
              :style="{ color: category.themeColor }"
            >
              <div class="text-base font-normal">{{ subCat.name }}</div>
            </router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from "@vue/apollo-composable";
import { computed } from "vue";
import Loading from "../components/Loading/Loading.vue";
import { GET_TOP_CATEGORIES } from "../graphql/schema";
const { result, loading, error } = useQuery(GET_TOP_CATEGORIES);
const categories = computed(() => result.value.topCategories);
</script>

<style scoped>
.category:last-child .items-wrapper {
  border-bottom: none;
}
</style>
