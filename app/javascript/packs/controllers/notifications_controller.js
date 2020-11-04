import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "list" ]

  setError(event) {
    const [data, status, xhr] = event.detail
    this.listTarget.innerHTML = xhr.response
  }

}