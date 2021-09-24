<template>
	<search
		:link="searchLink"
		:placeholder="searchPlaceholder"
		:showIcon="searchShowIcon"
	/>
	<div class="home-electronics pb-12">
		<div
			class="
				nav-section
				flex flex-wrap
				pt-1.25
				px-3.75
				pb-0
				text-footer
				font-medium
				text-black
			"
		>
			<div
				class="
					nav-item
					px-4.5
					py-2.25
					mt-2.5
					mr-4
					rounded-menu
					bg-menu-active
					text-white
				"
			>
				全部
			</div>
			<div class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu">
				kindle
			</div>
			<div class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu">
				耳机
			</div>
			<div class="nav-item px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu bg-menu">
				游戏机
			</div>
		</div>
		<div class="feed-section flex flex-wrap justify-between pt-3.75 px-3.75">
			<div class="pt-3.75 px-3.75 flex flex-wrap justify-between">
				<div class="flex flex-col justify-between w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper">
						<a href="">
							<img
								src="https://img.duozhuayu.com/63e8f58eaa2011eab1b500163e06ce9f.png"
								alt=""
								class="rounded"
							/>
						</a>
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
						<span class="Label Label--following Label--emphasis"
							>二手 5 折</span
						>
					</div>
				</div>
				<div class="flex flex-col justify-between w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper">
						<a href="">
							<img
								src="https://img.duozhuayu.com/441d4e2a2fb411eb9f81d29b61c245d0.jpeg"
								alt=""
								class="rounded"
							/>
						</a>
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
						<span class="Label Label--following Label--emphasis"
							>二手 2.7 折</span
						>
					</div>
				</div>
				<div class="flex flex-col justify-between w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper sold-out">
						<a href="">
							<img
								src="https://img.duozhuayu.com/6d14111c0ebf11ebb50e00163e06ce9f.jpeg"
								alt=""
							/>
						</a>
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
						<span class="">¥808</span>
						<span class="Label Label--following Label--emphasis"
							>二手 3.5 折</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import Search from "../components/Search/Search.vue";
export default {
	data() {
		return {
			searchPlaceholder: "搜索 Kindle、耳机、游戏机",
			searchLink: "/search/electronics",
			searchShowIcon: true,
		};
	},
	components: {
		Search,
	},
};
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

.sold-out::after {
	content: "暂时无货";
	display: inline-block;
	background-color: rgba(0, 0, 0, 0.5);
	border-radius: 4px;
	font-size: 16px;
	font-weight: 400;
	padding: 10px;
	color: white;
	transform: translate(100%, -332%) rotate(-12deg);
}
</style>
