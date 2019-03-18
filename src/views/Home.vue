<template>
	<q-page padding class="docs-carousel">
		<q-card class="">
			<q-card-title>
				<q-item class="row items-center">
					<q-icon name="mdi-account-group" size="3rem" color="dark"></q-icon>
					<q-item-main class="q-ml-md">
						<q-item-tile class="q-headline text-dark">Employees (119)</q-item-tile>
					</q-item-main>
				</q-item>
				<div slot="right">
					<q-btn icon="mdi-plus" color="secondary" label="Add Employee"></q-btn>
				</div>
			</q-card-title>
		</q-card>

		<q-card>

		</q-card>
	</q-page>
</template>

<style lang="stylus">
	@import '~variables'

</style>

<script>
	export default {
		name: 'PageHome'
	}

</script>
