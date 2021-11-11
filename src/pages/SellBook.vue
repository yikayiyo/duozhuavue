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
					text-shiwu
					leading-category
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
					class="text-lg font-medium text-white bg-load py-3 px-9 rounded-full"
				>
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

<style></style>
