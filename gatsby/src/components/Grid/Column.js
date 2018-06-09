import React from 'react'

import { withResponsiveRow } from './Row'

import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  col: {
    flexDirection: 'column',
  },
})

const withDirection = key =>
  ['', 'Top', 'Bottom', 'Left', 'Right', 'Horizontal', 'Vertical'].map(
    value => key + value
  )

const getProp = key =>
  key[0] +
  []
    .concat(key.match(/[A-Z]/g))
    .join('')
    .toLowerCase()

const props = {
  padding: {
    direction: true,
    convert: ({ value, props }) =>
      spaceToPixel(value, props.theme.styles.spaces),
  },
  margin: {
    direction: true,
    convert: ({ value, props }) =>
      spaceToPixel(value, props.theme.styles.spaces),
  },
  width: {
    direction: false,
    convert: ({ value, props }) => gridToPercent(value, props.row.size),
  },
  color: {
    direction: false,
    convert: ({ value }) => value,
  },
}

const getPropMap = () => {
  const propMap = {}
  Object.keys(props).forEach(key => {
    if (props[key].direction) {
      withDirection(key).forEach(keyWithDir => {
        propMap[getProp(keyWithDir)] = {
          name: keyWithDir,
          convert: props[key].convert,
        }
      })
    } else {
      propMap[key] = {
        name: key,
        convert: props[key].convert,
      }
    }
  })
  return propMap
}

const spaceToPixel = (value, spaces) => spaces[parseInt(value)]
const gridToPercent = (value, max) => parseInt(value) * 100 / max + '%'

// styleArray: { m:[1,1,2], p:[2,2,4], pt:[1], width:[1,1,3,4] }
// test -> getStyleSheets({w:[1,2,3],p:[1,2,3],pl:[3,2],mr:[4,3,2,1]})
const getStyleSheets = props => {
  const {
    theme: { styles },
  } = props
  if (styles === undefined || styles.breakpoints === undefined) {
    return null
  }
  const propMap = getPropMap()
  const propsToMap = Object.keys(props).filter(
    key => Object.keys(propMap).indexOf(key) >= 0
  )
  const styleSheets = []
  for (var key = 0; key < styles.breakpoints.length; key++) {
    styleSheets[key] = {}
    propsToMap.forEach(styleKey => {
      const prop = propMap[styleKey]
      const value =
        props[styleKey][key] === undefined
          ? undefined
          : prop.convert({ value: props[styleKey][key], props })
      styleSheets[key][prop.name] =
        value === undefined ? styleSheets[key - 1][prop.name] : value
    })
  }
  return styleSheets
}

@withResponsiveRow
export default class Column extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  updateStyleSheet() {
    if (this.styles === undefined) {
      const styleSheetData = getStyleSheets(this.props)
      this.styles =
          styleSheetData != null ? StyleSheet.create(styleSheetData) : undefined
    }
  }
  componentDidMount() {
    this.updateStyleSheet()
  }
  componentDidUpdate() {
    this.updateStyleSheet()
  }
  getStyle = breakpoint => {
    if (this.styles === undefined) {
      return null
    }
    return this.styles[breakpoint]
  }
  render() {
    const { responsive, textId, wordCount, ...props } = this.props

    var children = this.props.children
    if (textId && !children && responsive.text && responsive.text[textId]) {
      const elements = []
      Object.keys(responsive.text[textId].text)
        .filter(value => value > responsive.breakpoint)
        .forEach(bp => elements.push(...responsive.text[textId].text[bp]))
      children = <Text>{elements}</Text>
    } else {
      children = React.Children.map(this.props.children, child =>
        React.cloneElement(child, { textId, wordCount })
      )
    }

    return (
      <View
        style={[styles.col, this.getStyle(responsive.breakpoint)]}
        {...props}
      >
        {children}
      </View>
    )
  }
}
