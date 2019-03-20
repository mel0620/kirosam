<template>
    <q-page padding>
        <div class="q-display-1 text-dark row items-center">
            <q-icon name="mdi-account-plus-outline"></q-icon>
            <div class="q-ml-md">Add New Employee</div>
        </div>

        <!-- <q-breadcrumbs separator=">" active-color="blue-grey-7" color="light">
            <q-breadcrumbs-el label="Employee Information" to="" />
            <q-breadcrumbs-el label="Government" to="" />
            <q-breadcrumbs-el label="Salary Information" to="" />
            <q-breadcrumbs-el label="Job Information" to="" />
            <q-breadcrumbs-el label="Shift" to="" />
            <q-breadcrumbs-el label="Documents" to="" />
        </q-breadcrumbs> -->

        <q-tabs animated swipeable inverted color="secondary" class="q-mt-xl" style="border: 1px solid rgba(0,0,0,.1)">
            <q-tab class="capitalize" default name="basicInfo" slot="title" label="Employee Information" />
            <q-tab class="capitalize" name="government" slot="title" label="Government Information" />
            <q-tab class="capitalize" name="salary" slot="title" label="Salary Information" />
            <q-tab class="capitalize" name="jobInfo" slot="title" label="Job Information" />
            <q-tab class="capitalize" name="shift" slot="title" label="Shift" />
            <q-tab class="capitalize" name="documents" slot="title" label="Documents" />

            <q-tab-pane name="basicInfo">
                <div class="row gutter-sm">
                    <div class="col-xl-10">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs">
                                <div class="col-1">
                                    <q-field>
                                        <q-input color="white" float-label="Title" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col-3">
                                    <q-field>
                                        <q-input color="white" float-label="First Name" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col-3">
                                    <q-field>
                                        <q-input color="white" float-label="Middle Name" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col-3">
                                    <q-field>
                                        <q-input color="white" float-label="Last Name" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col-2">
                                    <q-field>
                                        <q-input color="white" float-label="Suffix" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col">
                                    <q-datetime v-model="birthdate" color="white" inverted-light float-label="Birthdate" value="" />
                                </div>
                                <div class="col">
                                    <q-select float-label="Gender" inverted-light color="white" separator v-model="gender"
                                        :options="genderOptions" />
                                </div>
                                <div class="col">
                                    <q-select float-label="Civil Status" inverted-light color="white" separator v-model="status"
                                        :options="statusOptions" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Contact Number" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" type="email" float-label="Email Address" inverted-light
                                            value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="title q-pt-xl text-weight-bold text-grey-7">PAYMENT ADDRESS</div>

                            <div class="row gutter-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Room / Floor / Unit No. and Building Name"
                                            inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Street" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col">
                                    <q-select float-label="City / Municipality" inverted-light color="white" separator
                                        v-model="city" :options="cityOptions" />
                                </div>
                                <div class="col">
                                    <q-select float-label="Barangay" inverted-light color="white" separator v-model="barangay"
                                        :options="barangayOptions" />
                                </div>
                            </div>

                            <div class="title q-pt-xl text-grey-7 row items-center">
                                <span class="text-weight-bold q-mr-md">PAYMENT ADDRESS</span>
                                <q-checkbox v-model="address" label="Same as Permanent Address" />
                            </div>

                            <div class="row gutter-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Room / Floor / Unit No. and Building Name"
                                            inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Street" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col">
                                    <q-select float-label="City / Municipality" inverted-light color="white" separator
                                        v-model="city" :options="cityOptions" />
                                </div>
                                <div class="col">
                                    <q-select float-label="Barangay" inverted-light color="white" separator v-model="barangay"
                                        :options="barangayOptions" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-md">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Contact Person Name" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Relationship" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm items-center">
                                <div class="col-6">
                                    <q-field>
                                        <q-input color="white" float-label="Contact Number" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="row justify-end">
                                <q-btn push rounded label="Save" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                    <div class="col-xl-2">
                        <q-card class="no-shadow q-pa-md text-center">
                            <div class="q-title text-center">Upload Picture</div>
                            <div class="image-holder">

                            </div>
                            <input type="file" ref="imageUpload" style="display: none">
                            <q-btn push rounded @click="$refs.imageUpload.click()" block no-caps class="q-mt-md" label="Browse Image"
                                color="teal-5" icon="mdi-file-image"></q-btn>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="government">
                <div class="row">
                    <div class="col-xl-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="TIN" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="SSS Number" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="HDMF Number" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="PHIC Number" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row justify-end q-mt-lg">
                                <q-btn push rounded label="Save" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="salary">
                <div class="row">
                    <div class="col-xl-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs">
                                <div class="col">
                                    <q-checkbox v-model="minwage" label="Minimum Wage Earner" />
                                </div>
                                <div class="col">
                                    <q-checkbox v-model="declare" label="Declare Salary for SSS, Philhealth and Tax?" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-md">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Monthly Rate" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Montly COLA" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Daily Rate" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Daily COLA" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Hourly Rate" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Hourly COLA" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Declared PHIC Salary" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Declared SSS Salary" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-6">
                                    <q-field>
                                        <q-input color="white" float-label="Declared Taxable Salary" inverted-light
                                            value="" />
                                    </q-field>
                                </div>
                            </div>

                            <div class="row justify-end q-mt-lg">
                                <q-btn push rounded label="Save" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="jobInfo">
                <div class="row">
                    <div class="col-xl-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Employee Number" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Biometric Number" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-sm">
                                <div class="col">
                                    <q-select float-label="Company" inverted-light color="white" separator
                                        v-model="company" :options="companyOptions" />
                                </div>
                                <div class="col">
                                    <q-select float-label="Branch Location" inverted-light color="white" separator v-model="branch"
                                        :options="branchOptions" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-sm">
                                <div class="col">
                                    <q-select float-label="Department" inverted-light color="white" separator
                                        v-model="department" :options="departmentOptions" />
                                </div>
                                <div class="col">
                                    <q-select float-label="Job Title" inverted-light color="white" separator v-model="jobtitle"
                                        :options="jobtitleOptions" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-datetime v-model="datehired" color="white" inverted-light float-label="Date Hired" value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Employment Status" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Payroll Group" inverted-light value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" float-label="Expected Regularizatioin Date"
                                            inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col">
                                    <q-field>
                                        <q-datetime v-model="dateend" color="white" inverted-light float-label="Date End" value="" />
                                    </q-field>
                                </div>
                                <div class="col">
                                    <q-field>
                                        <q-input color="white" type="textarea" float-label="Employment Remarks" inverted-light value="" :max-height="50" />
                                    </q-field>
                                </div>
                            </div>
                            <div class="row justify-end q-mt-lg">
                                <q-btn push rounded label="Save" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="shift">
                <div class="row">
                    <div class="col-xl-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-6">
                                    <q-select float-label="Shift Schedule" inverted-light color="white" separator v-model="shiftSchedule"
                                        :options="shiftScheduleOptions" />
                                </div>
                            </div>
                            <div class="row justify-end q-mt-lg">
                                <q-btn push rounded label="Save" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="documents">
                <div class="row">
                    <div class="col-xl-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row">
                                <div class="col-3 col-md-4 col-sm-12 col-xs-12">
                                    <q-uploader stack-label="Choose Document File" url="url" />
                                </div>
                            </div>
                            <div class="row q-mt-md">
                                <div class="col">
                                    <q-table :data="tableData" :columns="columns" row-key="name" hide-bottom>

                                    </q-table>
                                </div>
                            </div>
                            <hr class="q-mt-xl q-mb-lg" style="opacity: .4">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="row q-headline text-grey-8">
                                        <q-icon color="teal" name="mdi-file-import"></q-icon>
                                        <div class="">Import</div>
                                    </div>
                                </div>
                                <div class="col-xl-6 row">
                                    <q-btn push rounded no-caps color="teal" icon="mdi-download" label="Download Template" class="q-ml-auto"></q-btn>
                                </div>
                            </div>
                            <div class="row gutter-md q-mt-sm items-end">
                                <div class="col-3 col-md-4 col-sm-12 col-xs-12">
                                    <q-uploader stack-label="Your CSV File Here" url="url" />
                                </div>
                                <div class="col-3">
                                    <q-btn color="amber-9" no-caps icon="mdi-clipboard-text-outline" rounded label="Generate Import"></q-btn>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
        </q-tabs>
    </q-page>
