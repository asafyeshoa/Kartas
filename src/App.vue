<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>

import {mapActions} from 'vuex'
export default {
  name: 'App',
  methods: {
    ...mapActions('settings',['getSettings']),
    ...mapActions('auth',['handleAuthStateChange']),
  },
  mounted() {
    this.getSettings()
    this.handleAuthStateChange()
  }
}
</script>

<style>
.text-strike {
  text-decoration: line-through;
}
</style>
