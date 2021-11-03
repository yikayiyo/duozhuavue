<template>
	<div class="oc-wrapper">
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
								:src="collection?.proposer?.avatar"
								class="jsx-280654375"
							/>
						</span>
						<div class="ml-2.5">
							<div class="name flex text-base font-medium">
								{{ collection.proposer?.name }}
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
					{{ collection?.name }}
				</h1>
				<span class="leading-1.6">{{ collection?.description }}</span>
			</div>
			<div class="bottom mb-7.5">
				<span>
					{{ collection?.contributors?.length }}人推荐了
					{{ collection?.items?.length }}本书
				</span>
			</div>
		</div>
		<div class="oc-nav sticky top-0 font-medium text-sold-out">
			<nav
				class="
					flex
					items-center
					justify-between
					h-12
					border-b-0.5 border-menu
					after:block
					before:block
				"
			>
				<span
					class="
						popular
						text-is-active
						flex
						items-center
						self-stretch
						relative
						after:block
						after:absolute
						after:inset-x-0
						after:bottom-0
						after:h-0.5
						after:rounded-full
						after:bg-black
					"
					>热门</span
				>
				<span class="latest flex items-center self-stretch">最新</span>
			</nav>
		</div>
		<div class="oc-content">
			<div class="oc-item mt-7.5 border-b border-menu">
				<a href="" class="book-item ml-4 flex">
					<div class="image-wrapper w-20 h-30 mr-3 shadow-book-list-item-image">
						<div class="image"></div>
					</div>
					<div class="content">
						<h3 class="book-name my-bk-list-item-title">
							如何像人类学家一样思考
						</h3>
						<div class="book-author text-xs text-sold-out mt-1">
							马修恩格尔克
						</div>
						<span class="douban-rating text-xs text-dbr mt-1.25"
							>豆瓣评分 7.7</span
						>
					</div>
				</a>
				<div class="contribs-wrapper">
					<div class="contribs px-4 pt-4 pb-6.5">
						<div
							class="
								contribs-main
								h-30
								overflow-hidden
								text-shiwu
								font-light
								leading-1.6
							"
						>
							<p>
								如果你对人类学感兴趣，那么这本导读书不容错过。书中展现了一种颇有荒诞性质却在阅读后认为无比合理的组合。例如：板球-蟋蟀、披头士乐队-牲畜、养老基金-牛、性金钱权力-口袋妖怪、《种族纯洁法案》-一滴血等等。当然其中也有不少我从没想到过的解释，例如：“语言是族群特征的外部表现。”这本书藉由人类学提供了一个全新的视角，你可以把它视作一次对认知边缘的试探，也可以把他看作是对刻板思维的挑战。
							</p>
						</div>
						<div class="contribs-footer mt-4 flex justify-between">
							<div class="left">
								<a href="" class="flex">
									<span>avatar</span>
									<span>nickname</span>
								</a>
							</div>
							<div class="right flex">
								<span>分享</span>
								<span>评论</span>
								<span>点赞</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<nav-footer></nav-footer>
</template>

<script>
import gql from "graphql-tag";
import NavFooter from "../components/NavFooter/NavFooter.vue";
export default {
	data() {
		return {
			collection: {},
		};
	},
	components: {
		NavFooter,
	},
	apollo: {
		collection: {
			query: gql`
				query Query($collectionId: ID!) {
					collection(id: $collectionId) {
						name
						description
						image
						maskColor
						proposer {
							name
							avatar
						}
						items {
							id
							title
							rawAuthor
							doubanRating
							image
						}
						contributors {
							name
						}
					}
				}
			`,
			// 静态参数
			variables() {
				return {
					collectionId: this.$route.params.id,
				};
			},
		},
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
.image {
	width: 100%;
	height: 100%;
	background-image: url("https://img.duozhuayu.com/c4776364f8fc11eb8b077e9c661745cd.jpeg?x-oss-process=image/resize,w_270/quality,Q_80");
	background-position: center center;
	background-size: cover;
	background-repeat: no-repeat;
}
</style>
