<!-- @format -->

<template>
	<div class="mb-body">
		<div class="card_wrapper" v-for="(item, id) in items" :key="id">
			<card :name="`${item.lvl} level`" :title="item.title">
				{{ item.descr }}
			</card>
		</div>
	</div>
</template>

<script>
import Card from '@/components/UI/Card.vue'

export default {
	components: { Card },
	data() {
		return {
			items: [
				{
					id: 1,
					title: 'Archer',
					descr: 'Archer, Archer, Archer',
					lvl: 4
				},
				{
					id: 2,
					title: 'Wizard',
					descr: 'Wizard, Wizard, Wizard',
					lvl: 5
				}
			]
		}
	}
}
</script>
