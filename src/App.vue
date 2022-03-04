<script>
import { ref } from "vue";
import Wrapper from "./components/Wrapper/Wrapper.vue";
export default {
	components: {
		Wrapper,
	},
	setup() {
		const isDark = ref(true);
		function toggleMode() {
			isDark.value = !isDark.value;
		}
		return {
			isDark,
			toggleMode,
		};
	},
};
</script>

<template>
	<div :class="isDark ? 'dark' : ''">
		<div class="bg-gray-100 dark:bg-darkbg">
			<wrapper />
			<div
				class="
					toggle
					absolute
					top-0
					right-0
					z-20
					p-3
					border-2
					dark:border-menu dark:text-white
				"
				@click="toggleMode"
			>
				{{ isDark ? "亮" : "暗" }}
			</div>
		</div>
	</div>
</template>

<style></style>
