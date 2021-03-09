import {LocalStorage} from 'quasar'


export default {
  set12HourFormat: ({commit, dispatch}, value) => {
    commit('set12HourFormat', value)
    dispatch('saveSettings')
  },
  setShowTasksInOneList: ({commit, dispatch}, value) => {
    commit('setShowTasksInOneList', value)
    dispatch('saveSettings')
  },
  saveSettings: ({state}) => {
    LocalStorage.set('settings', state.settings)
  },
  getSettings: ({commit}) => {
    let settings = LocalStorage.getItem('settings')
    if (settings) {
      commit('setSettings', settings)
    }
  }
}






