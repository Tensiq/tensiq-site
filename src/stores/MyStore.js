import { observable, action } from 'mobx'
import { persist } from 'mobx-persist'

export default class Store {
  @persist
  @observable
  data = ''

  get data() {
    return this.data;
  }

  @action
  setData = data => {
    this.data = data
  }
}
