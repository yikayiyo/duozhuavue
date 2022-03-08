<template>
	<div class="login-wrapper p-3.75 text-is-active">
		<div class="icon-wrapper mt-20 w-1/3 mx-auto">
			<div class="icon"></div>
		</div>
		<form @submit.prevent="signIn" class="flex flex-col max-w-3/4 mx-auto">
			<input
				class="
				  email
					bg-menu
					dark:bg-darkbg dark:text-menu dark:outline-none
					py-3
					pl-2
					rounded
					mt-8
				"
				type="text"
				name="email"
				v-model="signInForm.email"
				@change="onInputChange"
				placeholder="邮箱"
			/>
			<p class="text-red-600 text-xs py-1" v-if="signInForm.errors.email">
				{{ signInForm.errors.email }}
			</p>
			<input
				class="
				  password
					bg-menu
					dark:bg-darkbg dark:text-menu dark:outline-none
					py-3
					pl-2
					rounded
					mt-4
				"
				type="password"
				name="password"
				v-model="signInForm.password"
				@change="onInputChange"
				placeholder="密码"
			/>
			<p class="text-red-600 text-xs py-1" v-if="signInForm.errors.password">
				{{ signInForm.errors.password }}
			</p>
			<button
				class="
				  login
					mt-8
					text-lg
					font-medium
					text-white
					bg-load
					py-2.25
					px-9
					rounded-full
					shadow
					border
					dark:border-darkborder
				"
				v-if="!signInLoading"
				type="submit"
			>
				登录
			</button>
			<button
				class="
				  loading
					mt-8
					text-lg
					font-medium
					text-white
					bg-load
					py-2.25
					px-9
					rounded-full
					shadow
					border
					dark:bg-black dark:border-darkborder
				"
				v-else
				type="submit"
			>
				<Loading />
			</button>
		</form>
		<div class="signup max-w-3/4 mx-auto">
			<button
				class="
				  signup
					w-full
					mt-8
					text-load text-lg
					font-medium
					border
					dark:border-darkborder dark:bg-darkbg
					py-2.25
					px-9
					rounded-full
					shadow-sm
					cursor-not-allowed
				"
				@click="toSignUpPage"
				disabled
			>
				注册
			</button>
		</div>
	</div>
</template>

<script>
import { CURRENT_USER, SIGN_IN_MUTATION } from "../graphql/schema";
import { useApolloClient, useMutation } from "@vue/apollo-composable";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
import Loading from "../components/Loading/Loading.vue";
export default {
	name: "Login",
	components: {
		Loading,
	},
	setup() {
		const router = useRouter();
		const { client } = useApolloClient();
		const signInForm = reactive({
			email: "",
			password: "",
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

		onError((error) => {
			signInForm.errors.password = error;
		});
		// 登录成功时，跳转到主页，更新本地状态
		onDone(
			({
				data: {
					signIn: { id, token },
				},
			}) => {
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
			}
		);

		return {
			signInForm,
			signInMutation,
			signInLoading,
			toSignUpPage,
		};
	},

	methods: {
		onInputChange() {
			this.signInForm.errors.email = "";
			this.signInForm.errors.password = "";
		},
		validateEmail(email) {
			const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return re.test(email);
		},
		validateForm() {
			if (!this.signInForm.email) {
				this.signInForm.errors.email = "请输入邮箱地址";
			}
			if (!this.signInForm.password) {
				this.signInForm.errors.password = "请输入密码";
			}
			if (this.signInForm.email && !this.validateEmail(this.signInForm.email)) {
				this.signInForm.errors.email = "请输入有效的邮箱地址";
			}
		},
		signIn() {
			this.validateForm();
			if (this.signInForm.errors.email || this.signInForm.errors.password) {
				return;
			} else {
				this.signInMutation();
			}
		},
	},
};
</script>

<style scoped>
.icon {
	padding-top: 100%;
	background-image: url("login.png");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
}
</style>
