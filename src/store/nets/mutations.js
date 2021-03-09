export function setCalculates(state, data) {
  if (data === undefined || data === null || data === [] || data[0] === undefined) {
    state.areaCalculation = []
  } else {
    state.areaCalculation = data
  }
}

