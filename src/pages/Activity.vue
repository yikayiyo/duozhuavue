<template>
	<div class="activity-list bg-white dark:bg-black pt-4 pb-12">
		<ActivityItem v-for="i in 1 + Math.floor(Math.random() * 10)" :key="i" />
	</div>
</template>

<script>
import ActivityItem from "../components/MainSection/ActivityItem.vue"
export default {
	name: "Activity",
	components: {
		ActivityItem
	}
};
</script>

<style></style>
