<template>
    <q-page padding>
        <div class="row items-center">
            <div class="profile" v-if="$q.platform.is.desktop">
                <div class="profile__picture row items-end" style="background-image: url('https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
                    <input type="text" style="display: none">
                    <div class="q-pa-sm q-ml-auto">
                        <q-btn color="teal" dense round icon="mdi-camera" class="q-mt-sm" style="opacity: .8"></q-btn>
                    </div>
                </div>
            </div>
            <div class="profile profile--mobile" v-if="$q.platform.is.mobile">
                <div class="profile__picture row items-end" style="background-image: url('https://images.pexels.com/photos/555790/pexels-photo-555790.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')">
                    <input type="text" style="display: none">
                    <div class="q-pa-sm q-ml-auto">
                        <q-btn color="teal" dense round icon="mdi-camera" class="q-mt-sm" style="opacity: .8"></q-btn>
                    </div>
                </div>
            </div>
            <div class="info" v-if="$q.platform.is.desktop">
                <div class="q-display-1 text-dark q-ml-md">John Doe</div>
                <div class="q-title text-grey q-ml-md">Jr. Web Developer</div>
            </div>
            <div class="info" v-if="$q.platform.is.mobile">
                <div class="q-title text-dark q-ml-md">John Doe</div>
                <div class="q-subheading text-grey q-ml-md">Jr. Web Developer</div>
            </div>
        </div>
        <q-tabs animated inverted color="secondary" class="q-mt-lg" style="border: 1px solid rgba(0,0,0,.1)">
            <q-tab class="capitalize" default name="basicInfo" slot="title" label="Employee Information" />
            <q-tab class="capitalize" name="government" slot="title" label="Government Information" />
            <q-tab class="capitalize" name="salary" slot="title" label="Salary Information" />
            <q-tab class="capitalize" name="jobInfo" slot="title" label="Job Information" />
            <q-tab class="capitalize" name="shift" slot="title" label="Shift" />
            <q-tab class="capitalize" name="documents" slot="title" label="Documents" />
            <q-tab class="capitalize" name="memo" slot="title" label="Memo" />

            <q-tab-pane name="basicInfo">
                <div class="row gutter-xs">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs">
                                <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Title" inverted-light value="" />
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="First Name" inverted-light value="" />
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Middle Name" inverted-light value="" />
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Last Name" inverted-light value="" />
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Suffix" inverted-light value="" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <q-datetime v-model="birthdate" color="white" inverted-light float-label="Birthdate" value="" />
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Gender" inverted-light color="white" separator v-model="gender"
                                        :options="genderOptions" />
                                </div>
                                <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Civil Status" inverted-light color="white" separator v-model="status" :options="statusOptions" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Contact Number" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" type="email" float-label="Email Address" inverted-light value="" />
                                </div>
                            </div>

                            <div class="title q-pt-xl q-pb-sm text-weight-bold text-grey-7">PERMANENT ADDRESS</div>

                            <div class="row gutter-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" stack-label="Room / Floor / Unit No. and Building Name" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Street" inverted-light value="" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="City / Municipality" inverted-light color="white" separator
                                        v-model="city" :options="cityOptions" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Barangay" inverted-light color="white" separator v-model="barangay"
                                        :options="barangayOptions" />
                                </div>
                            </div>

                            <div class="title q-pt-xl q-pb-sm text-grey-7 row items-center">
                                <span class="text-weight-bold q-mr-md">PRESENT ADDRESS</span>
                                <q-checkbox v-model="address" label="Same as Permanent Address" />
                            </div>

                            <div class="row gutter-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" stack-label="Room / Floor / Unit No. and Building Name" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Street" inverted-light value="" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="City / Municipality" inverted-light color="white" separator
                                        v-model="city" :options="cityOptions" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Barangay" inverted-light color="white" separator v-model="barangay"
                                        :options="barangayOptions" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-md">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Contact Person Name" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Relationship" inverted-light value="" />
                                </div>
                            </div>

                            <div class="row gutter-xs q-mt-sm items-center">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Contact Number" inverted-light value="" />
                                </div>
                            </div>

                            <div class="row justify-end q-mt-lg">
                                <q-btn push no-caps rounded label="Update" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="government">
                <div class="row">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="TIN" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="SSS Number" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="HDMF Number" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="PHIC Number" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row justify-end q-mt-lg">
                                <q-btn push no-caps rounded label="Update" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="salary">
                <div class="row">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs q-mb-md justify-end">
                                <div class="">
                                    <div class="row gutter-xs">
                                        <div><q-btn push icon="mdi-pencil" no-caps rounded color="primary" label="Create Salary Adjustment"></q-btn></div>
                                        <div><q-btn push icon="mdi-format-list-bulleted" no-caps rounded color="teal" label="Salary Information List"></q-btn></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-checkbox v-model="minwage" label="Minimum Wage Earner" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-checkbox v-model="declare" label="Declare Salary for SSS, Philhealth and Tax?" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-md">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Monthly Rate" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Montly COLA" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Daily Rate" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Daily COLA" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Hourly Rate" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Hourly COLA" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Declared PHIC Salary" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Declared SSS Salary" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Declared Taxable Salary" inverted-light value="" />
                                </div>
                            </div>

                            <div class="row justify-end q-mt-lg">
                                <q-btn push no-caps rounded label="Update" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="jobInfo">
                <div class="row">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs q-mb-md justify-end">
                                <div class="">
                                    <div class="row gutter-xs">
                                        <div><q-btn push icon="mdi-pencil" no-caps rounded color="primary" label="Create Job Adjustment"></q-btn></div>
                                        <div><q-btn push icon="mdi-format-list-bulleted" no-caps rounded color="teal" label="Job Information List"></q-btn></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row gutter-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Employee Number" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Biometric Number" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-sm">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Company" inverted-light color="white" separator
                                        v-model="company" :options="companyOptions" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Branch Location" inverted-light color="white" separator v-model="branch"
                                        :options="branchOptions" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-sm">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Department" inverted-light color="white" separator
                                        v-model="department" :options="departmentOptions" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Job Title" inverted-light color="white" separator v-model="jobtitle"
                                        :options="jobtitleOptions" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-datetime v-model="datehired" color="white" inverted-light float-label="Date Hired" value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Employment Status" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Payroll Group" inverted-light value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" float-label="Expected Regularizatioin Date" inverted-light value="" />
                                </div>
                            </div>
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-datetime v-model="dateend" color="white" inverted-light float-label="Date End" value="" />
                                </div>
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" type="textarea" float-label="Employment Remarks" inverted-light value="" :max-height="50" />
                                </div>
                            </div>
                            <div class="row justify-end q-mt-lg">
                                <q-btn push no-caps rounded label="Update" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="shift">
                <div class="row">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-xs q-mt-xs">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Shift Schedule" inverted-light color="white" separator v-model="shiftSchedule"
                                        :options="shiftScheduleOptions" />
                                </div>
                            </div>
                            <div class="row justify-end q-mt-lg">
                                <q-btn push no-caps rounded label="Update" color="indigo" icon="mdi-check"></q-btn>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="documents">
                <div class="row">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row gutter-md item-end justify-between">
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                    <q-uploader multiple stack-label="Choose Document File" url="url" />
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                    <q-input value="" class="q-py-sm" placeholder="Search file name here" inverted-light color="grey-12" :before="[{icon: 'mdi-magnify', handler () {}}]" />
                                </div>
                            </div>
                            <div class="row q-mt-md">
                                <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12">
                                    <div class="file">
                                        <div class="file__wrapper">
                                            <div class="file__action-check">
                                                <q-checkbox v-model="selectFile" color="teal"/>
                                            </div>
                                            <div class="file__info">
                                                <div class="file__icon">
                                                    <q-icon size="2rem" name="mdi-file-word-box" color="blue" />
                                                </div>
                                                <div class="file__desc">
                                                    <div class="file__name q-title">Resume.docx</div>
                                                    <div class="file__datetime q-caption text-grey-8">Date of Importation: 2/19/12</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="file__action-delete">
                                            <q-btn v-if="$q.platform.is.desktop" color="red-12" rounded push no-caps icon="mdi-trash-can-outline" label="Delete"></q-btn>
                                            <q-btn v-if="$q.platform.is.mobile" color="red-12" dense round push no-caps icon="mdi-trash-can-outline"></q-btn>
                                        </div>
                                    </div>
                                    <div class="file">
                                        <div class="file__wrapper">
                                            <div class="file__action-check">
                                                <q-checkbox v-model="selectFile" color="teal"/>
                                            </div>
                                            <div class="file__info">
                                                <div class="file__icon">
                                                    <q-icon size="2rem" name="mdi-file-pdf" color="red-8" />
                                                </div>
                                                <div class="file__desc">
                                                    <div class="file__name q-title">Medical.pdf</div>
                                                    <div class="file__datetime q-caption text-grey-8">Date of Importation: 2/19/12</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="file__action-delete">
                                            <q-btn v-if="$q.platform.is.desktop" color="red-12" rounded push no-caps icon="mdi-trash-can-outline" label="Delete"></q-btn>
                                            <q-btn v-if="$q.platform.is.mobile" color="red-12" dense round push no-caps icon="mdi-trash-can-outline"></q-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </q-card>
                    </div>
                </div>
            </q-tab-pane>
            <q-tab-pane name="memo">
                <div class="row">
                    <div class="col-12">
                        <q-card class="no-shadow q-pa-md">
                            <div class="row items-center gutter-xs justify-between">
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                    <!-- <div class="row items-center q-headline">
                                        <q-icon color="yellow-10" name="mdi-information-outline"></q-icon>
                                        <div class="q-ml-md text-grey-8">Memo</div>
                                    </div> -->
                                    <q-btn rounded no-caps push icon="mdi-plus" icon-right="mdi-information-outline" color="yellow-10" label="Add Memo"></q-btn>
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-4 col-sm-12 col-xs-12">
                                    <q-input value="" class="q-py-sm" placeholder="Search" inverted-light color="grey-12" :before="[{icon: 'mdi-magnify', handler () {}}]" />
                                </div>
                            </div>
                            <div class="row gutter-xs items-center q-mt-lg q-pb-sm" style="border-bottom: 1px solid rgba(0,0,0,.1)">
                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Offense Type" inverted-light color="white" separator
                                        v-model="offenseType" :options="offenseTypeOptions" />
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Offense Level" inverted-light color="white" separator
                                        v-model="offenseLevel" :options="offenseLevelOptions" />
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <q-select float-label="Action" inverted-light color="white" separator
                                        v-model="offenseAction" :options="offenseActionOptions" />
                                </div>
                                <div class="col-xl-2 col-lg-2 col-md-12 col-sm-12 col-xs-12">
                                    <q-datetime v-model="dateOffense" color="white" inverted-light float-label="Date" value="" />
                                </div>
                                <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
                                    <q-input color="white" type="textarea" float-label="Remarks" inverted-light value="" :max-height="50" />
                                </div>
                                <div class="col-xl-1 col-lg-1 col-md-12 col-sm-12 col-xs-12">
                                    <q-btn round push color="red" icon="mdi-minus-box-outline"></q-btn>
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
                selectFile: false,
                birthdate: null,
                dateOffense: null,
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
                offenseType: 'bullying',
                offenseTypeOptions: [{
                        label: 'Bullying',
                        value: 'bullying'
                    },
                ],
                offenseLevel: 'first',
                offenseLevelOptions: [{
                        label: 'First',
                        value: 'first'
                    },
                ],
                offenseAction: 'suspension',
                offenseActionOptions: [{
                        label: 'Suspension',
                        value: 'suspension'
                    },
                ],
            }
        }
    }

</script>


<style lang="stylus">
.profile
    .profile__picture
        background-size cover
        background-repeat no-repeat
        background-position center
        border 1px solid rgba(#000, .1)
        height 120px
        width 120px

.profile--mobile
    .profile__picture
        height 100px
        width 100px

.file
    display flex
    align-items center
    justify-content space-between
    border-top 1px solid rgba(#000, .1)
    border-left 1px solid rgba(#000, .1)
    border-right 1px solid rgba(#000, .1)
    padding: .75rem
    cursor pointer

    &:hover {
        background-color rgba(#000, .02)
    }

    &__wrapper
        display flex
        align-items center

        .file__info
            display flex
            align-items center
            margin-left .85rem

            .file__desc
                margin-left .85rem

.file:last-child
    border-bottom 1px solid rgba(#000, .1)
</style>
