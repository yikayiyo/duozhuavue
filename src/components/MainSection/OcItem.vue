<template>
	<div class="oc-item mt-7.5 border-b border-menu">
		<router-link :to="'/books/' + conb.book.id" class="book-item ml-4 flex">
			<div class="image-wrapper w-20 h-30 mr-3 shadow-book-list-item-image">
				<div :style="image"></div>
			</div>
			<div class="content">
				<h3 class="book-name my-bk-list-item-title">{{ conb.book.title }}</h3>
				<div class="book-author text-xs text-sold-out mt-1">
					{{ conb.book.rawAuthor }}
				</div>
				<span class="douban-rating text-xs text-dbr mt-1.25"
					>豆瓣评分 {{ conb.book.doubanRating }}</span
				>
			</div>
		</router-link>
		<div class="contribs-wrapper">
			<div class="contribs px-4 pt-4 pb-6.5">
				<div
					ref="reasonWrapper"
					class="
						contribs-main
						relative
						overflow-hidden
						text-shiwu
						font-light
						leading-1.6
					"
					:style="{ maxHeight: maxHeight }"
				>
					<p ref="reason" class="break-words text-is-active">
						{{ conb.reason }}
						<span
							class="
								absolute
								right-0
								bottom-0
								w-24
								text-right
								bg-gradient-to-l
								from-white
								via-white
								to-light-500
							"
						>
							<button
								class="show-all text-load"
								v-show="pHeight > 120 && maxHeight === '120px'"
								@click="showAll"
							>
								...展开
							</button>
						</span>
					</p>
				</div>
				<div class="contribs-footer mt-4 flex justify-between text-sold-out">
					<div class="left flex-1 min-w-0 overflow-hidden">
						<a href="" class="flex items-center">
							<span
								class="
									flex-shrink-0
									w-5
									h-5
									rounded-99
									overflow-hidden
									box-border
									border border-menu
									bg-menu
								"
							>
								<img alt="" :src="conb?.contributor?.avatar" />
							</span>
							<span
								class="
									ml-1
									text-footer
									leading-category
									overflow-hidden overflow-ellipsis
									whitespace-nowrap
								"
								>{{ conb.contributor.name }}的推荐</span
							>
						</a>
					</div>
					<div class="right flex items-center">
						<a class="mr-7.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 17"
								style="color: rgb(170, 170, 170)"
							>
								<g
									fill="none"
									fill-rule="evenodd"
									stroke="currentColor"
									stroke-linecap="round"
									stroke-width="1.2"
									transform="translate(2 1)"
								>
									<path
										d="M13 1L8 6M14 6L14 .87668517C14 .392545599 13.6070711 0 13.1237445 0L8 0M3.83953916 0C1.71931875 0 0 1.74525424 0 3.89745763L0 10.1025424C0 12.2547458 1.71931875 14 3.83953916 14L10.1604608 14C12.2806812 14 14 12.2547458 14 10.1025424L14 9.96491525"
									></path>
								</g>
							</svg>
						</a>
						<span class="mr-7.5">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 18 17"
							>
								<g
									fill="none"
									fill-rule="evenodd"
									stroke="#AAA"
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1.2"
									transform="translate(1 1)"
								>
									<path
										d="M12.169348,0 L3.83065199,0 C1.71493085,0 0,1.79029667 0,3.9989971 L0,9.14005968 C0,11.3369741 1.69686706,13.1154847 3.79678239,13.135521 L4.46740051,14.4319833 C4.79706463,15.0684285 5.62009596,15.1945389 6.11120519,14.6853828 L7.60259667,13.1390568 L12.169348,13.1390568 C14.2850692,13.1390568 16,11.3487601 16,9.14005968 L16,3.9989971 C16,1.79029667 14.2850692,0 12.169348,0 Z"
									></path>
									<path
										d="M4.47615044 4.65C9.4446895 4.65 11.928959 4.65 11.928959 4.65M5.59750752 8.65L9.51801392 8.65"
									></path>
								</g>
							</svg>
						</span>
						<div class="flex items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="18"
								viewBox="0 0 19 18"
							>
								<g
									fill="none"
									fill-rule="evenodd"
									stroke="#AAA"
									stroke-width="1.2"
									transform="translate(1 1)"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M2.74290235,5.6549 L1.32674307,5.9209 C0.564288721,6.0539 2.27373675e-13,6.8189 2.27373675e-13,7.7199 L2.27373675e-13,11.9069 C2.27373675e-13,13.4389 0.575163664,14.7399 2.35502937,14.7399 L3.1924,14.7529"
									></path>
									<path
										stroke-linecap="square"
										d="M3.5568,12.0065 L3.5568,5.5265 C3.5568,5.0625 3.66704045,4.6065 3.87715685,4.1995 L5.02667263,1.4615 C5.30368708,0.8025 6.22518415,0.2695 6.762253,0.7125 C7.33983756,1.1885 7.68751897,1.9135 7.71107462,2.6895 L7.71672798,2.9035 C7.74876366,3.9715 8.57321145,4.8195 9.58045109,4.8195 L15.0557266,4.8195 C16.6047462,4.8195 17.320838,6.4245 16.8638584,7.9955 L15.6361379,12.4075 C14.9680996,14.2355 13.3097818,15.4405 11.4630187,15.4405 L6.79240423,15.4405 C5.00500143,15.4405 3.5568,13.9025 3.5568,12.0065 Z"
									></path>
								</g>
							</svg>
							<span class="vote-count text-hsh ml-1.5">302</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "OcItem",
	props: ["conb"],
	data() {
		return {
			maxHeight: "120px",
			pHeight: 0,
		};
	},
	mounted() {
		this.pHeight = this.$refs.reason.clientHeight;
	},
	computed: {
		image() {
			return {
				width: "100%",
				height: "100%",
				backgroundImage: `url(${this.conb.book.image})`,
				backgroundPosition: "center center",
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			};
		},
	},
	methods: {
		showAll() {
			console.log("click 展开");
			this.maxHeight = this.$refs.reason.clientHeight + "px";
		},
	},
};
</script>
