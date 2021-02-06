<template>
  <q-card>

    <taskHeader>Add Task</taskHeader>
    <q-card-section class="q-pt-none">

      <form @submit.prevent="submitForm()" >
        <div class="row q-mb-sm" >
        <taskName :name.sync="takeToSubmit.name" ref="modalTaskName" />
        </div>

        <div class="row q-mb-sm" >
          <taskDate :date.sync="takeToSubmit.dueDate" @clear="clearDueDate" />
        </div>

        <div class="row q-mb-sm"  v-if="takeToSubmit.dueDate" >
          <taskTime v-if="takeToSubmit.dueDate" :time.sync="takeToSubmit.dueTime" @ />
        </div>

        <taskBtn/>
      </form>
    </q-card-section>

  </q-card>
</template>

<script>

import {mapActions} from 'vuex'
import mixinTask from '../../mixins/mixin-add-edit-task'


export default {
  mixins: [mixinTask],
  name: "addTask",
  data(){
    return {
      takeToSubmit: {
        name: '',
        complete: false,
        dueDate:'',
        dueTime: ''
      }

    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),

    submiTask(){
      this.addTask(this.takeToSubmit)
      this.$emit('close')
    },

  },

}
</script>

<style scoped>
.q-field--error  {
  color: red;
}

</style>
