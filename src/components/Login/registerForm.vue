<template>
  <div>

    <form @submit.prevent="sumbitForm">
      <div class="row q-mb-md">
        <q-banner class="bg-grey-3 col">
          <template v-slot:avatar>
            <q-icon name="account_circle" color="primary"/>
          </template>
         {{tab}} to access your Kartas account!
          <template v-slot:action>
          </template>
        </q-banner>
      </div>

      <div v-if="tab === 'Register'" class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="formData.name"
          label="Name"
          stack-label
          :rules="[ val => val.length >= 6 || 'Please enter full name']"
          lazy-rules
          ref="name"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="formData.email"
          label="Email"
          stack-label
          :rules="[ val => isValidEmail(val) || 'Please enter valid email address']"
          lazy-rules
          ref="email"
        />
      </div>

      <div class="row q-mb-md">
        <q-input
          class="col"
          outlined
          v-model="formData.password"
          type="password"
          label="Password"
          stack-label
          autocomplete="on"
          :rules="[ val => val.length >= 6 || 'Please use maximum 6 characters']"
          lazy-rules
          ref="password"
        />
      </div>



      <div class="row">
        <q-space/>
        <q-btn color="primary" :label="tab" type="submit"/>

      </div>

    </form>
  </div>

</template>

<script>

import {mapActions} from 'vuex'

export default {
  name: "doubleForm",
  props: ['tab'],
  data() {
    return {
      formData: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth',['registerUser', 'loginUser']),
    sumbitForm() {
      this.$refs.email.validate()
      this.$refs.password.validate()
      if (!this.$refs.email.hasError && !this.$refs.password.hasError) {
        if (this.tab === 'Login') {
          this.loginUser(this.formData)
        } else {
          this.registerUser(this.formData)
        }
      }
    },
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
  }
}
</script>

<style scoped>

</style>
