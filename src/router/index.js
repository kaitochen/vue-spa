import Vue from 'vue'
import Router from 'vue-router'
import Init from '@/screen/Init'
import Main from '@/screen/Main'
import Detail from '@/screen/Detail'

Vue.use(Router)

export default new Router({
	// mode: 'history',
	scrollBehavior(to,from,savePosition){ // 在点击浏览器的“前进/后退”，或者切换导航的时候触发。
		console.log(to) // to：要进入的目标路由对象，到哪里去
		console.log(from) // from：离开的路由对象，哪里来
		console.log(savePosition) // savePosition：会记录滚动条的坐标，点击前进/后退的时候记录值{x:?,y:?}
		if(savePosition){
			window.scrollTo(savePosition)
		}else{
			window.scrollTo(0,0)
		}
	},
	routes: [
		{
			path: '/',
			name: 'Init',
			component: Init,
		}, {
			path: '/Main',
			name: 'Main',
			component: Main,
		}, {
			path: '/Detail/:id',
			name: 'Detail',
			component: Detail
		}
	]
})
