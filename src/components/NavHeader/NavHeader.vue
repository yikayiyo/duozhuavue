<template>
	<div
		class="
			flex
			justify-evenly
			items-center
			h-12
			font-medium
			tracking-wide
			text-gray-400
			border-t-0.5 border-b-0.5 border-true-gray-300
		"
	>
		<a class="is-active" href="/book">
			<span
				class="
					relative
					after:block
					after:absolute
					after:inset-x-0
					after:-bottom-3.5
					after:h-0.5
					after:rounded-full
					after:bg-black
				"
				>图书</span
			>
		</a>
		<a href="/clothing"><span>服饰</span></a>
		<a href="/electronics"><span>电子</span></a>
		<a href="/original"><span>原创商品</span></a>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
.is-active {
	color: rgb(51, 51, 51);
}
</style>
