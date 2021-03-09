export default {
  tasksFiltered: (state, getters) => {
    let taskSorted = getters.tasksSorted
    let tasksFiltered = {}
    if (state.search) {
      Object.keys(taskSorted).forEach(key => {
        let task = taskSorted[key]
        if (task.name.toLowerCase().includes(state.search.toLowerCase())) {
          tasksFiltered[key] = task
        }
      })
      return tasksFiltered
    }
    return taskSorted
  },
  tasksSorted: (state) => {
    let taskSorted = {},
      keysOrdered = Object.keys(state.tasks)
    keysOrdered.sort((a, b) => {
      let taskAProp = state.tasks[a][state.sort].toLowerCase()
      let taskBProp = state.tasks[b][state.sort].toLowerCase()
      if (taskAProp > taskAProp) return 1
      else if (taskAProp < taskBProp) return -1
      else return 0
    })
    keysOrdered.forEach(key => {
      taskSorted[key] = state.tasks[key]
    })

    return taskSorted
  },
  tasksTodo: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]
      if (!task.complete) {
        tasks[key] = task
      }
    })
    return tasks
  },
  tasksCompleted: (state, getters) => {
    let tasksFiltered = getters.tasksFiltered
    let tasks = {}
    Object.keys(tasksFiltered).forEach(key => {
      let task = tasksFiltered[key]
      if (task.complete) {
        tasks[key] = task
      }
    })

    return tasks
  }
}
