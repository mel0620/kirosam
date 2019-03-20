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
            <div class="row gutter-sm justify-end items-end">
                <div class="col-xl-2">
                    <q-select stack-label="Filter by Company" inverted-light class="text-white" color="grey-12" separator
                        v-model="selectCompany" :options="companyOptions" />
                </div>
                <div class="col-xl-2">
                    <q-select stack-label="Filter by Job Title" inverted-light class="text-white" color="grey-12" separator
                        v-model="selectJob" :options="jobOptions" />
                </div>
                <div class="col-xl-3">
                    <q-input value="" class="q-py-sm" placeholder="Search" inverted-light color="grey-12" :before="[{icon: 'mdi-magnify', handler () {}}]" />
                </div>
            </div>
        </div>

        <div class="q-mt-lg">
            <q-table :data="tableData" :columns="columns" row-key="name">
                <q-tr slot = "body" slot-scope = "props" :props = "props">
                    <q-td key = "employee_number" :props = "props">{{ props.row.employee_number }}</q-td>
                    <q-td key = "employee_name" :props = "props">{{ props.row.employee_name }}</q-td>
                    <q-td key = "date_hired" :props = "props">{{ props.row.date_hired }}</q-td>
                    <q-td key = "employment_status" :props = "props">{{ props.row.employment_status }}</q-td>
                    <q-td key = "company" :props = "props">{{ props.row.company }}</q-td>
                    <q-td key = "job_title" :props = "props">{{ props.row.job_title }}</q-td>
                    <q-td key = "actions" :props = "props">
                        <div class="row gutter-xs">
                            <div>
                                <q-btn @click="$router.push('/hris/show-employee')" round flat color="teal" dense icon="mdi-eye"></q-btn>
                            </div>
                            <div>
                                <q-btn round flat color="orange" dense icon="mdi-archive"></q-btn>
                            </div>
                        </div>
                    </q-td>
                </q-tr>
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
                        employee_number: '002019',
                        employee_name: 'Rommel Cuneta',
                        date_hired: '05/19/2017',
                        employment_status: 'Regular',
                        company: 'StarApps',
                        job_title: 'Frontend Developer',
                        actions: '',
                    },
                ]
            }
        }
    }

</script>
