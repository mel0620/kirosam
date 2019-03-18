import Vue from 'vue'
import Router from 'vue-router'
// import DefaultLayout from './layouts/Default.vue'
import Layout from './layouts/Layout.vue'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import Dashboard from './views/pages/dashboard/Dashboard.vue';
import DashboardAddEmployee from './views/pages/dashboard/DashboardAddEmployee.vue';

Vue.use(Router)

export default new Router({
	routes: [{
		path: '/', component: Layout, children: [
			{ path: '', redirect: { name: 'dashboard' } },
			{ path: '/dashboard', 				name: 'dashboard', 				component: Dashboard },
			{ path: '/dashboard/add-employee', 	name: 'dashboard-add-employee', component: DashboardAddEmployee },
		]
	}]
})
