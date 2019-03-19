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
                    <q-btn push rounded to="/hris/add-employee" no-caps icon="mdi-plus" color="secondary" label="Add Employee"></q-btn>
                </div>
            </q-card-title>
        </q-card>

        <div class="q-mt-lg">
            <div class="row gutter-sm justify-end">
                <div class="col-xl-2">
                    <q-select stack-label="Filter by Company" inverted-light class="text-white" color="grey-12" separator
                        v-model="selectCompany" :options="companyOptions" />
                </div>
                <div class="col-xl-2">
                    <q-select stack-label="Filter by Job Title" inverted-light class="text-white" color="grey-12" separator
                        v-model="selectJob" :options="jobOptions" />
                </div>
                <div class="col-xl-2">
                    <q-input value="" class="q-py-sm" placeholder="Search" inverted-light color="grey-12" :before="[{icon: 'mdi-magnify', handler () {}}]" />
                </div>
            </div>
        </div>

        <div class="q-mt-lg">
            <q-table :data="tableData" :columns="columns" row-key="name">

            </q-table>
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
                }, ],
                selectJob: 'job',
                jobOptions: [{
                    label: 'Select Job Title',
                    value: 'job'
                }, ],
                columns: [
                    { name: 'employee_number',      required: true, label: 'Employee Number',    align: 'left', field: 'employee_number',       sortable: true, classes: 'th-class', style: 'width: 500px' },
                    { name: 'employee_name',        required: true, label: 'Employee Name',      align: 'left', field: 'employee_name',         sortable: true, classes: 'th-class', style: 'width: 500px' },
                    { name: 'date_hired',           required: true, label: 'Date Hired',         align: 'left', field: 'date_hired',            sortable: true, classes: 'th-class', style: 'width: 500px' },
                    { name: 'employment_status',    required: true, label: 'Employment Status',  align: 'left', field: 'employment_status',     sortable: true, classes: 'th-class', style: 'width: 500px' },
                    { name: 'company',              required: true, label: 'Company',            align: 'left', field: 'company',               sortable: true, classes: 'th-class', style: 'width: 500px' },
                    { name: 'job_title',            required: true, label: 'Job Title',          align: 'left', field: 'job_title',             sortable: true, classes: 'th-class', style: 'width: 500px' },
                    { name: 'actions',              required: true, label: 'Actions',            align: 'left', field: 'actions',               sortable: true, classes: 'th-class', style: 'width: 500px' },
                ],
                tableData: [
                    {
                        employee_number: '',
                        employee_name: '',
                        date_hired: '',
                        employment_status: '',
                        company: '',
                        job_title: '',
                        actions: '',
                    },
                ]
            }
        }
    }

</script>
