/** @format */

import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from '@/pages/home'
import AboutPage from '@/pages/about'
import NotFound from '@/pages/notFound'

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
