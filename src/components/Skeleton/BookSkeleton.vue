<template>
  <div class="container-wrapper relative">
    <div class="book-wrapper pb-12.75">
      <div
        class="book-header relative px-3.75 pt-7.5 pb-7 overflow-hidden flex flex-col items-center"
      >
        <div class="image-wrapper absolute -inset-50 z-10"></div>
        <div class="image w-37.5 h-50 relative z-20"></div>
      </div>
      <div class="book-main pt-4.5 mx-3.75">
        <div class="book-info leading-category pb-3.75">
          <h1 class="text-xl font-medium text-is-active dark:text-white">
            书名
          </h1>
          <div class="subtitle mt-0.75 mb-4.5 text-hsh">子标题</div>
          <div class="price-wrapper mt-4.25 flex items-center">
            <span class="text-2xl font-medium">
              价格
              <span class="text-hsh">起</span>
            </span>
            <div class="label-wrapper mx-1.5 text-label">折扣</div>
          </div>
          <div class="p-wrapper mt-3.5 text-hsh leading-1.69">
            <p class="original-price flex">
              <span class="tag">原价</span>
            </p>
            <p class="author flex">
              <span class="tag">作者</span>
            </p>
            <p class="publisher flex">
              <span class="tag">出版社</span>
            </p>
            <p class="publish-date flex">
              <span class="tag">出版</span>
            </p>
            <p class="binding flex">
              <span class="tag">装帧</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
