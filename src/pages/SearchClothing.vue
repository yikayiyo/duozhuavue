<template>
	<div class="container">
		<div class="search-wrapper pt-5 px-3.75 pb-3.75 text-footer">
			<div class="search w-full flex items-center relative">
				<div class="icon-wrapper absolute p-1.5 left-1">
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
					placeholder="搜索服饰品牌、分类"
					class="
						flex-1
						py-2.25
						pr-4
						pl-9
						border-0
						rounded
						bg-search-input
						outline-none
					"
					value=""
				/>
			</div>
		</div>
		<div class="clothing-wrapper">
			<section class="brands-wrapper pt-5 px-6.25 pb-7.5">
				<div class="brands flex">
					<div class="gender min-w-0 flex-1 mr-6.25">
						<h1
							class="text-brand-gender font-bold tracking-brand-gender mb-1.25"
						>
							女装
						</h1>
						<ul class="brands-items text-sm divide-y divide-menu">
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									1
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										飒拉
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									2
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										UNIQLO 优衣库
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									3
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										COS
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									4
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										Levi's 李维斯
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									5
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										URBAN REVIVO
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									6
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										NIKE 耐克
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div class="gender min-w-0 flex-1">
						<h1
							class="text-brand-gender font-bold tracking-brand-gender mb-1.25"
						>
							男装
						</h1>
						<ul class="brands-items text-sm divide-y divide-menu">
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									1
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										UNIQLO 优衣库
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									2
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										ZARA 飒拉
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									3
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										COS
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									4
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										CROQUIS 速写
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									5
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										CALVIN KLEIN
									</div>
								</a>
							</li>
							<li class="brand-item flex items-center">
								<div class="min-w-4 mr-1.25 font-semibold italic flex-shrink-0">
									6
								</div>
								<a href="#" class="min-w-0">
									<div
										class="
											font-bold
											py-3
											overflow-hidden overflow-ellipsis
											whitespace-nowrap
										"
									>
										Abercrombie & Fitch
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
				<div
					class="
						load-more-btn
						py-1.875
						text-sm text-center
						font-bold
						rounded-load
						mt-2
						text-load
						bg-load-more
						cursor-pointer
					"
				>
					展开更多热门品牌
				</div>
			</section>
			<section class="categories"></section>
		</div>
		<div class="text flex">
			<div class="bg-red-50 flex-auto">
				<div class="w-20">1</div>
			</div>
			<div class="bg-red-100 flex-1">2</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
