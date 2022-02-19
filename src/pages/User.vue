<template>
	<loading v-if="loading" />
	<div v-else-if="error" class="p-3.75">error</div>
	<div v-else class="user-wrapper text-shiwu leading-category">
		<button
			@click="logOut"
			class="
				m-3.75
				text-white text-xs
				border-0.5
				dark:border-darkborder
				py-1
				px-3
				rounded-full
				shadow-sm
				absolute
				right-0
			"
		>
			登出帐号
		</button>
		<div class="user-header-wrapper text-white wrapper-bg">
			<div class="header-under"></div>
			<div class="user-head">
				<div class="basic-info flex flex-col items-center pt-8 pb-4.75">
					<div
						class="
							avatar avatar-shadow
							w-20
							h-20
							border-2 border-white
							dark:border-darkborder
							rounded-99
							overflow-hidden
						"
					>
						<img :src="user.avatar" alt="avatar image" class="w-full" />
					</div>
					<div
						class="
							name
							text-xl
							font-normal
							my-2
							mx-3.75
							max-w-1/2
							overflow-hidden overflow-ellipsis
							whitespace-nowrap
						"
					>
						{{ user.name }}
					</div>
					<div class="info">卖书收入 {{ userIncome }} 元</div>
				</div>
				<div
					v-if="showInfos"
					class="
						info-tab
						border-t-0.5 border-b-0.5 border-info
						dark:border-darkborder
						flex
						justify-around
					"
				>
					<router-link to="/account" class="flex flex-col items-center p-3">
						<svg width="15px" height="17px" viewBox="0 0 30 34" version="1.1">
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g
									id="Artboard-Copy-29"
									transform="translate(-81.000000, -554.000000)"
									fill-rule="nonzero"
									fill="#FFFFFF"
								>
									<g id="Group-6" transform="translate(0.000000, 520.000000)">
										<g id="Group-2" transform="translate(81.000000, 34.000000)">
											<path
												d="M0,1 L0,33 L0,33 C6.76353751e-17,33.5522847 0.44771525,34 1,34 L29,34 L29,34 C29.5522847,34 30,33.5522847 30,33 L30,1 L30,1 C30,0.44771525 29.5522847,-1.01453063e-16 29,0 L1,0 L1,0 C0.44771525,1.01453063e-16 -6.76353751e-17,0.44771525 0,1 Z M1.77762983,32.1109632 L1.77762983,1.88903684 L28.229028,1.88903684 L28.229028,11.1269419 L24.713715,11.1269419 C21.6746781,11.1269419 19.2110519,13.7548098 19.2110519,16.9964492 C19.2110519,20.2380886 21.6746781,22.8659565 24.713715,22.8659565 L28.229028,22.8659565 L28.229028,32.1109632 L1.77762983,32.1109632 Z M28.229028,13.0159787 L28.229028,20.969818 L24.713715,20.969818 C22.6545975,20.969818 20.9853529,19.1892904 20.9853529,16.9928984 C20.9853529,14.7965063 22.6545975,13.0159787 24.713715,13.0159787 L28.229028,13.0159787 Z"
												id="Shape"
											></path>
											<ellipse
												id="Oval"
												cx="25.5"
												cy="16.9937439"
												rx="1.5"
												ry="1.59375"
											></ellipse>
										</g>
									</g>
								</g>
							</g>
						</svg>
						<span class="mt-1.5">钱包</span>
					</router-link>
					<router-link to="/orders" class="flex flex-col items-center p-3">
						<svg width="14.5px" height="18px" viewBox="0 0 29 36" version="1.1">
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g
									id="Artboard-Copy-29"
									transform="translate(-266.000000, -553.000000)"
									fill-rule="nonzero"
									fill="#FFFFFF"
								>
									<g id="Group-6" transform="translate(0.000000, 520.000000)">
										<path
											d="M274.955888,33 C273.553054,33 272.397065,34.1088818 272.397065,35.4545455 L272.397065,35.8636364 L266.852949,35.8636364 C266.826309,35.8624373 266.799626,35.8624373 266.772986,35.8636364 C266.333418,35.9033761 265.998104,36.258299 266.000008,36.6818182 L266.000008,68.1818182 C266.000055,68.6336688 266.381902,68.9999549 266.852949,69 L294.147059,69 C294.618106,68.9999549 294.999953,68.6336688 295,68.1818182 L295,36.6818182 C294.999953,36.2299675 294.618106,35.8636815 294.147059,35.8636364 L288.602943,35.8636364 L288.602943,35.4545455 C288.602943,34.1088818 287.446954,33 286.04412,33 L274.955888,33 Z M274.955888,34.7659091 L286.04412,34.7659091 C286.531402,34.7659091 286.897061,35.1444361 286.897061,35.6488636 L286.897061,38.2977273 C286.897061,38.8021548 286.531402,39.1806818 286.04412,39.1806818 L274.955888,39.1806818 C274.468606,39.1806818 274.102947,38.8021548 274.102947,38.2977273 L274.102947,35.6488636 C274.102947,35.1444361 274.468606,34.7659091 274.955888,34.7659091 Z M267.70589,37.85625 L272.397065,37.85625 L272.397065,38.2574829 C272.397065,39.5772984 273.553054,40.6648802 274.955888,40.6648802 L286.04412,40.6648802 C287.446954,40.6648802 288.602943,39.5772984 288.602943,38.2574829 L288.602943,37.85625 L293.294118,37.85625 L293.294118,67.1462509 L267.70589,67.1462509 L267.70589,37.85625 Z M271.761854,45.64375 C271.480444,45.6584756 271.227425,45.8404185 271.098128,46.1210267 C270.968832,46.4016349 270.982907,46.7382654 271.13505,47.0040832 C271.287193,47.269901 271.554283,47.4245108 271.835688,47.4096591 L289.162101,47.4096591 C289.446124,47.4141601 289.710307,47.2468613 289.85349,46.9718241 C289.996673,46.6967868 289.996673,46.3566223 289.85349,46.081585 C289.710307,45.8065478 289.446124,45.6392489 289.162101,45.64375 L271.835688,45.64375 C271.81109,45.642456 271.786452,45.642456 271.761854,45.64375 L271.761854,45.64375 Z M271.761854,51.6653409 C271.480444,51.6800665 271.227425,51.8620094 271.098128,52.1426176 C270.968832,52.4232258 270.982907,52.7598563 271.13505,53.0256741 C271.287193,53.2914919 271.554283,53.4461018 271.835688,53.43125 L289.162101,53.43125 C289.446124,53.4357511 289.710307,53.2684522 289.85349,52.993415 C289.996673,52.7183777 289.996673,52.3782132 289.85349,52.1031759 C289.710307,51.8281387 289.446124,51.6608399 289.162101,51.6653409 L271.835688,51.6653409 C271.81109,51.6640469 271.786452,51.6640469 271.761854,51.6653409 Z M271.761854,57.6869318 C271.480444,57.7016574 271.227425,57.8836003 271.098128,58.1642085 C270.968832,58.4448167 270.982907,58.7814472 271.13505,59.047265 C271.287193,59.3130828 271.554283,59.4676927 271.835688,59.4528409 L289.162101,59.4528409 C289.446124,59.457342 289.710307,59.2900431 289.85349,59.0150059 C289.996673,58.7399686 289.996673,58.3998041 289.85349,58.1247668 C289.710307,57.8497296 289.446124,57.6824308 289.162101,57.6869318 L271.835688,57.6869318 C271.81109,57.6856378 271.786452,57.6856378 271.761854,57.6869318 Z"
											id="Shape"
										></path>
									</g>
								</g>
							</g>
						</svg>
						<span class="mt-1.5">订单</span>
					</router-link>
					<router-link to="/user/books" class="flex flex-col items-center p-3">
						<svg width="15px" height="18.5px" viewBox="0 0 30 37" version="1.1">
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g
									id="Artboard-Copy-29"
									transform="translate(-455.000000, -554.000000)"
									fill-rule="nonzero"
									fill="#FFFFFF"
								>
									<g id="Group-6" transform="translate(0.000000, 520.000000)">
										<path
											d="M459.409917,34 C456.980519,34 455,36.0013893 455,38.4468507 L455,66.5669134 C455,69.0074612 456.982079,70.999911 459.409917,70.999911 L484.105455,70.999911 C484.42353,71.0044329 484.719387,70.8364439 484.879737,70.5602703 C485.040088,70.2840968 485.040088,69.9425261 484.879737,69.6663526 C484.719387,69.390179 484.42353,69.22219 484.105455,69.2267119 L459.409917,69.2267119 C457.928805,69.2267119 456.763967,68.0557817 456.763967,66.5669134 L456.763967,66.275998 C456.78223,66.2265406 456.796066,66.1755436 456.80531,66.1236137 C457.012242,64.8589805 458.078952,63.9071149 459.409917,63.9071149 L484.105455,63.9071149 C484.592541,63.9070659 484.98739,63.5101505 484.987438,63.0205154 L484.987438,34.8865995 C484.98739,34.3969644 484.592541,34.000049 484.105455,34 L459.409917,34 Z M459.409917,35.773199 L483.223471,35.773199 L483.223471,62.1339159 L459.409917,62.1339159 C458.411934,62.1339159 457.505062,62.4973512 456.763967,63.0620747 L456.763967,38.4468507 C456.763967,36.9499409 457.930365,35.773199 459.409917,35.773199 Z M459.327231,65.6803139 C459.012084,65.6951003 458.728731,65.8777943 458.583933,66.1595609 C458.439136,66.4413274 458.454898,66.7793476 458.625281,67.0462628 C458.795664,67.3131779 459.094776,67.468426 459.409917,67.4535129 L484.105455,67.4535129 C484.42353,67.4580348 484.719387,67.2900459 484.879737,67.0138723 C485.040088,66.7376987 485.040088,66.3961281 484.879737,66.1199545 C484.719387,65.843781 484.42353,65.675792 484.105455,65.6803139 L459.409917,65.6803139 C459.382371,65.6790146 459.354778,65.6790146 459.327231,65.6803139 Z"
											id="Shape"
										></path>
									</g>
								</g>
							</g>
						</svg>
						<span class="mt-1.5">买卖的书</span></router-link
					>
					<router-link
						to="/notifications"
						class="flex flex-col items-center p-3"
					>
						<svg width="16px" height="19px" viewBox="0 0 32 38" version="1.1">
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g
									id="Artboard-Copy-29"
									transform="translate(-639.000000, -552.000000)"
									fill-rule="nonzero"
									fill="#FFFFFF"
								>
									<g id="Group-6" transform="translate(0.000000, 520.000000)">
										<path
											d="M668.052632,56.9955556 C668.052632,56.9533333 668.052632,56.9533333 668.052632,56.9111111 L668.052632,49.3955556 C668.052632,46.1444444 666.831579,43.02 664.6,40.6555556 C663.042105,38.9666667 661.021053,37.7844444 658.831579,37.1511111 C658.957895,36.7711111 659,36.3911111 659,36.0111111 C659,33.8155556 657.189474,32 655,32 C652.810526,32 651,33.8155556 651,36.0111111 C651,36.3911111 651.042105,36.7711111 651.168421,37.1511111 C648.978947,37.7844444 646.957895,38.9666667 645.4,40.6555556 C643.168421,43.02 641.947368,46.1444444 641.947368,49.3955556 L641.947368,56.9111111 C641.947368,56.9533333 641.947368,56.9955556 641.947368,56.9955556 C640.263158,57.3755556 639,58.8955556 639,60.7111111 C639,62.8222222 640.684211,64.5111111 642.789474,64.5111111 L649.947368,64.5111111 C649.947368,64.6377778 649.947368,64.8066667 649.947368,64.9333333 C649.947368,67.72 652.221053,70 655,70 C657.778947,70 660.052632,67.72 660.052632,64.9333333 C660.052632,64.8066667 660.052632,64.6377778 660.052632,64.5111111 L667.210526,64.5111111 C669.315789,64.5111111 671,62.8222222 671,60.7111111 C671,58.8955556 669.736842,57.3755556 668.052632,56.9955556 Z M655,33.6888889 C656.263158,33.6888889 657.315789,34.7444444 657.315789,36.0111111 C657.315789,36.2644444 657.273684,36.5177778 657.189474,36.7711111 C656.810526,36.7288889 656.431579,36.6866667 656.010526,36.6444444 C655.968421,36.6444444 655.884211,36.6444444 655.842105,36.6444444 L655.336842,36.6444444 L654.621053,36.6444444 L654.157895,36.6444444 C654.115789,36.6444444 654.031579,36.6444444 653.989474,36.6444444 C653.610526,36.6444444 653.189474,36.6866667 652.810526,36.7711111 C652.726316,36.5177778 652.684211,36.2644444 652.684211,36.0111111 C652.684211,34.7444444 653.736842,33.6888889 655,33.6888889 Z M643.631579,49.3955556 C643.631579,46.5666667 644.684211,43.8644444 646.621053,41.8377778 C648.684211,39.6 651.631579,38.3333333 654.663158,38.3333333 L655.378947,38.3333333 C658.410526,38.3333333 661.315789,39.6 663.421053,41.7955556 C665.357895,43.8644444 666.410526,46.5244444 666.410526,49.3533333 L666.410526,56.9111111 L643.631579,56.9111111 L643.631579,49.3955556 Z M655,68.3111111 C653.147368,68.3111111 651.631579,66.7911111 651.631579,64.9333333 C651.631579,64.8066667 651.631579,64.6377778 651.673684,64.5111111 L658.326316,64.5111111 C658.326316,64.6377778 658.368421,64.8066667 658.368421,64.9333333 C658.368421,66.7911111 656.852632,68.3111111 655,68.3111111 Z M667.210526,62.8222222 L642.789474,62.8222222 C641.610526,62.8222222 640.684211,61.8933333 640.684211,60.7111111 C640.684211,59.5288889 641.610526,58.6 642.789474,58.6 L667.210526,58.6 C668.389474,58.6 669.315789,59.5288889 669.315789,60.7111111 C669.315789,61.8933333 668.389474,62.8222222 667.210526,62.8222222 Z"
											id="Shape"
										></path>
									</g>
								</g>
							</g>
						</svg>
						<span class="mt-1.5">通知</span>
					</router-link>
				</div>
				<div v-else class="splitter flex items-center justify-between px-5%">
					<span
						class="
							left
							flex-1
							border-t-0.5 border-splitter
							dark:border-darkborder
						"
					></span>
					<div class="circle mx-1.25"></div>
					<span
						class="
							right
							flex-1
							border-t-0.5 border-splitter
							dark:border-darkborder
						"
					></span>
				</div>
				<div class="book-shelf-tab flex justify-around p-4 text-base">
					<router-link :to="activityLink" class="relative">动态</router-link>
					<router-link :to="bookShelfLink" class="relative">书架</router-link>
				</div>
			</div>
		</div>
		<div class="user-tab">
			<router-view :books="user.bookShelf"></router-view>
		</div>
	</div>
	<user-footer :userId="currentUserId" />
