<template>
	<div class="search-wrapper flex pt-5 px-3.75 pb-3.75">
		<div class="left flex-grow">
			<a class="flex items-center relative" href="/electronics/search">
				<div class="search-input-button p-1.5 absolute left-1">
					<svg
						width="20px"
						height="20px"
						viewBox="0 0 20 20"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
							<path
								d="M4.92926182,4.43309524 C7.5052251,1.85713196 11.6829004,1.85834556 14.2603607,4.43580588 C16.6839335,6.85937868 16.8297062,10.6977887 14.6969054,13.2890629 L17.8535358,16.4483686 C18.0484555,16.6438126 18.0484555,16.9602367 17.8535358,17.1556807 L17.7776353,17.2316253 C17.604302,17.4054245 17.3349035,17.4248082 17.1399984,17.289871 L17.070734,17.232036 L17.070734,17.2316253 L13.9239066,14.0833736 C11.3325723,16.3380487 7.39916198,16.2313836 4.93197246,13.7641941 C2.35451214,11.1867338 2.35329854,7.00905853 4.92926182,4.43309524 Z M13.4123254,5.28384118 C11.3034942,3.17501 7.88539628,3.17401706 5.77778996,5.28162338 C3.67018364,7.3892297 3.67117658,10.8073276 5.78000776,12.9161588 C7.88883893,15.02499 11.3069369,15.0259829 13.4145432,12.9183766 C13.4695242,12.8633956 13.5230703,12.8075227 13.5751814,12.7508045 C13.6010889,12.7226086 13.6267662,12.6940624 13.6520853,12.665311 L13.5751814,12.7508045 C13.626104,12.6953799 13.6756564,12.6391481 13.7238386,12.5821525 L13.6520853,12.665311 C13.70224,12.6083573 13.7509893,12.5505985 13.7983333,12.4920795 L13.7238386,12.5821525 C15.5164394,10.4616497 15.4123853,7.28390106 13.4123254,5.28384118 Z"
								stroke="#AAAAAA"
								stroke-width="0.2"
								fill="#AAAAAA"
							></path>
						</g>
					</svg>
				</div>
				<input
					type="search"
					readonly=""
					placeholder="搜索 Kindle、耳机、游戏机"
					class="w-full pl-9 py-2 border-0 rounded bg-gray-100 outline-none"
				/>
			</a>
		</div>
		<div class="right ml-4.5">
			<a
				class="flex flex-col h-full items-center justify-evenly"
				href="/categories/electronics"
				><svg width="20" height="20">
					<path
						d="M17.718 11c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v5.436c0 .446-.046.607-.134.77a.909.909 0 01-.378.378c-.163.088-.324.134-.77.134h-5.436c-.446 0-.607-.046-.77-.134a.909.909 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-5.436c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h5.436zm-10 0c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v5.436c0 .446-.046.607-.134.77a.909.909 0 01-.378.378c-.163.088-.324.134-.77.134H2.282c-.446 0-.607-.046-.77-.134a.909.909 0 01-.378-.378c-.088-.163-.134-.324-.134-.77v-5.436c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h5.436zm9.782 1.5h-5v5h5v-5zm-10 0h-5v5h5v-5zM17.718 1c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v5.436c0 .446-.046.607-.134.77a.909.909 0 01-.378.378c-.163.088-.324.134-.77.134h-5.436c-.446 0-.607-.046-.77-.134a.909.909 0 01-.378-.378c-.088-.163-.134-.324-.134-.77V2.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h5.436zm-10 0c.446 0 .607.046.77.134.163.087.291.215.378.378.088.163.134.324.134.77v5.436c0 .446-.046.607-.134.77a.909.909 0 01-.378.378c-.163.088-.324.134-.77.134H2.282c-.446 0-.607-.046-.77-.134a.909.909 0 01-.378-.378C1.046 8.325 1 8.164 1 7.718V2.282c0-.446.046-.607.134-.77a.909.909 0 01.378-.378c.163-.088.324-.134.77-.134h5.436zM17.5 2.5h-5v5h5v-5zm-10 0h-5v5h5v-5z"
						fill="#333"
						fill-rule="nonzero"
					></path>
				</svg>
				<div class="text-cbl font-medium leading-cbl">分类</div></a
			>
		</div>
	</div>
	<div class="home-electronics">
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
				<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper">
						<a href="">
							<img
								src="https://img.duozhuayu.com/63e8f58eaa2011eab1b500163e06ce9f.png"
								alt=""
								class="rounded"
							/>
						</a>
					</div>
					<div class="title-wrapper mt-2.25">
						<h2>亚马逊 Kindle 青春版 电子书阅读器</h2>
						<div class="purchase flex">
							<div>
								<span>¥328</span>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-col w-[calc(50%-7.5px)] mb-7.5">
					<div class="link-wrapper">
						<a href="">
							<img
								src="https://img.duozhuayu.com/441d4e2a2fb411eb9f81d29b61c245d0.jpeg"
								alt=""
								class="rounded"
							/>
						</a>
					</div>
					<div class="title-wrapper mt-2.25">
						<h2>Apple AirPods 第一代真无线耳机</h2>
						<div class="purchase flex">
							<div>
								<span>¥348</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
