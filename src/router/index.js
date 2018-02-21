import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Detail from '@/components/Detail'
import List from '@/components/List'
import Write from '@/components/Write'
import BootstrapVue from 'bootstrap-vue'

Vue.use(Router)
Vue.use(BootstrapVue)
Vue.use(require('vue-model'))

export default new Router({
  routes: [
    {
		path: '/',
		component: HelloWorld
    },
    {
    	path: '/',
    	componet: Write
    },
    {
    	path: '/list',
    	compoent: List
    },
    {
		path: '/detail',
		component: Detail
    }
  ]
})
