<template>
	<loading v-if="loading" />
	<div v-else-if="error" class="p-3.75">error</div>
	<div class="oc-wrapper" v-else>
		<div
			class="
				oc-header
				text-white
				px-3.75
				overflow-auto
				text-shiwu
				font-light
				leading-category
			"
			:style="ocHeaderStyleObj"
		>
			<div class="top mt-8 mb-20">
				<router-link :to="'/users/' + collection.proposer.id">
					<div class="wrapper flex items-center mb-3.5">
						<span
							class="
								flex-shrink-0
								w-9
								h-9
								rounded-99
								overflow-hidden
								box-border
								border border-menu
								bg-menu
							"
						>
							<img alt="user avatar" :src="collection.proposer.avatar" />
						</span>
						<div class="ml-2.5 max-w-oc">
							<div class="name flex text-base font-medium">
								<p
									class="
										flex-1
										overflow-hidden overflow-ellipsis
										whitespace-nowrap
									"
								>
									{{ collection.proposer.name }}
								</p>
								<img
									alt="客座鱼编"
									:src="proposer_badge"
									class="jsx-1779555337 w-21 ml-2 flex-shrink-0"
								/>
							</div>
							<div class="desc text-xs">提案</div>
						</div>
					</div>
				</router-link>
				<h1 class="mb-4 text-3xl font-medium">
					{{ collection.name }}
				</h1>
				<span class="leading-1.6 font-normal">{{
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
			class="
				oc-nav
				sticky
				top-0
				font-medium
				text-sold-out
				bg-white
				dark:bg-black
				z-50
			"
		>
			<nav
				class="
					oc-nav-items
					flex
					items-center
					justify-between
					h-12
					border-b-0.5 border-menu
					dark:border-darkborder
				"
			>
				<span
					class="popular text-is-active flex items-center self-stretch relative"
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
			class="
				footer
				flex
				justify-center
				text-gray-300
				dark:text-darkborder
				py-12
				text-footer
			"
		>
			<div class="flex items-center">
				<div class="w-10 border-t border-current"></div>
				<svg
					width="12"
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					class="mx-2.25 transform rotate-45"
				>
					<rect x="4" y="4" width="16" height="16" class=""></rect>
				</svg>
				<div class="w-10 border-t border-current"></div>
			</div>
		</div>
		<oc-footer></oc-footer>
	</div>
</template>

<script>
import OcFooter from "../components/NavFooter/OcFooter.vue";
import OcItem from "../components/MainSection/OcItem.vue";
import Loading from "../components/Loading/Loading.vue";
import proposer_badge from "../assets/proposer_badge.png";
import { useQuery, useResult } from "@vue/apollo-composable";
import { useRoute } from "vue-router";
import { computed } from "@vue/reactivity";
import { GET_COLLECTION } from "../graphql/schema";
export default {
	name: "OpenCollection",
	setup() {
		const route = useRoute();
		const { result, loading, error } = useQuery(GET_COLLECTION, {
			collectionId: route.params.id,
		});
		const collection = useResult(result, null);
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
		return {
			collection,
			loading,
			error,
			ocHeaderStyleObj,
			proposer_badge
		};
	},
	components: {
		OcFooter,
		OcItem,
		Loading,
	},
};
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
