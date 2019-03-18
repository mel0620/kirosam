import Vue from 'vue'
import Router from 'vue-router'
// import DefaultLayout from './layouts/Default.vue'
import Layout from './layouts/Layout.vue'
import EmployeeManagement from './views/pages/employee-management/Index.vue';
import AddEmployee from './views/pages/employee-management/Add.vue';

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/', component: Layout, children: [
			{ path: '', redirect: { name: 'employee-management' } },
			{ path: '/employee-management', 				name: 'employee-management', 	component: EmployeeManagement },
			{ path: '/employee-management/add-employee', 	name: 'add-employee', 			component: AddEmployee },
		]
	}]
})
