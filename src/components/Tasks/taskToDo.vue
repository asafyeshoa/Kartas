<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
  <q-list separator v-if="Object.keys(tasksToDo).length">
    <banner v-if="!settings.showTasksInOneList" bgColor="bg-dark" > Tasks </banner>
    <task v-for="(task, key) in tasksToDo" :key=key :task="task" :id="key"/>
  </q-list>
  </transition>
</template>

<script>

import {mapGetters} from 'vuex'

export default {
  name: "taskToDo",
  props:['tasksToDo'],
  computed: {
    ...mapGetters('settings',['settings'])
  },
  components: {
    'task' : require('components/Tasks/task').default,
    'banner' : require('components/Sherd/listBanner').default
  }
}
</script>

<style scoped>

</style>
