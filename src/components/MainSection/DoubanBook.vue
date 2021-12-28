<template>
	<router-link :to="/books/ + id">
		<div class="douban-style-book-wrapper px-3.75 pt-3.75">
			<div class="top flex justify-between">
				<div class="image-wrapper rounded w-23 mr-2 h-32 bg-menu">
					<div
						class="image rounded h-full bg-cover bg-no-repeat bg-bottom"
						:style="{ backgroundImage: bgImage }"
					></div>
				</div>
				<div
					class="
						book-intro-wrapper
						rounded
						flex-1
						bg-menu
						px-5
						pt-6
						text-cbl
						leading-1.6
					"
				>
					<div class="book-intro h-20 line-clamp-4" v-html="summary"></div>
					<div class="title text-center text-sold-out">- 图书简介 -</div>
				</div>
			</div>
			<div class="middle flex justify-between items-center py-2">
				<div class="left max-w-1/2">
					<div
						class="
							title
							text-base
							whitespace-nowrap
							overflow-hidden overflow-ellipsis
						"
					>
						{{ title }}
					</div>
				</div>
				<div class="right">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						class="w-7.5"
						:fill="'red'"
					>
						<path
							d="M18.36,13.29,12.71,19a1,1,0,0,1-1.42,0L5.64,13.29a5,5,0,0,1,0-7.07A5,5,0,0,1,12,5.63a5,5,0,0,1,6.36,7.66Z"
						/>
					</svg>
				</div>
			</div>
			<douban-rating :rating="doubanRating" :isbn="book.isbn13" />
			<div
				class="
					bottom
					text-xs text-sold-out
					py-2
					border-b-0.5
					overflow-hidden overflow-ellipsis
					whitespace-nowrap
				"
			>
				{{ bookInfo }}
			</div>
		</div>
	</router-link>
</template>

<script>
import { computed } from "vue";
import DoubanRating from "./DoubanRating.vue";
export default {
	components: { DoubanRating },
	name: "DoubanBook",
	props: ["book"],
	setup(props) {
		const {
			id,
			doubanRating,
			image,
			title,
			summary,
			rawAuthor,
			publisher,
			publishDate,
		} = props.book;

		const bgImage = computed(() => {
			return "url(" + image + ")";
		});
		const bookInfo = computed(() => {
			return `${rawAuthor} / ${publishDate} / ${publisher}`;
		});
		return {
			id,
			doubanRating,
			image,
			title,
			summary,
			bookInfo,
			bgImage,
		};
	},
};
</script>

<style scoped></style>
