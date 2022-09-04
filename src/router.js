/** @format */

import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFound from '@/pages/notFound'
import ItemAlias from '@/components/itemAlias'
import items from '@/seeders/items'

const history = createWebHashHistory()

const routes = [
	{
		path: '/',
		name: 'home',
		component: HomePage
	},
	{
		path: '/about',
		name: 'about',
		component: AboutPage
	},
	{
		path: '/:itemAlias',
		name: 'itemAlias',
		component: ItemAlias,
		beforeEnter(to, from) {
			const exists = items.find(el => el.alias === to.params.itemAlias)
			if (!exists) {
				return {
					name: '404'
				}
			}
		}
	},
	{
		path: '/:pathMatch(.*)*',
		name: '404',
		component: NotFound
	}
]

const router = createRouter({
	routes,
	history
})

export default router
