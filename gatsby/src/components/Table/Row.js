import React from 'react'
import { View, StyleSheet } from 'react-native'
import createContextElement from '../../utils/contextHelper'
import generateStyle from '../../utils/generateStyle'
import { withTheme } from '../ThemeProvider'

const dimmedRows = (props, color) => {
  const { rowindex, rowcount } = props
  const row = rowindex + 1
  if (row && rowcount) {
    return StyleSheet.create({
      0: {
        flexDirection: 'row',
        backgroundColor: color.lighten(row / rowcount * 0.7),
      },
    })
  }
  return null
}

export const themeStyles = theme => {
  const styles = {
    normal: StyleSheet.create({
      0: {
        flexDirection: 'row',
        backgroundColor: theme.colors('table').lighten(0.7),
      },
    }),
    info: function(props) {
      console.log("info",props)
      return dimmedRows(props, theme.colors('info')) || styles.normal
    },
  }
  return styles
}

const tableRow = props => {
  const { theme, style, ...restProps } = props
  return (
    <View
      style={[generateStyle(themeStyles(theme), props), style]}
      {...restProps}
    >
      {createContextElement(props, { withIndex: 'col' })}
    </View>
  )
}

tableRow.defaultProps = {
  element: 'tableRow',
}

export default withTheme(tableRow)