</template>

<script>
    export default {
        name: 'AddEmployee',
        data() {
            return {
                birthdate: null,
                datehired: null,
                dateend: null,
                minwage: false,
                declare: false,
                address: false,
                gender: 'male',
                genderOptions: [{
                        label: 'Male',
                        value: 'male'
                    },
                    {
                        label: 'Female',
                        value: 'female'
                    },
                ],
                status: 'single',
                statusOptions: [{
                        label: 'Single',
                        value: 'single'
                    },
                    {
                        label: 'Married',
                        value: 'married'
                    },
                ],
                city: 'naga',
                cityOptions: [{
                        label: 'Naga',
                        value: 'naga'
                    },
                    {
                        label: 'Pasacao',
                        value: 'pasacao'
                    },
                ],
                barangay: 'sanramon',
                barangayOptions: [{
                        label: 'San Ramon',
                        value: 'sanramon'
                    },
                    {
                        label: 'Ombao',
                        value: 'ombao'
                    },
                ],
                company: 'interaflex',
                companyOptions: [{
                        label: 'InteraFlex',
                        value: 'interaflex'
                    },
                ],
                branch: 'makati',
                branchOptions: [{
                        label: 'Makati',
                        value: 'makati'
                    },
                ],
                department: 'it',
                departmentOptions: [{
                        label: 'IT',
                        value: 'it'
                    },
                ],
                jobtitle: 'webdev',
                jobtitleOptions: [{
                        label: 'Web Developer',
                        value: 'webdev'
                    },
                ],
                shiftSchedule: 'shift',
                shiftScheduleOptions: [{
                        label: 'Select Shift Schedule',
                        value: 'shift'
                    },
                ],
                columns: [
                    { name: 'filename',         required: true, label: 'File Name',         align: 'left', field: 'filename',           sortable: false, classes: 'th-class', style: 'width: 500px' },
                    { name: 'imortation_time',  required: true, label: 'Importation Time',  align: 'left', field: 'imortation_time',    sortable: false, classes: 'th-class', style: 'width: 500px' },
                    { name: 'action',           required: true, label: 'Action',            align: 'left', field: 'action',             sortable: false, classes: 'th-class', style: 'width: 500px' },
                ],
                tableData: [
                    {
                        filename: '',
                        imortation_time: '',
                        action: '',
                    },
                ]
            }
        }
    }

</script>

<style lang="stylus">
    .image-holder {
        background-image url('https://www.l-nutra.com/wp-content/uploads/2018/07/placeholder.png')
        background-size cover
        background-position center
        background-repeat no-repeat
        border 1px solid rgba(#000, .1)
        width 100%
        height 10rem
        margin-top 1rem
    }
</style>
