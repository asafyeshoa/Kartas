<template>
  <q-select
    filled
    v-model="sortBy"
    :options="options"
    label="Sort by"
    stack-label
    class="col q-ml-sm"
    emit-value
    map-options
  />
</template>

<script>

import { mapState, mapActions } from 'vuex'

export default {
  name: "sort",
  data() {
    return {
      options: [
        {
          label: 'Name',
          value: 'name'
        },
        {
          label: 'Date',
          value: 'dueDate'
        },
      ],

    }
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort
      },
      set(value) {
      this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style scoped>
.q-select {
  height: 56px;
  flex: 0 0 112px;

}
</style>
