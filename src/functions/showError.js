
import {Dialog, Loading} from "quasar";

export function showErrorMessage(err) {
  Loading.hide()
  Dialog.create({
    title: 'Error',
    message: err,
  })

}
