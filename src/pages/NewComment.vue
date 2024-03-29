<template>
  <div class="comment-wrapper p-0.8em text-is-active dark:text-menu">
    <form @submit.prevent="addComment()">
      <router-link class="flex flex-col items-center" :to="'/books/' + bookId">
        <h1 class="book-title mb-5 text-xl">给「 {{ book.title }} 」评分</h1>
        <div class="book-image-wrapper h-39 w-27.5 bg-menu">
          <div class="image h-full w-full" :style="imgStyle"></div>
        </div>
      </router-link>
      <div class="comment-rating mb-6.25 mt-7.5 flex flex-col items-center">
        <p class="mb-2.5 text-shiwu text-load" v-if="rating === 0">
          * 根据书的内容来打分哦 *
        </p>
        <p class="mb-2.5 text-shiwu text-load" v-else-if="rating === 2">
          不要看 😡
        </p>
        <p class="mb-2.5 text-shiwu text-load" v-else-if="rating === 4">
          不太好看 😑
        </p>
        <p class="mb-2.5 text-shiwu text-load" v-else-if="rating === 6">
          还可以 🙂
        </p>
        <p class="mb-2.5 text-shiwu text-load" v-else-if="rating === 8">
          好看！👍
        </p>
        <p class="mb-2.5 text-shiwu text-load" v-else>非常好看！❤️</p>
        <div class="rating flex">
          <span
            class="mx-1.25"
            v-for="idx in 5"
            :key="idx"
            @click="changeRating(idx)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="34"
              height="32"
              viewBox="0 0 13 12"
              :color="idx * 2 <= rating ? '#497749' : '#f2f2f2'"
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M6.15740527,10.6826336 L3.04530674,11.9566366 C2.65794378,12.1148978 2.23570873,11.8185976 2.27246579,11.4141522 L2.56463737,8.16012531 C2.58537213,7.93152574 2.50903052,7.7038054 2.35257736,7.53059727 L0.136785824,5.06348041 C-0.13842095,4.75662945 0.0227446608,4.27744959 0.431784867,4.18600976 L3.72484127,3.44833654 C3.95669356,3.39646203 4.15650121,3.2566646 4.27996727,3.05971728 L6.02262934,0.261131044 C6.2394018,-0.0870436812 6.76154068,-0.0870436812 6.97831314,0.261131044 L8.72097522,3.05971728 C8.84349879,3.2566646 9.04330644,3.39646203 9.27515873,3.44833654 L12.5682151,4.18600976 C12.9772553,4.27744959 13.138421,4.75662945 12.8632142,5.06348041 L10.6474226,7.53059727 C10.491912,7.7038054 10.4155704,7.93152574 10.4363051,8.16012531 L10.7284767,11.4141522 C10.7642913,11.8185976 10.3420562,12.1148978 9.95469326,11.9566366 L6.84259473,10.6826336 C6.6239373,10.5929522 6.3760627,10.5929522 6.15740527,10.6826336 Z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <section
        class="mb-3.75 w-full border-0.5 border-search-input dark:border-black"
      >
        <textarea
          name="reason"
          placeholder="一些阅读感受"
          class="h-30 w-full resize-none bg-search-input p-2.25 text-sm outline-none dark:bg-darkbg"
          v-model="content"
        >
        </textarea>
      </section>
      <div class="some-info mb-7.5 text-center text-hsh text-sold-out">
        <span>* 如果买到的书品相不符或疑似盗版，请联系客服处理。 *</span>
      </div>
      <div class="fixed bottom-0 left-0 right-0 z-10 mx-auto max-w-dzy">
        <div class="submit-section w-full px-5 pb-5 pt-2.5">
          <button
            class="w-full rounded-full border bg-load px-9 py-2.25 text-shiwu font-medium text-white shadow"
            v-if="addCommentLoading"
          >
            <Loading />
          </button>
          <button
            class="w-full rounded-full border bg-load px-9 py-2.25 text-shiwu font-medium text-white shadow dark:border-darkbg"
            v-else
            type="submit"
          >
            确定
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { useMutation, useQuery } from "@vue/apollo-composable";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Loading from "../components/Loading/Loading.vue";
import { ADD_COMMENT_MUTATION, GET_BOOK } from "../graphql/schema";
import useLoggedInUserId from "../hooks/useLoggedInUserId";

export default {
  name: "NewComment",
  components: {
    Loading,
  },
  setup() {
    const rating = ref(0);
    const content = ref("");
    const router = useRouter();

    // get book image
    const route = useRoute();
    const { bookId } = route.query;
    const { result: bookResult } = useQuery(GET_BOOK, () => ({
      bookId,
    }));
    const book = computed(() => bookResult.value.book ?? {});
    const imgStyle = computed(() => {
      return {
        backgroundImage: `url(${book.value.image})`,
        boxShadow: `rgb(0 0 0 / 0.2) 0px 0px 8px 0px`,
        backgroundPosition: `center center`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    });

    const changeRating = (idx) => {
      rating.value = idx * 2;
    };
    // get current user
    const userId = useLoggedInUserId();
    const toast = useToast();
    // console.log("userId: ", userId);
    const {
      mutate: addComment,
      loading: addCommentLoading,
      onDone,
      onError,
    } = useMutation(ADD_COMMENT_MUTATION, () => ({
      variables: {
        bookId,
        userId,
        content: content.value,
        created: new Date().toISOString(),
        rating: rating.value,
      },
    }));

    onDone(({ data: { addComment } }) => {
      toast.success(addComment.message);
      // router.go(-1);
      // todo: when go back, book page should scroll to specific section
      router.replace("/books/" + bookId + "?target=book-comment-wrapper");
      rating.value = 0;
      content.value = "";
    });

    onError(({ message }) => {
      toast.error(message);
    });

    return {
      book,
      rating,
      content,
      bookId,
      imgStyle,
      changeRating,
      addComment,
      addCommentLoading,
    };
  },
};
</script>
