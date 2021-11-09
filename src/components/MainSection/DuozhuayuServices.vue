<template>
	<div class="services-wrapper bg-douban mt-3.75 px-2.5 rounded">
		<router-link to="/support/book-service">
			<div class="flex py-3">
				<span
					class="
						text-xs text-white
						font-medium
						bg-load
						px-1
						rounded-sm
						inline-flex
						items-center
					"
					>自营</span
				>
				<p class="ml-2 text-footer">正版 · 干净卫生 · 当天发货</p>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="rgb(170, 170, 170)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					class="w-hicon ml-auto"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</div>
		</router-link>
		<router-link to="/support/environmental-exploration">
			<div class="flex py-3 border-t border-t-divider">
				<span
					class="
						text-xs text-white
						font-medium
						bg-load
						px-1
						rounded-sm
						inline-flex
						items-center
					"
					>环保</span
				>
				<p class="ml-2 text-footer">了解多抓鱼的环保探索</p>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="rgb(170, 170, 170)"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					class="w-hicon ml-auto"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "DuozhuayuServices",
};
</script>

<style></style>
