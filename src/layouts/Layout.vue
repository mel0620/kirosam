<template>
	<q-layout view="lHh Lpr lFf">
		<q-layout-header reveal>
			<q-toolbar color="indigo">
				<q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />
				<q-toolbar-title>KIROSAM</q-toolbar-title>
			</q-toolbar>
		</q-layout-header>

		<q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-1' : null">
			<q-list no-border link inset-delimiter>
				<q-list no-border link inset-delimiter>
					<q-list-header>Navigation</q-list-header>
					<q-item to="/dashboard">
						<q-item-side icon="mdi-monitor-dashboard" />
						<q-item-main label="Dashboard" />
					</q-item>
					<q-item to="/hris">
						<q-item-side icon="mdi-account-group-outline" />
						<q-item-main label="HRIS" />
					</q-item>
					<q-item to="/configuration">
						<q-item-side icon="mdi-settings-outline" />
						<q-item-main label="Configuration" />
					</q-item>
					<q-item to="/timekeeping">
						<q-item-side icon="mdi-timetable" />
						<q-item-main label="Time Keeping" />
					</q-item>
					<q-item to="/payroll">
						<q-item-side icon="mdi-fingerprint" />
						<q-item-main label="Payroll Processing" />
					</q-item>
					<q-item to="/reports">
						<q-item-side icon="mdi-finance" />
						<q-item-main label="Reports" />
					</q-item>
					<q-item-separator />
				</q-list>
			</q-list>
		</q-layout-drawer>

		<q-page-container>
			<router-view />
			<q-btn v-back-to-top.animate="{offset: 500, duration: 200}" round color="primary" class="fixed-bottom-right animate-pop" style="margin: 0 15px 15px 0">
				<q-icon name="keyboard_arrow_up" />
			</q-btn>
		</q-page-container>
	</q-layout>
</template>

<script>
	import {
		openURL
	} from 'quasar'
	export default {
		name: 'LayoutDefault',
		data() {
			return {
				leftDrawerOpen: this.$q.platform.is.desktop
			}
		},
		methods: {
			openURL,
		}
	}

</script>

<style lang="stylus">
	.q-toolbar {
		min-height 70px
	}
</style>
