<template>
<div class="q-pa-md" >
  <div class="row q-mb-lg" >

  <searchBar/>
    <sort/>
  </div>
 <p
   v-if="search && !Object.keys(tasksTodo).length &&
    !Object.keys(tasksCompleted).length" >
   No search results.
 </p>

  <div class="column">
    <displayNoTasks v-if="!Object.keys(tasksTodo).length && !search" @showAddTask="showAddTask = true" ></displayNoTasks>
    <tasksToDo :tasksToDo="tasksTodo" v-else/>
    <tasksCompleted :tasksCompleted="tasksCompleted" />

  </div>

  <div  class="absolute-bottom text-center q-mb-lg" >
  <q-btn
    round
    color="primary"
    icon="add"
    size="24px"
    @click="showAddTask = true"
  />
    <q-dialog v-model="showAddTask">
    <addTask @close="showAddTask = false" />
    </q-dialog>

  </div>
</div>
</template>

<script>

import { mapGetters, mapState } from "vuex"

export default {
name: "todo",
  data(){
  return {
    showAddTask: false,
  }
  },
computed:{
 ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
  ...mapState('tasks', ['search'])
},
  components: {
  'addTask' : require('components/Modals/addTask').default,
  'tasksToDo' : require('components/Tasks/taskToDo').default,
  'tasksCompleted' : require('components/Tasks/taskCompleted').default,
  'displayNoTasks' : require('components/Tasks/displayNoTasks').default,
  'searchBar' : require('components/Tools/searchBar').default,
  'sort' : require('components/Tools/sort').default,

  },
  mounted() {
  this.$root.$on('showAddTask', () => {
    this.showAddTask = true
  })
  }
}
</script>

<style scoped>
.strike{
  text-decoration: line-through;
}
</style>
