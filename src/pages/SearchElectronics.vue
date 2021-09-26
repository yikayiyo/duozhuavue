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
					placeholder="搜索 Kindle、耳机、游戏机"
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
		<div class="categories-wrapper px-2.5">
			<div class="categories">
				<div class="category mb-2.5">
					<div class="category__title p-2.5 text-elc text-left font-medium">
						Kindle
					</div>
					<div class="category__items flex flex-wrap">
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-kindle bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">Kindle</div>
						</a>
					</div>
					<div class="divider mx-2.5 my-3.75 border-b-0.5"></div>
				</div>
				<div class="category mb-2.5">
					<div class="category__title p-2.5 text-elc text-left font-medium">
						耳机
					</div>
					<div class="category__items flex flex-wrap">
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-elh bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">
								入门级耳机
							</div>
						</a>
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-sh bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">
								运动耳机
							</div>
						</a>
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-nch bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">
								降噪耳机
							</div>
						</a>
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-hrh bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">
								高音质耳机
							</div>
						</a>
					</div>
					<div class="divider mx-2.5 my-3.75 border-b-0.5"></div>
				</div>
				<div class="category mb-2.5">
					<div class="category__title p-2.5 text-elc text-left font-medium">
						游戏机
					</div>
					<div class="category__items flex flex-wrap">
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-switch bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">Switch</div>
						</a>
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-ps bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">
								PlayStation
							</div>
						</a>
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-xbox bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">Xbox</div>
						</a>
						<a
							class="
								category__item
								px-1.875
								py-2.5
								flex flex-col
								items-center
								max-w-elc
							"
						>
							<div
								class="
									category__item__image
									w-20
									h-20
									bg-swc bg-search-input bg-60% bg-center bg-no-repeat
								"
							></div>
							<div class="category__item__text mt-1.25 text-footer">
								Switch 游戏卡带
							</div>
						</a>
					</div>
					<div class="divider mx-2.5 my-3.75"></div>
				</div>
			</div>
			<div class="footer flex justify-center text-gray-300 py-7.5 text-footer">
				<div class="flex items-center">
					<div class="w-10 border-t border-current"></div>
					<svg
						width="12"
						viewBox="0 0 24 24"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						class="mx-2.25 transform rotate-45"
					>
						<rect x="4" y="4" width="16" height="16" class=""></rect>
					</svg>
					<div class="w-10 border-t border-current"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style></style>
