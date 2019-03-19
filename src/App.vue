<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  created () {
    this.$q.addressbarColor.set('#4351B3')
  }
}
</script>


<style>
</style>
