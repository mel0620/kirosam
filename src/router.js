import Vue from 'vue'
import Router from 'vue-router'
// import DefaultLayout from './layouts/Default.vue'
import Layout from './layouts/Layout.vue'
import Login from './views/pages/Login.vue'
import EmployeeManagement from './views/pages/hris/Index.vue';
import AddEmployee from './views/pages/hris/Add.vue';
import ShowEmployee from './views/pages/hris/Show.vue';

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/', component: Layout, children: [
			{ path: '', redirect: { name: 'login' } },
			{ path: '/hris', 				name: 'hris', 	component: EmployeeManagement },
			{ path: '/hris/add-employee', 	name: 'add-employee', 			component: AddEmployee },
			{ path: '/hris/show-employee', 	name: 'show-employee', 			component: ShowEmployee },
		]
		},
		{ path: '/login', 				name: 'login', 	component: Login },
	]
})
