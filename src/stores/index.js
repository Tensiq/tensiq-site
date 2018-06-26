import MyStore from './MyStore'

const myStore = new MyStore()
if (typeof localStorage != 'undefined' && localStorage != null) {
  const hydrate = require('./hydrate')
  hydrate('myStore', myStore)
}

export default {
  myStore: myStore,
}
