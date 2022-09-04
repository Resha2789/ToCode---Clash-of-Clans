<!-- @format -->

<template>
	<carousel :settings="settings" :breakpoints="breakpoints">
		<slide class="card_wrapper" v-for="(item, id) in items" :key="id">
			<card
				:name="`${item.lvl} level`"
				:title="item.title"
				:imgUrl="item.img"
				:link="item.alias"
				class="carousel__item"
			>
				<template v-slot:body>
					{{ item.descr }}
				</template>
				<template v-slot:footer>
					<personState :item="item" />
				</template>
			</card>
		</slide>
		<template #addons>
			<navigation />
			<pagination />
		</template>
	</carousel>
</template>

<script>
import Card from '@/components/UI/Card'
import items from '@/seeders/items'
import PersonState from '@/components/UI/PersonState'

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default {
	components: {
		Card,
		PersonState,
		Carousel,
		Slide,
		Navigation
	},
	data() {
		return {
			items,
			settings: {
				itemsToShow: 2.5,
				snapAlign: 'center',
				wrapAround: true
			},
			breakpoints: {
				// 700px and up
				300: {
					itemsToShow: 1,
					snapAlign: 'center'
				},
				// 1024 and up
				1024: {
					itemsToShow: 3,
					snapAlign: 'center'
				}
			}
		}
	}
}
</script>

<style lang="scss">
.carousel__slide > .carousel__item {
	transform: scale(1);
	opacity: 0.5;
	transition: 0.5s;
}
.carousel__slide--visible > .carousel__item {
	opacity: 1;
	transform: rotateY(0);
}
.carousel__slide--next > .carousel__item {
	transform: scale(0.9) translate(-10px);
}
.carousel__slide--prev > .carousel__item {
	transform: scale(0.9) translate(10px);
}
.carousel__slide--active > .carousel__item {
	transform: scale(1.1);
}

.carousel__prev,
.carousel__next {
	background-color: #ec9b3b;
}
</style>
