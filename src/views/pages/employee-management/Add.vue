<template>
    <q-page padding>
        <div class="q-display-1 text-dark">Add New Employee</div>

        <q-breadcrumbs separator=">" active-color="blue-grey-7" color="light">
            <q-breadcrumbs-el label="Employee Information" to="" />
            <q-breadcrumbs-el label="Government" to="" />
            <q-breadcrumbs-el label="Salary Information" to="" />
            <q-breadcrumbs-el label="Job Information" to="" />
            <q-breadcrumbs-el label="Shift" to="" />
            <q-breadcrumbs-el label="Documents" to="" />
        </q-breadcrumbs>

        <q-tabs animated swipeable inverted color="secondary" class="q-mt-xl" style="border: 1px solid rgba(0,0,0,.1)">
            <q-tab class="capitalize" default name="basicInfo" slot="title" label="Basic Info" />
            <q-tab class="capitalize" name="salaryDetails" slot="title" label="Salary Details" />
            <q-tab class="capitalize" name="governmentNumbers" slot="title" label="Government Numbers" />
            <q-tab class="capitalize" name="jobInfo" slot="title" label="Job Info" />

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
                                    <q-datetime color="white" inverted-light float-label="Date" value="" />
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

                            <!-- <div class="row q-my-md ">
                            <q-btn no-caps color="teal-5" icon-right="mdi-chevron-right" class="q-ml-auto" label="Next"></q-btn>
                        </div> -->
                        </q-card>
                    </div>
                    <div class="col-xl-2">
                        <q-card class="no-shadow q-pa-md text-center">
                            <div class="q-title text-center">Upload Picture</div>
                            <div class="image-holder">

                            </div>
                            <input type="file" ref="imageUpload" style="display: none">
                            <q-btn @click="$refs.imageUpload.click()" block no-caps class="q-mt-md" label="Browse Image"
                                color="teal-5"></q-btn>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="salaryDetails">
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
                                        <q-input color="white" float-label="Declared Taxable Salary" inverted-light value="" />
                                    </q-field>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="governmentNumbers">
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
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="jobInfo">

            </q-tab-pane>
        </q-tabs>
    </q-page>
</template>

<script>
    export default {
        name: 'AddEmployee',
        data() {
            return {
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
