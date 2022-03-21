<template>
	<div class="flex flex-col pb-12">
		<div class="pt-3.75 px-3.75 flex flex-wrap justify-between">
			<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
				<div class="link-wrapper aspect-w-1 aspect-h-1">
					<div>
						<img :src="wc" alt class="rounded w-full h-full bg-menu dark:bg-white" />
					</div>
				</div>
				<div class="title-wrapper mt-2.25">
					<h2>大白猫玩偶</h2>
					<div class="purchase flex">
						<div>
							<span>88 元</span>
						</div>
						<div class="ml-2.25">
							<span>或</span>
						</div>
						<div class="flex ml-2.25 items-center">
							<div>
								<img :src="fishIcon" alt class="h-5 self-center" />
							</div>
							<span class="ml-2.25">* 88</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
				<div class="link-wrapper aspect-w-1 aspect-h-1">
					<div>
						<img :src="bc" alt class="rounded w-full h-full bg-menu dark:bg-white" />
					</div>
				</div>
				<div class="title-wrapper mt-2.25">
					<h2>大黑猫玩偶</h2>
					<div class="purchase flex">
						<div>
							<span>88 元</span>
						</div>
						<div class="ml-2.25">
							<span>或</span>
						</div>
						<div class="flex ml-2.25 items-center">
							<div>
								<img :src="fishIcon" alt class="h-5 self-center" />
							</div>
							<span class="ml-2.25">* 88</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
				<div class="link-wrapper aspect-w-1 aspect-h-1">
					<div>
						<img :src="swc" alt class="rounded w-full h-full bg-menu dark:bg-white" />
					</div>
				</div>
				<div class="title-wrapper mt-2.25">
					<h2>小白猫玩偶</h2>
					<div class="purchase flex">
						<div>
							<span>33 元</span>
						</div>
						<div class="ml-2.25">
							<span>或</span>
						</div>
						<div class="flex ml-2.25 items-center">
							<div>
								<img :src="fishIcon" alt class="h-5 self-center" />
							</div>
							<span class="ml-2.25">* 33</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
				<div class="link-wrapper aspect-w-1 aspect-h-1">
					<div>
						<img :src="sbc" alt class="rounded w-full h-full bg-menu dark:bg-white" />
					</div>
				</div>
				<div class="title-wrapper mt-2.25">
					<h2>小黑猫玩偶</h2>
					<div class="purchase flex">
						<div>
							<span>33 元</span>
						</div>
						<div class="ml-2.25">
							<span>或</span>
						</div>
						<div class="flex ml-2.25 items-center">
							<div>
								<img :src="fishIcon" alt class="h-5 self-center" />
							</div>
							<span class="ml-2.25">* 33</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
				<div class="link-wrapper aspect-w-1 aspect-h-1">
					<div>
						<img :src="bag" alt class="rounded w-full h-full bg-menu dark:bg-white" />
					</div>
				</div>
				<div class="title-wrapper mt-2.25">
					<h2>麻布袋</h2>
					<div class="purchase flex">
						<div>
							<span>55 元</span>
						</div>
						<div class="ml-2.25">
							<span>或</span>
						</div>
						<div class="flex ml-2.25 items-center">
							<div>
								<img :src="fishIcon" alt class="h-5 self-center" />
							</div>
							<span class="ml-2.25">* 55</span>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
				<div class="link-wrapper aspect-w-1 aspect-h-1">
					<div>
						<img :src="paper" alt class="rounded w-full h-full bg-menu dark:bg-white" />
					</div>
				</div>
				<div class="title-wrapper mt-2.25">
					<h2>表情包贴纸</h2>
					<div class="purchase flex">
						<div class="flex items-center">
							<img :src="fishIcon" alt class="h-5 self-center" />
							<span class="ml-2.25">* 5</span>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="footer flex justify-center text-gray-300 dark:text-darkborder py-7.5 text-footer">
			<div class="flex items-center">
				<div class="w-10 border-t border-current"></div>
				<svg
					width="12"
					viewBox="0 0 24 24"
					fill="currentColor"
					xmlns="http://www.w3.org/2000/svg"
					class="mx-2.25 transform rotate-45"
				>
					<rect x="4" y="4" width="16" height="16" class />
				</svg>
				<div class="w-10 border-t border-current"></div>
			</div>
		</div>
	</div>
</template>

<script setup>
import wc from "../assets/originals/wc.jpeg";
import swc from "../assets/originals/swc.jpeg";
import bc from "../assets/originals/bc.jpeg";
import sbc from "../assets/originals/sbc.jpeg";
import bag from "../assets/originals/bag.jpeg";
import paper from "../assets/originals/paper.jpeg";
import fishIcon from "../assets/fish_icon.png";
</script>
<script>
export default {
	name: "Original",
};
</script>

<style scoped></style>
