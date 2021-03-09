<template>
  <div class="flex">
    <q-list
      class="full-width"
      separator

    >

      <q-item v-for="(user, key) in users" :key="key" clickable v-ripple :to="`/chatingPage/${key}`">
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label >{{ user.email }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge :color="user.online ? 'light-green-9' : 'black-4'">
            {{ user.online ? 'Online' : 'Offline' }}
          </q-badge>
        </q-item-section>
      </q-item>

    </q-list>
  </div>
</template>

<script>



import {mapGetters} from "vuex";

export default {
  name: "userPage",
  computed: {
    ...mapGetters('chat',['users'])
  }
}
</script>

<style scoped>

</style>
