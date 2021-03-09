
export function users (state, getters, rootState) {
  let usersFiltered = {}
  Object.keys(state.users).forEach(key => {
    if(key !== rootState.auth.userDetails.userId) {
      usersFiltered[key] = state.users[key]
    }
  })

  return usersFiltered
}

