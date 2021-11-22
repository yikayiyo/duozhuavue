<template>
	<div class="login-wrapper p-3.75 text-is-active">
		<div class="icon-wrapper mt-20 w-1/3 mx-auto">
			<div class="icon"></div>
		</div>
		<form @submit.prevent="signIn" class="flex flex-col">
			<label for="email">邮箱</label>
			<input
				class="bg-menu py-2.25 pl-2 rounded mt-1"
				type="text"
				name="email"
				v-model="signInForm.email"
				@change="onInputChange"
			/>
			<p class="text-red-600 text-xs py-1" v-if="signInForm.errors.email">
				{{ signInForm.errors.email }}
			</p>
			<label for="password" class="mt-2">密码</label>
			<input
				class="bg-menu py-2.25 pl-2 rounded mt-1"
				type="password"
				name="password"
				v-model="signInForm.password"
				@change="onInputChange"
			/>
			<p class="text-red-600 text-xs py-1" v-if="signInForm.errors.password">
				{{ signInForm.errors.password }}
			</p>
			<button
				class="
					mt-8
					text-lg
					font-medium
					text-white
					bg-load
					py-3
					px-9
					rounded-full
					shadow
					border
				"
				type="submit"
			>
				登录
			</button>
		</form>
		<button
			class="
				w-full
				mt-8
				text-load text-lg
				font-medium
				border
				py-3
				px-9
				rounded-full
				shadow-sm
			"
		>
			注册
		</button>
	</div>
</template>

<script>
import { CURRENT_USER, SIGN_IN_MUTATION } from "../graphql/schema";
import { useApolloClient, useMutation } from "@vue/apollo-composable";
import { reactive } from "@vue/reactivity";
import { useRouter } from "vue-router";
export default {
	name: "Login",
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
	background-image: url("/logo.jpg");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
}
</style>
