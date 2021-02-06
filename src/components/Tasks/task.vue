<template>
  <div>
    <q-item
      @click='updateTask({id: id, updates: { complete: !task.complete }})'
      :class="!task.complete ?'bg-orange-1' : 'bg-green-1'"
      clickable
      v-ripple
      v-touch-hold:1000.mouse="showEditTaskModal"
    >
      <q-item-section side top>
        <q-checkbox :value="task.complete" class="no-pointer-events"/>
      </q-item-section>

      <q-item-section>
        <q-item-label :class="{ 'strike' : task.complete }"
                      v-html="$options.filters.searchHighlight(task.name, search)"></q-item-label>
        <q-item-label :class="{ 'strike' : task.complete }" caption>
          Notify me about updates to apps or games that I downloaded
        </q-item-label>
      </q-item-section>


      <q-item-section side v-if="task.dueDate">
        <div class="row">
          <div class="column justify-center">
            <q-icon name="event" size="20px" class="q-mr-xs"/>
          </div>
          <div class="column">
            <q-item-label class="row justify-end" caption>{{ task.dueTime }}</q-item-label>
            <q-item-label caption> {{ task.dueDate | niceDate }}</q-item-label>
          </div>
        </div>
      </q-item-section>

      <q-item-section side>
        <div class="row">
          <q-btn size=20px flat round dense color="primary" icon="edit" @click.stop="showEditTaskModal"/>
          <q-btn size=20px flat round dense color="red" icon="delete" @click.stop="confirm = true"/>
        </div>
      </q-item-section>


      <q-dialog v-model="showEditTask">
        <editTask @close="showEditTask = false"
                  :task="task"
                  :id="id"
        />
      </q-dialog>


      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="delete" color="red" text-color="white"/>
            <span class="q-ml-sm">Sure you want to delete this task?.</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="cancel" color="black" v-close-popup @click="confirm = false"/>
            <q-btn flat label="DELETE" color="black" v-close-popup @click="deleteTaskLocal(id)"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </q-item>

  </div>
</template>

<script>

import {mapActions, mapState} from 'vuex'
import {date} from 'quasar'

export default {
  name: "task",
  props: ['task', 'id'],
  data() {
    return {
      confirm: false,
      showEditTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search'])
  },
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    deleteTaskLocal(id) {
      this.deleteTask(id)
    },
    showEditTaskModal() {
      this.showEditTask = true
    }

  },
  filters: {
    niceDate(value) {
      return date.formatDate(value, 'MMM D')
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'i')
        return value.replace(searchRegExp, (match) => {
            return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  },
  components: {
    'editTask': require('components/Modals/editTask').default,
  }
}
</script>

<style scoped>
.strike {
  text-decoration: line-through;
}
</style>
