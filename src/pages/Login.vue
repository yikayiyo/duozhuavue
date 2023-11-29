<template>
  <div class="login-wrapper p-3.75 text-is-active">
    <div class="icon-wrapper mx-auto mt-20 w-1/3">
      <div class="icon"></div>
    </div>
    <form @submit.prevent="signIn" class="mx-auto flex max-w-3/4 flex-col">
      <input
        class="email dark:outline-none mt-8 rounded bg-menu py-3 pl-2 dark:bg-darkbg dark:text-menu"
        type="text"
        name="email"
        v-model="signInForm.email"
        @change="onInputChange"
        placeholder="邮箱"
      />
      <p class="py-1 text-xs text-red-600" v-if="signInForm.errors.email">
        {{ signInForm.errors.email }}
      </p>
      <input
        class="password dark:outline-none mt-4 rounded bg-menu py-3 pl-2 dark:bg-darkbg dark:text-menu"
        type="password"
        name="password"
        v-model="signInForm.password"
        @change="onInputChange"
        placeholder="密码"
      />
      <p class="py-1 text-xs text-red-600" v-if="signInForm.errors.password">
        {{ signInForm.errors.password }}
      </p>
      <button
        class="login mt-8 rounded-full border bg-load px-9 py-2.25 text-lg font-medium text-white shadow dark:border-darkborder"
        v-if="!signInLoading"
        type="submit"
      >
        登录
      </button>
      <button
        class="loading mt-8 rounded-full border bg-load px-9 py-2.25 text-lg font-medium text-white shadow dark:border-darkborder dark:bg-black"
        v-else
        type="submit"
        disabled
      >
        <Loading />
      </button>
    </form>
    <div class="signup mx-auto max-w-3/4">
      <button
        class="signup mt-8 w-full cursor-not-allowed rounded-full border px-9 py-2.25 text-lg font-medium text-load shadow-sm dark:border-darkborder dark:bg-darkbg"
        @click="toSignUpPage"
        disabled
      >
        注册
      </button>
    </div>
  </div>
</template>

<script setup>
import { useApolloClient, useMutation } from "@vue/apollo-composable";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Loading from "../components/Loading/Loading.vue";
import { CURRENT_USER, SIGN_IN_MUTATION } from "../graphql/schema";

const router = useRouter();
const { client } = useApolloClient();
const toast = useToast();
const signInForm = reactive({
  email: "admin@test.com",
  password: "duozhuavue",
  errors: {
    email: "",
    password: "",
  },
});
const {
  mutate: signInMutation,
  loading: signInLoading,
  onError,
  onDone,
} = useMutation(SIGN_IN_MUTATION, () => ({
  variables: {
    email: signInForm.email,
    password: signInForm.password,
  },
}));

const toSignUpPage = () => {
  console.log("click signUp");
  // goto signup page
};

onError(({ message }) => {
  console.log(message);
  toast.error(message);
});
// 登录成功时，跳转到主页，更新本地状态
onDone(
  ({
    data: {
      signIn: { id, token },
    },
  }) => {
    toast.success("login successfully.");
    client.writeQuery({
      query: CURRENT_USER,
      data: {
        currentUser: {
          id,
          token,
        },
      },
    });
    router.push("book");
  },
);

const onInputChange = () => {
  signInForm.errors.email = "";
  signInForm.errors.password = "";
};
const validateEmail = (email) => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const validateForm = () => {
  if (!signInForm.email) {
    signInForm.errors.email = "请输入邮箱地址";
  }
  if (!signInForm.password) {
    signInForm.errors.password = "请输入密码";
  }
  if (signInForm.email && !validateEmail(signInForm.email)) {
    signInForm.errors.email = "请输入有效的邮箱地址";
  }
};
const signIn = () => {
  validateForm();
  if (signInForm.errors.email || signInForm.errors.password) {
    return;
  } else {
    signInMutation();
  }
};
</script>

<style scoped>
.icon {
  padding-top: 100%;
  background-image: url("../assets/login.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
