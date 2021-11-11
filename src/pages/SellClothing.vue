<template>
	<div
		class="
			sell-clothing-wrapper
			leading-category
			text-is-active
			min-h-screen
			pb-50
		"
	>
		<div class="callout py-2 px-3.75 text-load text-hsh bg-load-more">
			目前开放的城市：北京、上海、深圳、杭州、南京、苏州
		</div>
		<div class="first-panel flex p-3.75 border-b border-search-input">
			<div class="img-wrapper h-32.5">
				<img
					src="/public/sell/buyout_step_1.png"
					alt=""
					class="w-37.5 h-full"
				/>
			</div>
			<div class="info flex-1 flex flex-col justify-center items-center">
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					提交品牌
				</div>
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					获得估价
				</div>
			</div>
		</div>
		<div class="second-panel flex p-3.75 border-b border-search-input">
			<div class="img-wrapper h-32.5">
				<img
					src="/public/sell/buyout_step_2.png"
					alt=""
					class="w-37.5 h-full"
				/>
			</div>
			<div class="info flex-1 flex flex-col justify-center items-center">
				<div class="text-xl font-medium tracking-brand-gender">免费顺丰</div>
				<div class="text-xl font-medium tracking-brand-gender">上门取衣</div>
			</div>
		</div>
		<div class="third-panel flex p-3.75 border-b border-search-input">
			<div class="img-wrapper h-32.5">
				<img
					src="/public/sell/buyout_step_3.png"
					alt=""
					class="w-37.5 h-full"
				/>
			</div>
			<div class="info flex-1 flex flex-col justify-center items-center">
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					审核通过
				</div>
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					立即打款
				</div>
			</div>
		</div>
		<div class="recycling p-3.75 mt-8.75 text-center">
			<h2 class="text-xl font-semibold">认真对待每件衣服</h2>
			<p class="mt-1 mb-5 text-hsh">每件衣服经过专业清洗后二次销售</p>
			<div class="recycle-img"></div>
		</div>
		<div class="qa pt-9.5 px-6.25 pb-8.5">
			<h2 class="text-xl font-semibold text-center">常见疑问</h2>
			<div class="qa-list mt-4.5">
				<div class="qa-item mb-6.75">
					<div class="question leading-1.5">Q：不收哪些？</div>
					<div class="answer text-hsh leading-category mt-1.25">
						<div class="no-buyout">
							<div>
								有污渍、破损、变形的衣服不收购；
								非正品服装不收。以及这些品类也不收购：
							</div>
							<div class="no-buyout-list flex">
								<div
									class="
										no-buyout-case
										flex-1 flex flex-col
										items-center
										-ml-5%
									"
								>
									<div class="case-image case1 self-stretch"></div>
									<div class="case-name">奢侈品</div>
								</div>
								<div class="no-buyout-case flex-1 flex flex-col items-center">
									<div class="case-image case2 self-stretch"></div>
									<div class="case-name">内衣裤</div>
								</div>
								<div class="no-buyout-case flex-1 flex flex-col items-center">
									<div class="case-image case3 self-stretch"></div>
									<div class="case-name">童装</div>
								</div>
								<div class="no-buyout-case flex-1 flex flex-col items-center">
									<div class="case-image case4 self-stretch"></div>
									<div class="case-name">包袋配饰鞋子</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="qa-item mb-6.75">
					<div class="question leading-1.5">
						Q：目前支持哪些区域的收购服务？
					</div>
					<div class="answer text-hsh leading-category mt-1.25">
						暂时只支持北京、上海、深圳、杭州、南京、苏州地区邮寄。
					</div>
				</div>
				<div class="qa-item mb-6.75">
					<div class="question leading-1.5">Q：卖衣服的物流费用谁承担？</div>
					<div class="answer text-hsh leading-category mt-1.25">
						卖衣服物流费用全部由多抓鱼承担，我们会安排顺丰上门取件。
					</div>
				</div>
				<div class="qa-item">
					<div class="question leading-1.5">Q：如何收到卖衣服的钱？</div>
					<div class="answer text-hsh leading-category mt-1.25">
						快递签收后，我们会在 1-3
						天内完成衣服的审核。审核完成后，会将审核结果发送给你。在订单详情页确认审核结果或提交取回订单后，收购费用将即刻打到你的多抓鱼账户。进入「我的
						-
						钱包」查看余额，可以随时提现到微信钱包，或用来购买多抓鱼的其他商品。
					</div>
				</div>
			</div>
		</div>
		<router-link to="/support/clothing-buyout" class="">
			<div
				class="
					border-t-0.5 border-menu border-b
					sell-clothing-rules
					px-3.75
					py-4.5
					text-shiwu
					flex
					justify-between
					text-load
				"
			>
				<p>详细的收购规则</p>
				<svg
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					xmlns="http://www.w3.org/2000/svg"
					class="w-hicon"
				>
					<polyline points="9 18 15 12 9 6"></polyline>
				</svg>
			</div>
		</router-link>
		<div class="footer fixed bottom-0 left-0 right-0 z-1 pb-16.5">
			<div class="mb-3.5 flex items-center justify-center">
				<button
					class="
						shadow
						text-lg
						font-medium
						text-white
						bg-load
						py-3
						px-9
						rounded-full
					"
				>
					提交衣服看估计
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SellClothing",
};
</script>

<style scoped>
.recycle-img {
	background-image: url("/public/sell/recycling_intro.png");
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
}
.recycle-img::before {
	content: "";
	display: block;
	padding-top: 69.98%;
}
.case1 {
	background-image: url("/public/sell/no_buyout_case_1.png");
}
.case2 {
	background-image: url("/public/sell/no_buyout_case_2.png");
}
.case3 {
	background-image: url("/public/sell/no_buyout_case_3.png");
}
.case4 {
	background-image: url("/public/sell/no_buyout_case_4.png");
}
.case-image {
	padding-top: 100%;
	background-size: 80%;
	background-position: center center;
	background-repeat: no-repeat;
}
.shadow {
	box-shadow: rgba(102, 102, 102, 0.5) 0px 1px 6px 0px;
}
</style>
