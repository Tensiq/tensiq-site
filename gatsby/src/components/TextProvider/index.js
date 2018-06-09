import React from 'react'

import { TextContext } from '../../utils/context'

const reducer = (state, action) => {
  if (action.type === 'SET_TEXT_OVERFLOW') {
    return { ...state, ...action.value }
  }
}

export default class TextProvider extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  state = {
    dispatch: action => {
      this.setState(state => reducer(state, action))
    },
  }
  render() {
    const {
      state,
      props: { children },
    } = this
    return (
      <TextContext.Provider value={state}>{children}</TextContext.Provider>
    )
  }
}

export { withText } from '../../utils/context'
