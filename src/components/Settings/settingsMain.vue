<template>
  <div class="q-pa-sm">
    <q-list bordered padding class="q-mb-md">
      <q-item-label header>Settings</q-item-label>

      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show 12 hour time format</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="show12HourTimeFormat"/>
        </q-item-section>
      </q-item>
      <q-item tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Show tasks in one list</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-toggle color="blue" v-model="showTasksInOneList"/>
        </q-item-section>
      </q-item>
    </q-list>

    <q-list bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item
        to="/settings/help"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Help</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        tag="label"
        to="/chatingPage/3O2JiefzFph7Kwh9etPaf0fLyu73"
        @click="emailUs"
        v-ripple>
        <q-item-section>
          <q-item-label>Contact support</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item
        @click="visitMe"
        tag="label"
        v-ripple>
        <q-item-section>
          <q-item-label>Linkedin</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>



    </q-list>
  </div>
</template>

<script>

import {mapGetters, mapActions} from 'vuex'
import {openURL} from 'quasar'

export default {
  name: "settings",
  computed: {
    ...mapGetters('settings', ['settings']),
    show12HourTimeFormat: {
      get(){
        return this.settings.show12HourTimeFormat
      },
      set(value) {
        this.set12HourFormat(value)
      }
    },
    showTasksInOneList: {
      get(){
        return this.settings.showTasksInOneList
      },
      set(value) {
        this.setShowTasksInOneList(value)
      }
    }
  },
  methods: {
    ...mapActions('settings',['set12HourFormat', 'setShowTasksInOneList']),
    visitMe(){
      if(this.$q.platform.is.android && this.$q.platform.is.cordava) {
        cordova.InAppBrowser.open('https://www.linkedin.com/in/asafyeshoa/','_blank', 'location = yes')
      } else {
        openURL('https://www.linkedin.com/in/asafyeshoa/')

      }
    },
    emailUs() {
      window.location.herf = 'mailto: asafa097@gmail.com?subject=Kartas Feedback'
    }
  }
}
</script>

<style scoped>

</style>
