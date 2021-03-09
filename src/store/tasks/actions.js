import {uid, Notify} from 'quasar'
import {firebaseDb, firebaseAuth} from "boot/firebase";
import {showErrorMessage} from "src/functions/showError";

export function updateTask({state, dispatch}, payload) {
  dispatch('fbUpdateTask', payload)
}

export function deleteTask({dispatch}, id) {
  dispatch('fbDeleteTask', id)
}

export function addTask({dispatch}, task) {
  let taskId = uid()
  let payload = {id: taskId, task: task}
  dispatch('fbAddTask', payload)

}

export function setSearch({commit}, value) {
  commit('setSearch', value)
}

export function setSort({commit}, value) {
  commit('setSort', value)
}

export function firebaseRD({commit}) {
  const userId = firebaseAuth.currentUser.uid
  let userTasks = firebaseDb.ref(`tasks/${userId}`)

  userTasks.once('value', snapshot => {
    commit('setTasksDownloaded', true)
  }, error => {
  })
  userTasks.on('child_added', snapshot => {
    let task = snapshot.val()

    let payload = {
      id: snapshot.key,
      task: task
    }
    commit('addTask', payload)
  }, error => {
    if(error){
    } else {

    }  })
  userTasks.on('child_changed', snapshot => {
    let task = snapshot.val()

    let payload = {
      id: snapshot.key,
      updates: task
    }
    commit('updateTask', payload)
  }, error => {
    if(error){
    } else {

    }  })

  userTasks.on('child_removed', snapshot => {

    let taskId = snapshot.key

    commit('deleteTask', taskId)
  }, error => {
    if(error){
    } else {

    }  })
}

export function fbAddTask({}, payload) {
  let userId = firebaseAuth.currentUser.uid
  let tasksRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`)
  tasksRef.set(payload.task, error => {
    if(error){
      debugger
      showErrorMessage(error.message)
    } else {
      Notify.create('Task added')

    }  })
}

export function fbUpdateTask({}, payload) {
  let userId = firebaseAuth.currentUser.uid
  let tasksRef = firebaseDb.ref(`tasks/${userId}/${payload.id}`)
  tasksRef.update(payload.updates, error => {
    if(error){
      debugger
      showErrorMessage(error.message)
    } else {
      let keys = Object.keys(payload.updates)
      if( keys.length !== 1) {
        Notify.create('Task updated')
      }
    }
  })
}

export function fbDeleteTask({}, taskId) {
  let userId = firebaseAuth.currentUser.uid
  let tasksRef = firebaseDb.ref(`tasks/${userId}/${taskId}`)
  tasksRef.remove( error => {
    if(error){
      debugger
      showErrorMessage(error.message)
    } else {
      Notify.create('Task deleted')

    }
  })
}
