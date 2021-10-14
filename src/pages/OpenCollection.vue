<template>
	<div class="oc-wrapper text-white">
		<div
			class="
				oc-header
				px-3.75
				overflow-auto
				text-shiwu
				font-light
				leading-category
			"
		>
			<div class="top mt-8 mb-20">
				<a href="/users/90150559088119017">
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
							<img
								alt=""
								src="https://img.duozhuayu.com/e082b6a63db011eb98982a2adea97218.jpeg"
								class="jsx-280654375"
							/>
						</span>
						<div class="ml-2.5">
							<div class="name flex text-base font-medium">
								摇滚死兔子(˶‾᷄ །། ‾᷅˵)
								<img
									alt="客座鱼编"
									src="https://asset.duozhuayu.com/oc/proposer_badge.png"
									class="jsx-1779555337 w-21 ml-2"
								/>
							</div>
							<div class="desc text-xs">提案</div>
						</div>
					</div>
				</a>
				<h1 class="mb-4 text-3xl font-medium">
					这些新出版的好书，想推荐给你看看 | 2021.10
				</h1>
				<span class="leading-1.6">十月金秋买好书</span>
			</div>
			<div class="bottom mb-7.5">
				<span>7人推荐了20本书</span>
			</div>
		</div>
		<div class="oc-nav"></div>
		<div class="oc-content">
			<div class="oc-item"></div>
		</div>
	</div>
	<nav-footer></nav-footer>
</template>

<script>
import NavFooter from "../components/NavFooter/NavFooter.vue";
export default {
	components: {
		NavFooter,
	},
};
</script>

<style scoped>
.oc-header {
	background-image: linear-gradient(
			to top,
			rgba(203, 150, 37, 0.6),
			rgb(203, 150, 37) 56%
		),
		url(https://img.duozhuayu.com/d497a1f82a5e11ecaeab327963c9d23b.jpeg?x-oss-process=image/resize,w_450/quality,Q_80);
	background-size: cover, cover;
	background-position: center top, center center;
}
</style>
