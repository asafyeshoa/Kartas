import {firebaseAuth, firebaseDb} from "boot/firebase";
import {LocalStorage, Loading} from "quasar";
import {showErrorMessage} from "src/functions/showError";


export function registerUser({}, payload) {
  Loading.show()
  firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
    .then((userCredential) => {
      let userId = firebaseAuth.currentUser.uid
      firebaseDb.ref(`users/${userId}`).set({
        name: payload.name,
        email: payload.email,
        online: true

      })

    })
    .catch((error) => {
      showErrorMessage(error.message)
    });

}

export function loginUser({}, payload) {
  Loading.show()
  firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
    .then((userCredential) => {
      console.log(userCredential)
    })
    .catch((error) => {
      showErrorMessage(error.message)
    });
}

export async function handleAuthStateChange({commit, dispatch}) {

  await firebaseAuth.onAuthStateChanged(user => {
    Loading.hide()
    if (user) {
      LocalStorage.set('loggedIn', true)
      commit('setLoggedIn', true)
      let userId = firebaseAuth.currentUser.uid
      firebaseDb.ref(`users/${userId}`).once('value', snapshot => {
        let userDetails = snapshot.val()
        commit('setUserDetails', {
          name: userDetails.name,
          email: userDetails.email,
          userId: userId
        })
      })

      dispatch("firebaseUpdateUser", {
        userId: userId,
        updates: {
          online: true
        }
      })
      dispatch('tasks/firebaseRD', null, {root: true})
      dispatch('chat/firebaseGetUsers', null, {root: true})
      this.$router.push('/').catch(err => {
      })

    } else {

      commit('tasks/clearTasks', null, {root: true})
      commit('tasks/setTasksDownloaded', false, {root: true})
      LocalStorage.set('loggedIn', false)
      commit('setLoggedIn', false)
      commit('setUserDetails', {})

      this.$router.push('/auth').catch(err => {
      })

    }

  })
}

export function logoutUser({dispatch, state}) {
  let userId = state.userDetails.userId
  dispatch("firebaseUpdateUser", {
    userId: userId,
    updates: {
      online: false
    }
  })
  firebaseAuth.signOut().then(() => {
  })
}

export function firebaseUpdateUser({}, payload) {
  firebaseDb.ref(`users/${payload.userId}`).update(payload.updates)
}

