import {firebaseFS} from "boot/firebase";
import {date} from 'quasar'


export function addAreaCalculation({commit, dispatch}, sizes) {

  const sizesNumType = Object.keys(sizes).forEach((key) => {
    return sizes[key] = parseInt(sizes[key])
  })


  let timeStamp = Date.now()
  let formattedString = date.formatDate(timeStamp, 'MMM dddd H:mm A')
  sizes.timeStamp = timeStamp
  sizes.date = formattedString

  const extraOverlap = 100 * (
    ((sizes.overlapX * 0.5 * sizes.y) +
      (sizes.overlapY * 0.5 * sizes.x)) /
    (sizes.x * sizes.y))


  sizes.ExtraOverlap = Math.ceil(extraOverlap)
  sizes.areaSize = sizes.x * sizes.y


  sizes.newSize = (sizes.areaSize * sizes.ExtraOverlap / 100) + sizes.areaSize // 42.84
  sizes.nets = Math.ceil(sizes.newSize / (6.5 * 2.5))

  dispatch('addCalculateToFirebase', sizes)

}

export async function addCalculateToFirebase({rootState}, sizes) {
  const key = sizes.timeStamp;
  const obj = {};
  obj[key] = sizes;
  const userId = rootState.auth.userDetails.userId
  await firebaseFS.collection('netsCalculate').doc(userId).set(obj, { merge: true })
}

export async function getCalculates({rootState,commit}) {

  const userId = rootState.auth.userDetails.userId
  firebaseFS.collection('netsCalculate').doc(userId).onSnapshot(snapshot => {
    let data = []
    data.push(snapshot.data())
    if (data[0] === undefined) {
      data = []
    }
    commit('setCalculates', data)

  })
}

