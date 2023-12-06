<template>
  <div
    class="comment-wrapper h-screen p-0.8em text-is-active dark:text-menu"
    :style="showModal ? blurStyle : ''"
  >
    <form @submit.prevent="updateComment">
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
          class="h-30 w-full resize-none bg-search-input p-2.25 text-sm focus:outline-rating dark:bg-darkbg"
          v-model="content"
        >
        </textarea>
      </section>
      <div class="some-info mb-7.5 text-center text-hsh text-sold-out">
        <span v-if="commentId === ''"
          >* 如果买到的书品相不符或疑似盗版，请联系客服处理。 *</span
        >
        <span v-else> {{ commentString }} 评分 · </span>
        <span class="text-is-active dark:text-menu" @click="tryDeleteComment"
          >删除评分和评论</span
        >
      </div>
      <div class="absolute bottom-0 left-0 right-0 z-10 mx-auto max-w-dzy">
        <div class="submit-section w-full px-5 pb-5 pt-2.5">
          <button
            class="w-full rounded-full border bg-load px-9 py-2.25 text-shiwu font-medium text-white shadow"
            v-if="isUpdating"
            :disabled="isUpdating"
          >
            <Loading />
          </button>
          <button
            v-else
            class="w-full rounded-full border bg-load px-9 py-2.25 text-shiwu font-medium text-white shadow dark:border-darkborder"
            type="submit"
          >
            确定
          </button>
        </div>
      </div>
    </form>
  </div>
  <div
    class="modal-wrapper fixed inset-0 z-20 flex items-center justify-center bg-layer"
    v-show="showModal"
    @click="showModal = false"
  >
    <div class="modal absolute rounded-xl bg-white dark:bg-black">
      <h1 class="my-6.75 px-5.5 text-center">确定要删除吗？</h1>
      <div class="buttons my-6.75 flex justify-around px-5.5 leading-category">
        <button
          class="w-33.75 rounded-99 border-0.5 py-1.5 text-shiwu dark:border-darkborder"
          @click.stop="showModal = !showModal"
        >
          取消
        </button>
        <button
          class="w-33.75 rounded-99 border-0.5 bg-load py-1.5 text-shiwu text-white dark:border-darkborder"
          @click="deleteComment"
        >
          确定
        </button>
      </div>
    </div>
  </div>
  <div class="layer absolute inset-0 z-10 blur filter" v-if="showModal"></div>
</template>

<script>
import { useMutation, useQuery } from "@vue/apollo-composable";
import { computed, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Loading from "../components/Loading/Loading.vue";
import {
  DELETE_COMMENT_MUTATION,
  GET_BOOK,
  GET_COMMENT,
  UPDATE_COMMENT_MUTATION,
} from "../graphql/schema";

export default {
  name: "Comment",
  components: {
    Loading,
  },
  setup() {
    const rating = ref(0);
    const content = ref("");
    const showModal = ref(false);

    const router = useRouter();

    const route = useRoute();
    const { bookId, commentId } = route.query;

    const { result: bookResult } = useQuery(GET_BOOK, () => ({
      bookId,
    }));
    const book = computed(() => bookResult.value.book ?? {});

    const { result: commentResult } = useQuery(GET_COMMENT, () => ({
      commentId,
    }));
    const comment = computed(() => commentResult.value?.comment ?? {});
    const commentRating = computed(() => comment.value?.rating ?? 0);
    const commentContent = computed(() => comment.value?.content ?? "");
    const commentDate = computed(() => comment.value?.createdAt ?? "");
    watch(
      commentRating,
      (newV, oldV) => {
        rating.value = newV;
      },
      {
        immediate: true,
      },
    );
    watch(
      commentContent,
      (newV, oldV) => {
        content.value = newV;
      },
      {
        immediate: true,
      },
    );
    const imgStyle = computed(() => {
      return {
        backgroundImage: `url(${book.value.image})`,
        boxShadow: `rgb(0 0 0 / 0.2) 0px 0px 8px 0px`,
        backgroundPosition: `center center`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      };
    });
    const blurStyle = computed(() => {
      return {
        filter: "blur(6px)",
      };
    });

    const commentString = computed(() => {
      return commentDate.value.split("T")[0];
    });
    const changeRating = (idx) => {
      rating.value = idx * 2;
    };
    const tryDeleteComment = () => {
      showModal.value = true;
    };

    const toast = useToast();

    const { mutate: deleteComment, onDone: onCommentDelete } = useMutation(
      DELETE_COMMENT_MUTATION,
      () => ({
        variables: {
          bookId,
          commentId,
        },
        update: (cache) => {
          // 删除cache中的该条comment
          const normalizedId = cache.identify({
            id: commentId,
            __typename: "Comment",
          });
          cache.evict({ id: normalizedId });
          cache.gc();
          // 更新cache中bookId的comments字段
          // 由字段策略决定，见/graphql/index.js中的cache.typePolicies
        },
      }),
    );
    onCommentDelete(({ data: { deleteComment } }) => {
      toast.success(deleteComment.message);
      router.go(-1);
    });

    const {
      mutate: updateComment,
      loading: isUpdating,
      onDone: onCommentUpdate,
    } = useMutation(UPDATE_COMMENT_MUTATION, () => ({
      variables: {
        commentId,
        rating: rating.value,
        content: content.value,
        updatedAt: new Date().toISOString(),
      },
    }));

    onCommentUpdate(({ data: { updateComment } }) => {
      if (updateComment.success) {
        content.value = "";
        rating.value = 0;
        toast.success(updateComment.message);
        router.go(-1);
      } else {
        toast.warning(updateComment.message);
      }
    });

    return {
      book,
      rating,
      content,
      showModal,
      bookId,
      commentId,
      commentString,
      imgStyle,
      blurStyle,
      changeRating,
      tryDeleteComment,
      deleteComment,
      updateComment,
      isUpdating,
      commentRating,
      commentContent,
    };
  },
};
</script>

<style scoped>
button:disabled {
  background-color: #859e85;
}
</style>
