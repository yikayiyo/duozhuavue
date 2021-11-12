<template>
	<div class="sell-book-wrapper leading-category text-is-active min-h-screen">
		<div class="first-panel flex p-3.75 border-b border-search-input">
			<div class="img-wrapper h-32.5">
				<img
					src="/public/sell/sell_book_intro_1.png"
					alt=""
					class="w-37.5 h-full"
				/>
			</div>
			<div class="info flex-1 flex flex-col justify-center items-center">
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					手机扫码
				</div>
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					看收购价
				</div>
				<div class="text-footer text-load mt-1.5 flex items-center">
					<button>什么书不收</button>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						class="w-hicon"
						width="16"
						height="16"
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>
			</div>
		</div>
		<div class="second-panel flex p-3.75 border-b border-search-input">
			<div class="img-wrapper h-32.5">
				<img
					src="/public/sell/sell_book_intro_2.png"
					alt=""
					class="w-37.5 h-full"
				/>
			</div>
			<div class="info flex-1 flex flex-col justify-center items-center">
				<div class="text-xl font-medium tracking-brand-gender">快递免费</div>
				<div class="text-xl font-medium tracking-brand-gender">上门取书</div>
			</div>
		</div>
		<div class="third-panel flex p-3.75 border-b border-search-input">
			<div class="img-wrapper h-32.5">
				<img
					src="/public/sell/sell_book_intro_3.png"
					alt=""
					class="w-37.5 h-full"
				/>
			</div>
			<div class="info flex-1 flex flex-col justify-center items-center">
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					审核通过
				</div>
				<div class="text-xl font-medium leading-category tracking-brand-gender">
					书款到账
				</div>
				<div class="text-footer text-load mt-1.5 flex items-center">
					<button>什么是审核</button>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						xmlns="http://www.w3.org/2000/svg"
						class="w-hicon"
						width="16"
						height="16"
					>
						<polyline points="6 9 12 15 18 9"></polyline>
					</svg>
				</div>
			</div>
		</div>

		<router-link to="/support?section=sell" class="">
			<div
				class="
					sell-book-rules
					px-3.75
					py-4.5
					border-b border-search-input
					text-shiwu text-load
					flex
					justify-between
				"
			>
				<p>了解卖书规则</p>
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
		<div class="footer fixed bottom-0 left-0 right-0 z-1">
			<div class="mb-3.5 flex items-center justify-center">
				<button
					class="
						hasShadow
						text-lg
						font-medium
						text-white
						bg-load
						py-3
						px-9
						rounded-full
						flex
					"
				>
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 20 20"
						style="margin-right: 10px; width: 24px; height: 24px"
					>
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<path
								d="M15.9049327,18 L13.0493274,18 C12.6475336,18 12.3318386,17.6840215 12.3318386,17.2818671 C12.3318386,16.8797127 12.6475336,16.5637343 13.0493274,16.5637343 L15.9049327,16.5637343 C16.2636771,16.5637343 16.5650224,16.2621185 16.5650224,15.9030521 L16.5650224,13.0448833 C16.5650224,12.6427289 16.8807175,12.3267504 17.2825112,12.3267504 C17.6843049,12.3267504 18,12.6427289 18,13.0448833 L18,15.9030521 C17.9856502,17.0520646 17.0529148,18 15.9049327,18 L15.9049327,18 Z M2.73183857,7.67324955 C2.33004484,7.67324955 2.01434978,7.3572711 2.01434978,6.9551167 L2.01434978,4.09694794 C2.01434978,2.94793537 2.9470852,2 4.10941704,2 L6.96502242,2 C7.36681614,2 7.68251121,2.31597846 7.68251121,2.71813285 C7.68251121,3.12028725 7.36681614,3.43626571 6.96502242,3.43626571 L4.09506726,3.43626571 C3.73632287,3.43626571 3.43497758,3.73788151 3.43497758,4.09694794 L3.43497758,6.9551167 C3.44932735,7.3572711 3.11928251,7.67324955 2.73183857,7.67324955 Z M17.2681614,7.67324955 C16.8663677,7.67324955 16.5506726,7.3572711 16.5506726,6.9551167 L16.5506726,4.09694794 C16.5506726,3.73788151 16.2493274,3.43626571 15.890583,3.43626571 L13.0349776,3.43626571 C12.6331839,3.43626571 12.3174888,3.12028725 12.3174888,2.71813285 C12.3174888,2.31597846 12.6331839,2 13.0349776,2 L15.890583,2 C17.038565,2 17.9856502,2.93357271 17.9856502,4.09694794 L17.9856502,6.9551167 C17.9856502,7.3572711 17.6699552,7.67324955 17.2681614,7.67324955 Z M6.96502242,18 L4.09506726,18 C2.9470852,18 2,17.0664273 2,15.9030521 L2,13.0448833 C2,12.6427289 2.31569507,12.3267504 2.71748879,12.3267504 C3.11928251,12.3267504 3.43497758,12.6427289 3.43497758,13.0448833 L3.43497758,15.9030521 C3.43497758,16.2621185 3.73632287,16.5637343 4.09506726,16.5637343 L6.95067265,16.5637343 C7.35246637,16.5637343 7.66816143,16.8797127 7.66816143,17.2818671 C7.66816143,17.6840215 7.35246637,18 6.96502242,18 Z M15.4313901,10.7755835 L4.56860987,10.7755835 C4.16681614,10.7755835 3.85112108,10.459605 3.85112108,10.0574506 C3.85112108,9.65529623 4.16681614,9.33931777 4.56860987,9.33931777 L15.4313901,9.33931777 C15.8331839,9.33931777 16.1488789,9.65529623 16.1488789,10.0574506 C16.1488789,10.459605 15.8188341,10.7755835 15.4313901,10.7755835 Z"
								fill="currentColor"
								fill-rule="nonzero"
							></path>
						</g>
					</svg>
					扫码卖书
				</button>
			</div>
			<div
				class="
					mb-3.5
					pb-1.5
					flex
					items-center
					justify-center
					text-hsh text-sold-out
					cursor-pointer
				"
			>
				手动输入 ISBN
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "SellBook",
};
</script>

<style scoped>
.hasShadow {
	box-shadow: rgba(102, 102, 102, 0.5) 0px 1px 6px 0px;
}
</style>
