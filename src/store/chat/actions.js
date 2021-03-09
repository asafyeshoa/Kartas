import {firebaseDb} from "boot/firebase";

let messagesRef;

export async function firebaseGetUsers({commit}) {
  let usersRef = firebaseDb.ref(`users`)
  await usersRef.on('child_added', snapshot => {
    let userDetails = snapshot.val()
    let userId = snapshot.key
    commit('addUser', {
      userId,
      userDetails
    })
  })

  await usersRef.on('child_changed', snapshot => {
    let userDetails = snapshot.val()
    let userId = snapshot.key
    commit('updateUser', {
      userId,
      userDetails
    })
  })
}

export async function firebaseGetMessages({commit, rootState}, uid) {
  let userId = rootState.auth.userDetails.userId
  messagesRef = firebaseDb.ref(`chats/${userId}/${uid}`)
  await messagesRef.on('child_added', snapshot => {
    let messageDetails = snapshot.val()
    let messageId = snapshot.key
    commit('addMessage', {
      messageId,
      messageDetails
    })

  })

}

export function stopGettingMessages({commit}) {
  if (messagesRef) {
    messagesRef.off('child_added')
    commit('clearMessages')
  }
}

export function firebaseSendMessage({rootState}, payload) {
  firebaseDb.ref(`chats/${rootState.auth.userDetails.userId}/${payload.otherUserId}`)
    .push(payload.message)

  payload.message.from = 'them'

  firebaseDb.ref(`chats/${payload.otherUserId}/${rootState.auth.userDetails.userId}`)
    .push(payload.message)

}
