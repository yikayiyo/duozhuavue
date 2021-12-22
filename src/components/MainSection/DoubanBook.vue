<template>
	<router-link :to="/books/ + id">
		<div class="douban-style-book-wrapper p-3.75">
			<div class="top flex">
				<div class="image-wrapper w-24 h-32 mr-3">
					<div
						class="image rounded h-full bg-cover bg-no-repeat bg-bottom"
						:style="{ backgroundImage: bgImage }"
					></div>
				</div>
				<div
					class="
						book-intro-wrapper
						h-32
						w-3/4
						bg-menu
						px-5
						py-4
						text-cbl
						leading-1.6
					"
				>
					<div
						class="
							book-intro
							h-full
							overflow-hidden
							text-ellipsis
							whitespace-normal
						"
					>
						<p>{{ summary }}</p>
					</div>
				</div>
			</div>
			<div class="middle flex justify-between items-center py-2">
				<div class="left">
					<div class="title text-base">{{ title }}</div>
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
			<douban-rating :rating="rating" />
			<div class="bottom text-xs text-sold-out py-2 border-b-0.5">
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
		console.log(props);
		const {
			id,
			rating,
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
			rating,
			image,
			title,
			summary,
			bookInfo,
			bgImage,
		};
	},
};
</script>

<style></style>
