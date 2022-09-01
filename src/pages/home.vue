<!-- @format -->

<template>
	<div class="mb-body">
		<div class="card_wrapper" v-for="(item, id) in items" :key="id">
			<card
				:name="`${item.lvl} level`"
				:title="item.title"
				:imgUrl="item.imgUrl"
			>
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
					lvl: 4,
					imgUrl: require('@/assets/Img/archer.png')
				},
				{
					id: 2,
					title: 'Wizard',
					descr: 'Wizard, Wizard, Wizard',
					lvl: 5,
					imgUrl: require('@/assets/Img/wizard.png')
				}
			]
		}
	}
}
</script>
