<!-- @format -->

<template>
	<div class="wrapper-person">
		<img :src="item.img" :alt="item.descr" />
		<h1 class="title" style="color: #ffffff">{{ item.title }}</h1>
		<p>{{ item.descr }}</p>
		<br />
		<personState :item="item" />
		<div>
			<router-link to="/" class="btn btnDanger">Back to home</router-link>
		</div>
	</div>
</template>

<script>
import items from '@/seeders/items'
import PersonState from '@/components/UI/PersonState'

export default {
	components: {
		PersonState
	},

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
