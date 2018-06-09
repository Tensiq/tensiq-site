import React from 'react'

import { ThemeContext } from '../../utils/context'

const reducer = (state, action) => {
  if (action.type === 'SET_THEME') {
    return { ...state, ...action.value }
  }
}

export default class ThemeProvider extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  getStyle = props => {
    const { element, type = 'normal' } = props
    if (element === undefined) {
      return null
    }
    const breakpoint =
      props.responsive && props.responsive.breakpoint
        ? props.responsive.breakpoint
        : 0
    const { styles } = this.state
    const elementStyles = styles[element]
    const typeToUse = elementStyles[type] ? type : 'normal'
    var elementStyle = undefined
    if (typeof elementStyles[typeToUse] === 'function') {
      const styleFunc = elementStyles[typeToUse]
      elementStyle = styleFunc(props)
    } else {
      elementStyle = elementStyles[typeToUse]
    }

    const bestBp =
      breakpoint -
      Math.min(
        ...Object.keys(elementStyle)
          .map(value => breakpoint - value)
          .filter(value => value >= 0)
      )
    return elementStyle[bestBp]
  }
  state = {
    style: props => this.getStyle(props),
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
      <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    )
  }
}

export { withTheme } from '../../utils/context'
