<template>
    <q-layout class="login-page">
        <q-card class="login-form">
            <div class="q-headline text-white q-mt-md">LOGIN</div>
            <div class="q-mt-md">
                <form action="" class="q-pa-lg">
                    <q-input color="white" value="" inverted-light class="" placeholder="Username / Email Address" />
                    <q-input color="white" value="" inverted-light class="q-mt-md" placeholder="Password" type="password" />
                    <q-btn icon="mdi-login-variant" push color="indigo" class="full-width q-mt-md" label="Login" to="/hris"></q-btn>
                    <q-btn flat push color="white" class="q-mt-md capitalize" label="Forgot Password?"></q-btn> <span class="text-white q-caption q-mx-md">OR</span>
                    <q-btn flat push color="white" class="q-mt-md capitalize before-line" label="Register Here"></q-btn>
                </form>
            </div>
        </q-card>
    </q-layout>
</template>

<style lang="stylus">
.login-page {
    background linear-gradient(to right, rgba(#4351B3, .2), rgba(#34A69A, .2)), url('../../assets/background.jpeg')
    background-size cover
    background-position center
    background-repeat no-repeat
    padding 2rem
    display grid
    grid-template-columns 1fr
    justify-content center
    align-items center
    text-align center

    .login-form {
        background-color rgba(#fff ,.2)
        padding 1rem
        margin 0 auto

        @media screen and (max-width 1200px) {
            width 100%
        }

        @media screen and (max-width 800px) {
            width 100%
        }

        form {
            input {
                text-align center
            }
        }
    }
}
</style>
