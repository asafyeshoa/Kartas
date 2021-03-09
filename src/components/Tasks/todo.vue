<template>
  <div>

    <div class="q-pa-md absolute full-height full-width column">
      <template v-if="taskDownloaded">

        <div class="row q-mb-lg">
          <searchBar/>
          <sort/>
        </div>
        <p
          v-if="search && !Object.keys(tasksTodo).length &&
    !Object.keys(tasksCompleted).length">
          No search results.
        </p>



        <q-scroll-area class="scrollArea">
          <displayNoTasks v-if="!Object.keys(tasksTodo).length && !search && !settings.showTasksInOneList"
                          @showAddTask="showAddTask = true"></displayNoTasks>
          <tasksToDo :tasksToDo="tasksTodo" v-if="Object.keys(tasksTodo).length"/>
          <tasksCompleted :tasksCompleted="tasksCompleted" class="q-mb-xl" />
        </q-scroll-area>



        <div class="absolute-bottom text-center q-mb-lg no-pointer-events">
          <q-btn
            class="all-pointer-events"
            round
            color="primary"
            icon="add"
            size="24px"
            @click="showAddTask = true"
          />

        </div>
      </template>
      <template v-else>
        <span class="absolute-center">
              <q-spinner-gears
                color="primary"
                size="4em"
              />
        </span>

      </template>

      <q-dialog v-model="showAddTask">
        <addTask @close="showAddTask = false"/>
      </q-dialog>

    </div>
  </div>
</template>

<script>

import {mapGetters, mapState} from "vuex"

export default {
  name: "todo",
  data() {
    return {
      showAddTask: false,
    }
  },
  computed: {
    ...mapGetters('tasks', ['tasksTodo', 'tasksCompleted']),
    ...mapGetters('settings', ['settings']),
    ...mapState('tasks', ['search','taskDownloaded'])
  },
  components: {
    'addTask': require('components/Tasks/Modals/addTask').default,
    'tasksToDo': require('components/Tasks/taskToDo').default,
    'tasksCompleted': require('components/Tasks/taskCompleted').default,
    'displayNoTasks': require('components/Tasks/displayNoTasks').default,
    'searchBar': require('components/Tools/searchBar').default,
    'sort': require('components/Tools/sort').default,

  },
  mounted() {
    this.$root.$on('showAddTask', () => {
      this.showAddTask = true
    })
  }
}
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}

.scrollArea {
  display: flex;
  flex-grow: 1;
}
</style>
