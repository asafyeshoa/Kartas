import Vue from 'vue'

export function addUser(state, payload) {
  Vue.set(state.users, payload.userId, payload.userDetails)
}

export function updateUser(state, payload) {
  Object.assign(state.users[payload.userId], payload.userDetails)
}

export function addMessage(state, payload) {
  Vue.set(state.messages, payload.messageId, payload.messageDetails)

}

export function clearMessages(state) {
  state.messages = {}
}
