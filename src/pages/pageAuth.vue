<template>
  <q-page padding >
  <loginTabs/>
  </q-page>
</template>

<script>

import loginTabs from "components/Login/loginTabs";

export default {
  name: "pageAuth",
  components: {
    loginTabs
  }
}
</script>

<style scoped>

</style>
