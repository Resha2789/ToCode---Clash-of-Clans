<!-- @format -->

<template>
	<div class="card-stats">
		<div class="one-third" v-for="(stat, index) in item.info" :key="index">
			<div class="stat-value">
				{{ stat.value }}
			</div>
			<div class="stat">
				{{ stat.title }}
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		item: {
			type: Object,
			required: true
		}
	}
}
</script>
