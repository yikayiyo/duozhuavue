<template>
	<div
		class="service-wrapper pt-5 px-15 pb-12.75 text-is-active dark:text-menu"
	>
		<video
			class="mb-12.5"
			controls=""
			preload="auto"
			src="https://asset.duozhuayu.com/service/welcome_to_dzy_factory.mp4"
			poster="https://asset.duozhuayu.com/service/cover.jpg"
		></video>
		<section class="mb-12.5">
			<div class="title text-service text-center mb-3.75">正版保证</div>
			<div class="">
				<p class="main-text text-shiwu leading-1.5 mb-5">
					为了保证每一本二手书都是正版，我们建立了正盗版数据库，目前已覆盖近万种高危盗版书并在不断扩充。盗版书将被拒收，或统一粉碎处理。
				</p>
				<img
					alt=""
					src="https://asset.duozhuayu.com/service/identifying.png"
					class=""
				/>
			</div>
		</section>
		<section class="mb-12.5">
			<div class="title text-service text-center mb-3.75">干净卫生</div>
			<div class="flex flex-col">
				<div class="flex-1 min-w-0 flex">
					<div class="pic-frame-container">
						<div class="text-center">
							<img
								alt=""
								src="https://asset.duozhuayu.com/service/cleaning.png"
								class="w-full"
							/>
							<div class="my-1.25 text-xs font-medium leading-category">
								清洁
							</div>
						</div>
					</div>
					<div class="ml-2">
						<div class="text-center">
							<img
								alt=""
								src="https://asset.duozhuayu.com/service/polishing.png"
								class="w-full"
							/>
							<div class="my-1.25 text-xs font-medium leading-category">
								打磨
							</div>
						</div>
					</div>
				</div>
				<div class="flex-1 min-w-0 flex">
					<div class="pic-frame-container">
						<div class="text-center">
							<img
								alt=""
								src="https://asset.duozhuayu.com/service/disinfection.png"
								class="w-full"
							/>
							<div class="my-1.25 text-xs font-medium leading-category">
								消毒
							</div>
						</div>
					</div>
					<div class="ml-2">
						<div class="text-center">
							<img
								alt=""
								src="https://asset.duozhuayu.com/service/packaging.png"
								class="w-full"
							/>
							<div class="my-1.25 text-xs font-medium leading-category">
								塑封
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mt-5">
				<img
					alt=""
					src="https://asset.duozhuayu.com/service/test_report.png"
					class="w-full"
				/>
				<a
					href="/support/disinfection-report"
					style="
						margin-top: 10px;
						display: inline-block;
						font-size: 14px;
						font-weight: normal;
					"
				>
					<span class="text-arrow flex">
						<span class="content">完整消毒检测报告</span>
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
					</span>
				</a>
			</div>
		</section>
		<section class="mb-12.5">
			<div class="title text-service text-center mb-3.75">品相自选</div>
			<div class="">
				<p class="main-text">
					多抓鱼干净的二手书分为良品、中品两个品相，对于新近出版的精选书籍还有自营全新品的选择。各品相对应的书况、中品的具体瑕疵都已注明。你可以根据自己喜好选择，甚至特意购买有划线和笔记的书。
				</p>
				<a class="inline-block mt-2.5 text-footer" href="/support/quality">
					<span class="text-arrow flex">
						<span class="content">品相分级规则</span>
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
					</span>
				</a>
			</div>
		</section>
		<section class="mb-12.5">
			<div class="title text-service text-center mb-3.75">发货时效</div>
			<div class="">
				<p class="main-text">
					17:00 前下单当日发货，17:00
					后下单次日发货。如遇节假日、促销活动等特殊时期，发货时间可能适当延长，具体以发货通知为准。
				</p>
			</div>
		</section>
	</div>
	<nav-footer></nav-footer>
</template>

<script>
import NavFooter from "../components/NavFooter/NavFooter.vue";
export default {
	name: "BookService",
	components: {
		NavFooter,
	},
};
</script>

<style></style>
