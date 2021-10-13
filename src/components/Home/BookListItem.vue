<template>
	<a href="">
		<div class="book-list-item-wrapper flex px-3.75 py-4.5">
			<div class="image-wrapper w-20 h-30">
				<!-- :style="book.images.small" -->
				<div class="image"></div>
			</div>
			<div class="content bg-red-200 flex flex-col flex-1">
				<div class="content-top bg-red-400 flex flex-1">
					<div class="content-left flex-1">
						<div class="book-name">bookName</div>
						<div class="book-author">Author</div>
						<div class="douban-rating">Douban rating</div>
					</div>
					<div class="content-right">
						<div class="avatar">avatar</div>
					</div>
				</div>
				<div class="content-bottom bg-red-800">¥11.10</div>
			</div>
		</div>
	</a>
</template>

<script>
export default {
	props: ["book"],
};
</script>

<style scoped>
.image {
	width: 100%;
	height: 100%;
	background-image: url("https://img.duozhuayu.com/928c621a40e511e7838200163e063441.jpg?x-oss-process=image/resize,w_270/quality,Q_80");
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
