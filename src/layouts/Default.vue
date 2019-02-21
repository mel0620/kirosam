<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header v-model="state" reveal>
      <q-toolbar color="orange">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu" icon="menu" />

        <q-toolbar-title>
          Quasar
          <!-- <div slot="subtitle">Running on Quasar v{{ $q.version }}</div> -->
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer v-model="leftDrawerOpen" :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <q-list no-border link inset-delimiter>
        <q-list no-border link inset-delimiter>
          <q-list-header>Navigation</q-list-header>
          <q-item to="/" exact>
            <q-item-side icon="home" />
            <q-item-main label="Home" />
          </q-item>
          <q-item to="/about">
            <q-item-side icon="info_outline" />
            <q-item-main label="About" />
          </q-item>
          <q-item-separator />
        </q-list>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
      <q-btn v-back-to-top.animate="{offset: 500, duration: 200}" round color="orange" class="fixed-bottom-right animate-pop"
        style="margin: 0 15px 15px 0">
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

<style>
</style>
