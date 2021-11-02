<template>
	<div
		class="
			flex-shrink-0
			oc-item-wrapper
			w-oc-item
			h-oc-item
			text-oc-item
			mr-2.625
			rounded-oc-item
			text-hsh
		"
	>
		<a href="" class="inner block box-border p-3 relative h-full">
			<h3 class="title mb-oc-title leading-oc-title text-lg font-medium">
				{{ collection?.name }}
			</h3>
			<span class="text-cbl align-middle font-light"
				>{{ collection?.contributors.length }}人推荐了{{
					collection?.items.length
				}}本书</span
			>
			<div class="media flex items-center absolute bottom-4 max-w-full">
				<span
					class="
						media-avatar-wrapper
						flex-shrink-0
						box-border
						w-7.5
						h-7.5
						border border-menu
						rounded-99
						overflow-hidden
					"
				>
					<img
						:src="collection?.proposer.avatar"
						alt="user avatar
					"
						class="w-full"
					/>
				</span>
				<div
					class="content flex flex-col max-w-full ml-1.5 pr-4 overflow-hidden"
				>
					<div
						class="
							name
							max-width-100%
							font-normal
							overflow-hidden overflow-ellipsis
							whitespace-nowrap
							text-footer
						"
					>
						{{ collection?.proposer.name }}
					</div>
					<div class="desc text-xss font-light">客座鱼编</div>
				</div>
			</div>
		</a>
	</div>
</template>

<script>
export default {
	name: "OcListItem",
	props: ["collection"],
};
</script>

<style scoped>
.oc-item-wrapper {
	background: linear-gradient(
				to top,
				rgba(203, 150, 37, 0.8) 0%,
				rgba(203, 150, 37, 0.3) 35%,
				rgb(203, 150, 37) 59%
			)
			center top / auto no-repeat,
		url("https://img.duozhuayu.com/d497a1f82a5e11ecaeab327963c9d23b.jpeg?x-oss-process=image/resize,w_450/quality,Q_80")
			center center / cover no-repeat;
}
h3.title {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	overflow: hidden;
	text-overflow: ellipsis;
}
</style>
