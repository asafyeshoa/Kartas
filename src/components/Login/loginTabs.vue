<template>
  <div>
  <q-card class="authTabs">
    <q-tabs
      v-model="tab"
      dense
      class="text-grey"
      active-color="primary"
      indicator-color="primary"
      align="justify"
      narrow-indicator

    >
      <q-tab name="Login" label="Login" />
      <q-tab name="Register" label="Register" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="tab" animated>
      <q-tab-panel name="Login">
      <doubleForm :tab="tab"/>
      </q-tab-panel>

      <q-tab-panel name="Register">
        <doubleForm :tab="tab" />
      </q-tab-panel>


    </q-tab-panels>
  </q-card>
  </div>
</template>


<script>
export default {
  name: "loginTabs",
  data () {
    return {
      tab: 'Login'
    }
  },
  components: {
    'doubleForm': require('components/Login/registerForm').default
  }
}
</script>
<style scoped>
.authTabs {
  max-width: 500px;
  margin: 20% auto;

}

</style>
