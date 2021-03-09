<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut "
  >
  <q-list
    separator
    v-if="Object.keys(tasksCompleted).length"
    :class="{'q-mt-lg' : !settings.showTasksInOneList }"

  >

    <banner v-if="!settings.showTasksInOneList" bgColor="bg-light-green-5" >Completed Tasks</banner>
    <task  v-for="(task, key) in tasksCompleted" :key=key :task="task" :id="key"/>
  </q-list>
  </transition>
</template>

<script>

import {mapGetters} from 'vuex'


export default {
  name: "taskCompleted",
  props:['tasksCompleted'],
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
