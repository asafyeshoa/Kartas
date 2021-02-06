export default {
  methods: {
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submiTask()
      }
    },

    clearDueDate() {
      this.takeToSubmit.dueDate = ''
      this.takeToSubmit.dueTime = ''
    }
  },
  components: {
    'taskHeader': require('components/Sherd/taskHeader').default,
    'taskName': require('components/Sherd/taskName').default,
    'taskDate': require('components/Sherd/taskDate').default,
    'taskTime': require('components/Sherd/taskTime').default,
    'taskBtn': require('components/Sherd/taskBtn').default,
  },
}
