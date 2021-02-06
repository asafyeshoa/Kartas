<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top"
  >
  <q-list separator v-if="Object.keys(tasksCompleted).length" class="q-mt-lg" >
    <banner  bgColor="bg-light-green-5" >Completed Tasks</banner>
    <task  v-for="(task, key) in tasksCompleted" :key=key :task="task" :id="key"/>
  </q-list>
  </transition>
</template>

<script>
export default {
  name: "taskCompleted",
  props:['tasksCompleted'],
  components: {
    'task' : require('components/Tasks/task').default,
    'banner' : require('components/Sherd/listBanner').default

  }
}
</script>

<style scoped>

</style>
