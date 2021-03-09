<template>
  <q-input outlined v-model="searchField" label="Search" class="col" @keyup.esc="searchField = ''" >
    <template v-slot:prepend>
      <q-icon name="search" />
    </template>
    <template v-slot:append>
      <q-icon name="close" @click="searchField = ''" class="cursor-pointer" />
    </template>


  </q-input>
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: "searchBar",
  computed: {
    ...mapState('tasks',['search']),
    searchField: {
      get() {
         return this.search
      },
      set(value) {
        this.setSearch(value)
      }

    }
  },
  methods: {
    ...mapActions('tasks',['setSearch']),

  }
}
</script>

<style scoped>

</style>
