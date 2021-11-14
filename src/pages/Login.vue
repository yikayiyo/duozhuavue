<template>
	<div class="login-wrapper p-3.75 text-is-active">
		<div class="icon-wrapper mt-20 w-1/3 mx-auto">
			<div class="icon"></div>
		</div>
		<form @submit.prevent="login" class="flex flex-col">
			<label for="email">邮箱</label>
			<input
				class="bg-menu py-2.25 pl-2 rounded"
				type="email"
				name="email"
				v-model="email"
				@change="onInputChange"
			/>
			<p class="text-red-600 text-xs py-1" v-if="errors.email">
				{{ errors.email }}
			</p>
			<label for="password">密码</label>
			<input
				class="bg-menu py-2.25 pl-2 rounded"
				type="password"
				name="password"
				v-model="password"
				@change="onInputChange"
			/>
			<p class="text-red-600 text-xs py-1" v-if="errors.password">
				{{ errors.password }}
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
import gql from "graphql-tag";
const SIGN_IN_MUTATION = gql`
	mutation SignInMutation($email: String!, $password: String!) {
		signIn(email: $email, password: $password)
	}
`;

const LOGIN_MUTATION = gql`
	mutation {
		loginMutation @client
	}
`;
export default {
	name: "Login",
	data() {
		return {
			email: "",
			password: "",
			errors: {
				email: "",
				password: "",
			},
		};
	},
	methods: {
		onInputChange(e) {
			this.errors = {
				email: "",
				password: "",
			};
		},
		validateEmail(email) {
			const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			return re.test(email);
		},
		validateForm() {
			if (!this.email) {
				this.errors.email = "请输入邮箱地址";
			}
			if (!this.password) {
				this.errors.password = "请输入密码";
			}
			if (this.email && !this.validateEmail(this.email)) {
				this.errors.email = "请输入有效的邮箱地址";
			}
		},
		login() {
			this.validateForm();
			//login
			if (this.email && this.password) {
				// sent req to server
				this.$apollo
					.mutate({
						mutation: SIGN_IN_MUTATION,
						variables: {
							email: this.email,
							password: this.password,
						},
					})
					.then((res) => {
						// 结果
						console.log(res);
						localStorage.setItem("token", res.data.signIn);
						this.$apollo.mutate({
							mutation: LOGIN_MUTATION,
						});
						this.$router.push("/book");
					})
					.catch((error) => {
						// 错误
						this.errors.password = error;
					});
			}
		},
	},
};
</script>

<style scoped>
.icon {
	padding-top: 100%;
	background-image: url("/src/assets/logo.jpg");
	background-position: center center;
	background-repeat: no-repeat;
	background-size: contain;
}
</style>
