<template>
	<search :link="searchLink" :placeholder="searchPlaceholder" :showIcon="searchShowIcon" />
	<div class="home-electronics pb-12">
		<div class="nav-section flex flex-wrap pt-1.25 px-3.75 pb-0 text-footer font-medium text-black">
			<div class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu-active text-white">全部</div>
			<div
				class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu dark:text-white dark:bg-darkborder"
			>kindle</div>
			<div
				class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu dark:text-white dark:bg-darkborder"
			>耳机</div>
			<div
				class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu dark:text-white dark:bg-darkborder"
			>游戏机</div>
		</div>
		<div class="feed-section flex flex-wrap justify-between pt-3.75">
			<div class="pt-3.75 px-3.75 flex flex-wrap justify-between">
				<div class="flex flex-col justify-between w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper aspect-w-1 aspect-h-1">
						<img
							:src="'https://duozhuavue-images.netlify.app/images/kindle.png' + srcSize"
							alt="kindle"
							class="rounded dark:bg-white w-full h-full"
						/>
					</div>
					<div class="tags-wrapper">
						<ul>
							<span class="item-tag">Kindle</span>
						</ul>
					</div>
					<div class="title-wrapper mt-2.25">
						<h2>亚马逊 Kindle 青春版 电子书阅读器</h2>
					</div>
					<div class="purchase flex items-center">
						<span>¥328</span>
						<span class="Label Label--following Label--emphasis">二手 5 折</span>
					</div>
				</div>
				<div class="flex flex-col justify-between w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper aspect-w-1 aspect-h-1">
						<img
							src="https://raw.githubusercontent.com/yikayiyo/duozhuavue-imgs/main/airpods.jpeg"
							alt
							class="rounded dark:bg-white w-full h-full"
						/>
					</div>
					<div class="tags-wrapper">
						<ul>
							<span class="item-tag">入门级耳机</span>
							<span class="item-tag">Apple</span>
						</ul>
					</div>
					<div class="title-wrapper mt-2.25">
						<h2>Apple AirPods 第一代真无线耳机</h2>
					</div>
					<div class="purchase flex items-center">
						<span>¥348</span>
						<span class="Label Label--following Label--emphasis">二手 2.7 折</span>
					</div>
				</div>
				<div class="flex flex-col justify-between w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper sold-out aspect-w-1 aspect-h-1">
						<img
							src="https://raw.githubusercontent.com/yikayiyo/duozhuavue-imgs/main/b%260.jpeg"
							alt
							class="rounded dark:bg-white w-full h-full"
						/>
					</div>
					<div class="tags-wrapper">
						<ul>
							<span class="item-tag">运动耳机</span>
							<span class="item-tag">B&amp;O</span>
						</ul>
					</div>
					<div class="title-wrapper mt-2.25">
						<h2>B&O Beoplay E6 Motion 无线耳机</h2>
					</div>
					<div class="purchase flex items-center">
						<span class>¥808</span>
						<span class="Label Label--following Label--emphasis">二手 3.5 折</span>
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
import { ref } from 'vue';
import Search from "../components/Search/Search.vue";
import useWindowWidth from "../hooks/useWindowWidth";
const searchPlaceholder = "搜索 Kindle、耳机、游戏机";
const searchLink = "/search/electronics";
const searchShowIcon = true;
// 根据屏幕大小确定请求的图片大小
const srcSize = ref("?nf_resize=fit&w=250");
const screenWidth = useWindowWidth();
if (screenWidth.value <= 375) {
	srcSize.value = "?nf_resize=fit&w=150"
}
else if (screenWidth.value <= 480) {
	srcSize.value = "?nf_resize=fit&w=200"
}
</script>

<style sco Searchped>
.item-tag {
	display: inline-block;
	margin-left: 4px;
	padding: 0px 8px;
	border-radius: 13px;
	background-color: rgba(73, 119, 73, 0.06);
	color: rgb(73, 119, 73);
	font-size: 12px;
	font-weight: 400;
	line-height: 1.67;
	text-align: left;
	cursor: pointer;
}
.dark .item-tag {
	color: #f2f2f2;
	background-color: #2f3336;
}

.Label {
	box-sizing: border-box;
	display: inline-flex;
	align-items: center;
	height: 18px;
	padding: 0 6px;
	color: rgb(214, 186, 140);
	font-size: 12px;
	font-weight: 400;
	border: 1px solid rgb(214, 186, 140);
	border-radius: 4px;
	white-space: nowrap;
}

.Label--emphasis {
	color: rgb(242, 129, 129);
	border-color: rgb(242, 129, 129);
}

.Label--following {
	margin-left: 5px;
}

.link-wrapper {
	position: relative;
}

.sold-out::after {
	content: "暂时无货";
	width: 84px;
	height: 32px;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%) rotate(-12deg);
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
	padding: 4px 10px;
	color: white;
}
</style>
