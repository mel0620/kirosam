<template>
    <q-page padding>
        <q-card class="bg-grey-12">
            <q-card-title>
                <q-item class="row items-center">
                    <q-icon name="mdi-account-group" size="3rem" color="dark"></q-icon>
                    <q-item-main class="q-ml-md">
                        <q-item-tile class="q-headline text-dark">Employees (119)</q-item-tile>
                    </q-item-main>
                </q-item>
                <div slot="right">
                    <q-btn to="/dashboard/add-employee" no-caps icon="mdi-plus" color="secondary" label="Add Employee"></q-btn>
                </div>
            </q-card-title>
        </q-card>

        <div class="q-mt-lg">
            <div class="row gutter-sm justify-end">
                <div class="col-xl-2">
                    <q-select stack-label="Filter by Company" inverted class="text-white" color="faded" separator v-model="selectCompany" :options="companyOptions" />
                </div>
                <div class="col-xl-2">
                    <q-select stack-label="Filter by Job Title" inverted class="text-white" color="faded" separator v-model="selectJob" :options="jobOptions" />
                </div>
                <div class="col-xl-2">
                    <q-input class="q-py-sm" placeholder="Search" inverted color="faded" :before="[{icon: 'mdi-magnify', handler () {}}]" />
                </div>
            </div>
        </div>

    </q-page>
</template>

<style lang="stylus">
    @import '~variables'

</style>

<script>
    export default {
        name: 'Dashboard',
        data() {
            return {
                selectCompany: 'company',
                companyOptions: [{
                        label: 'Select Company',
                        value: 'company'
                    },
                ],
                selectJob: 'job',
                jobOptions: [{
                        label: 'Select Job Title',
                        value: 'job'
                    },
                ],
            }
        }
    }

</script>
