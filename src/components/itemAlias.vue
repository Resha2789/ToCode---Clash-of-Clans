<!-- @format -->

<template>
	<div class="wrapper-person">
		<div v-if="item">
			<img :src="item.img" :alt="item.descr" />
			<h1 class="title" style="color: #ffffff">{{ item.title }}</h1>
			<p>{{ item.descr }}</p>
			<br />
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
			<div>
				<router-link to="/" class="btn btnPrimary">Back to home</router-link>
			</div>
		</div>
	</div>
</template>

<script>
import items from '@/seeders/items'

export default {
	data() {
		item: null
	},

	created() {
		const itemAlias = this.$route.params.itemAlias
		this.item = items.find(el => el.alias === itemAlias)
	}
}
</script>

<style lang="scss">
.wrapper-person {
	text-align: center;
	.card-stats {
		border-radius: 14px;
		margin: 30px 0;
	}
}
</style>
