<template>
  <div class="electronics-buyout">
    <div class="nav-section pt-5 px-3.75">
      <h2 class="font-medium mb-1.5 leading-category">请选择产品</h2>
      <div class="second-nav flex flex-wrap" v-on:click="selectItem">
        <div
          class="second-nav-item bg-menu dark:bg-darkbg text-footer font-medium px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu"
          :style="selected === 'Kindle' ? buttonSelected : ''"
        >Kindle</div>
        <div
          class="second-nav-item bg-menu dark:bg-darkbg text-footer font-medium px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu"
          :style="selected === '无线耳机' ? buttonSelected : ''"
        >无线耳机</div>
        <div
          class="second-nav-item bg-menu dark:bg-darkbg text-footer font-medium px-4.5 py-2.25 mt-2.5 mr-4 rounded-menu"
          :style="selected === '游戏机' ? buttonSelected : ''"
        >游戏机</div>
      </div>
      <div class="kindle-entry text-hsh" v-if="selected === 'Kindle'">
        <div class="main-content py-5">
          <div class="tip-section mb-8.75">
            <div
              class="emphasis-section text-emphasis bg-emphasis-soft dark:bg-darkbg p-3 leading-1.6 mb-3.75 rounded whitespace-pre-wrap"
            >
              <p>有以下问题的暂时不收：</p>
              <ul class="text-hsh list-disc ml-3.75">
                <li>数据传输异常；账号登录异常</li>
                <li>充电异常；开机异常；网络无法连接 Wi-Fi</li>
                <li>选择具体型号后提示不收的情况</li>
              </ul>
            </div>
            <a href="#">
              <span class="text-load flex items-center">
                <span>更多关于 Kindle 收购的问题</span>
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
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </span>
            </a>
          </div>
          <div class="detail">
            <h2 class="text-base font-medium">型号</h2>
            <div
              class="select-version flex items-center justify-center mt-3.75 px-3.75 py-3.25 bg-search-input dark:bg-darkbg text-load"
            >
              <span>请选择 Kindle 型号</span>
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom fixed bottom-0 left-0 right-0 z-10">
        <div class="max-w-dzy mx-auto pt-2.5 px-5 pb-5 flex justify-center">
          <button
            class="h-11 text-shiwu font-medium bg-load text-white flex-1 rounded-99 cursor-not-allowed opacity-30"
            disabled
          >获得估价</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed, ref } from "vue";
export default {
  setup() {
    const selected = ref("Kindle");
    const selectItem = (e) => {
      selected.value = e.target.outerText
    }
    const buttonSelected = computed(() => {
      return {
        backgroundColor: "rgb(73, 119, 73)",
        color: "white"
      }
    })
    return {
      selected,
      selectItem,
      buttonSelected
    }
  }
}
</script>
<style></style>