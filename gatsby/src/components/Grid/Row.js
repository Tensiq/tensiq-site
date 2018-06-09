import React from 'react'

import { withMultiContext } from 'with-context'
import { ThemeContext, ResponsiveContext } from '../../utils/context'

import { View, StyleSheet } from 'react-native'

const RowContext = React.createContext()

export const withResponsiveRow = withMultiContext({
  theme: ThemeContext,
  responsive: ResponsiveContext,
  row: RowContext,
})

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      size: props.size > 0 ? props.size : 12,
    }
  }
  render() {
    const {
      state,
      props: { style, children },
    } = this
    return (
      <View {...this.props} style={[styles.row, style]}>
        <RowContext.Provider value={state}>{children}</RowContext.Provider>
      </View>
    )
  }
}
