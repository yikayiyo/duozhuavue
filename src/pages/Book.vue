<template>
	<div class="container-wrapper text-is-active relative">
		<div class="book-wrapper">
			<div class="book-header relative px-3.75 pt-7.5 pb-7 overflow-hidden">
				<div
					class="image-wrapper absolute -inset-50 z-10"
					:style="imageWrapperStyle"
				></div>
				<div class="image w-37.5 h-auto my-0 mx-auto relative z-20">
					<img
						class="max-w-full max-h-full"
						:src="book.image"
						:alt="book.title + '封面'"
						:style="imageStyle"
					/>
				</div>
			</div>
			<div class="book-main pt-4.5 mx-3.75">
				<div class="book-info leading-category pb-3.75">
					<h1 class="text-xl font-medium text-is-active">{{ book.title }}</h1>
					<div class="p-wrapper mt-3.5 text-hsh leading-1.69">
						<p class="original-price flex">
							<span class="tag">原价</span>
							<span class="ml-3">¥{{ price }}</span>
						</p>
						<p class="author flex">
							<span class="tag">作者</span>
							<span class="ml-3 text-load">
								<router-link :to="'/search/book/' + book.rawAuthor">
									{{ book.rawAuthor }}
								</router-link>
							</span>
						</p>
						<p class="publisher flex">
							<span class="tag">出版社</span>
							<span class="ml-3">{{ book.publisher }}</span>
						</p>
						<p class="publish-date flex">
							<span class="tag">出版</span>
							<span class="ml-3">{{ book.publishDate }}</span>
						</p>
						<p class="binding flex">
							<span class="tag">装帧</span>
							<span class="ml-3">{{ book.binding }}</span>
						</p>
					</div>
				</div>
				<douban-rating :rating="book.doubanRating" :isbn="book.isbn13" />
				<div class="services"></div>
				<div class="book-detail"></div>
			</div>
		</div>
		<cart-footer></cart-footer>
	</div>
</template>

<script>
import gql from "graphql-tag";
import doubanRating from "../components/MainSection/DoubanRating.vue";
import cartFooter from "../components/NavFooter/cartFooter.vue";
export default {
	name: "BookPage",
	components: {
		doubanRating,
		cartFooter,
	},
	data() {
		return {
			id: this.$route.params.bookId,
			book: {},
		};
	},
	computed: {
		imageWrapperStyle() {
			return {
				background: `center center / cover rgb(214, 186, 140)`,
				filter: "blur(25px)",
				backgroundImage: `url(${this.book.image})`,
			};
		},
		imageStyle() {
			return {
				boxShadow: `rgb(0,0,0,20%) 0px 1px 10px`,
			};
		},
		price() {
			return (this.book.originalPrice / 100).toFixed(2);
		},
	},
	apollo: {
		book: {
			query: gql`
				query getABook($bookId: ID!) {
					book(id: $bookId) {
						title
						isbn13
						rawAuthor
						publisher
						publishDate
						binding
						doubanRating
						authorIntro
						originalPrice
						summary
						catalog
						image
					}
				}
			`,
			variables() {
				return {
					bookId: this.id,
				};
			},
		},
	},
};
</script>

<style scoped>
.tag {
	display: flex;
	justify-content: space-between;
	width: 45px;
	color: rgb(170, 170, 170);
}
.tag::after {
	content: ":";
}
</style>
