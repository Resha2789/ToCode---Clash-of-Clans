<!-- @format -->

<template>
	<div class="mb-body">
		<div class="card_wrapper" v-for="(item, id) in items" :key="id">
			<card
				:name="`${item.lvl} level`"
				:title="item.title"
				:imgUrl="item.img"
				:link="item.alias"
			>
				<template v-slot:body>
					{{ item.descr }}
				</template>
				<template v-slot:footer>
					<div class="card-stats">
						<div
							class="one-third"
							v-for="(stat, index) in item.info"
							:key="index"
						>
							<div class="stat-value">
								{{ stat.value }}
							</div>
							<div class="stat">
								{{ stat.title }}
							</div>
						</div>
					</div>
				</template>
			</card>
		</div>
	</div>
</template>

<script>
import Card from '@/components/UI/Card.vue'
import items from '@/seeders/items'

export default {
	components: { Card },
	data() {
		return {
			items
		}
	}
}
</script>

<style lang="scss">
.card_wrapper {
	text-align: center;
}
</style>
