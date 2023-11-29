<template>
  <div
    class="flex h-12 items-center justify-evenly border-b-0.5 border-t-0.5 border-gray-300 font-medium tracking-wide text-gray-400 dark:border-darkborder"
  >
    <router-link
      :active-class="$route.path === '/book' ? 'is-active' : ''"
      to="/book"
    >
      <span>图书</span>
    </router-link>
    <router-link
      to="/clothing"
      :active-class="$route.path === '/clothing' ? 'is-active' : ''"
      ><span>服饰</span></router-link
    >
    <router-link
      to="/electronics"
      :active-class="$route.path === '/electronics' ? 'is-active' : ''"
      ><span>电子</span></router-link
    >
    <router-link
      to="/original"
      :active-class="$route.path === '/original' ? 'is-active' : ''"
      ><span>原创商品</span></router-link
    >
  </div>
</template>

<script>
export default {
  name: "NavHeader",
};
</script>

<style scoped>
.dark .is-active {
  color: white;
}

.is-active {
  color: rgb(51, 51, 51);
}

.is-active span {
  position: relative;
}

.is-active span::after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -14px;
  height: 2px;
  border-radius: 999px;
  background-color: black;
}
.dark .is-active span::after {
  background-color: white;
}
</style>