</template>

<script>
import UserFooter from "../components/NavFooter/UserFooter.vue";
import Loading from "../components/Loading/Loading.vue";
import { useRoute, useRouter } from "vue-router";
import { useApolloClient, useQuery, useResult } from "@vue/apollo-composable";
import { apolloClient } from "../graphql";
import { CURRENT_USER, GET_USER } from "../graphql/schema";
import { ref, computed, watch } from "vue";
import useLoggedInUserId from "../hooks/useLoggedInUserId";
export default {
	name: "User",
	components: {
		UserFooter,
		Loading,
	},
	setup() {
		const route = useRoute();
		let userId = ref(route.params.userId);
		const { result, loading, error } = useQuery(GET_USER, () => ({
			userId: userId.value,
		}));
		const user = useResult(result, {
			id: "",
			name: "",
			income: 0,
			avatar: "",
			purchasedBooks: [],
			soldBooks: [],
			bookShelf: [],
		});
		const currentUserId = useLoggedInUserId() || 0;
		const showInfos = computed(() => currentUserId === userId.value);
		const userIncome = computed(() => (user.value.income / 100).toFixed(2));
		const activityLink = computed(
			() => "/users/" + user.value.id + "/activities"
		);
		const bookShelfLink = computed(
			() => "/users/" + user.value.id + "/owning-bookshelf"
		);

		// watch the route params, update the userId when it changes, then update the component.
		watch(
			() => route.params,
			(newParams, _) => {
				userId.value = newParams.userId; // userId is a variable used in useQuery, when it changes, that query will be re-send.
			}
		);

		const router = useRouter();
		const { client } = useApolloClient();

		function logOut() {
			client.resetStore();
			router.push("/login");
		}

		return {
			userId,
			user,
			loading,
			error,
			userIncome,
			activityLink,
			bookShelfLink,
			logOut,
			currentUserId,
			showInfos,
		};
	},

	beforeRouteEnter(to, _) {
		const {
			currentUser: { id },
		} = apolloClient.cache.readQuery({
			query: CURRENT_USER,
		});
		// 访问/users/0
		// 如果已经登录，跳转到登录用户主页; 否则，跳转到登录页面
		if (to.params.userId === "0") {
			if (id !== "") {
				return {
					path: "/users/" + id,
				};
			} else {
				return {
					path: "/login",
				};
			}
		}
		// 访问 /users/xxx, 未登录时不能访问
		else {
			if (id !== "") {
				return true;
			} else {
				return {
					path: "/login",
				};
			}
		}
	},
};
</script>

<style scoped>
.wrapper-bg {
	background-image: radial-gradient(
			circle at center top,
			rgba(189, 194, 232, 0.6) 0%,
			rgba(189, 194, 232, 0.8) 82%
		),
		radial-gradient(
			circle at center top,
			rgba(93, 93, 93, 0.5) 0%,
			rgba(93, 93, 93) 82%
		);
}

.dark .wrapper-bg {
	background-image: radial-gradient(
		circle at center top,
		#000000 0%,
		#1a1919 82%
	);
}

.avatar-shadow {
	box-shadow: rgb(0, 0, 0, 20%) 0px 0px 8px 0px;
}

.router-link-active::after {
	content: "";
	width: 20px;
	display: block;
	border: 10px solid transparent;
	border-bottom-color: white;
	position: absolute;
	bottom: -20px;
	right: 5px;
}
.dark .router-link-active::after {
	border-bottom-color: black;
}
</style>
