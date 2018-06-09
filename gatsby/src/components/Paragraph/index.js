import React, { PureComponent } from 'react'
import { withResponsiveTheme } from '../ResponsiveProvider'
import { View, Text } from 'react-native'

function getTextElement(el) {
  if (el.props.children === undefined) {
    return el
  } else if (typeof el.props.children[0] != 'string') {
    return getTextElement(el.props.children[0])
  } else {
    return el
  }
}

function getResponsiveWordCount(wcArray, bp) {
  var wc = -1
  wcArray.filter((_, index) => index <= bp).forEach(value => {
    if (value != undefined) {
      wc = value === 'all' ? -1 : value
    }
  })
  return wc
}

function getIndexOfNthChar(text, char, n) {
  var counter = 0
  for (var i = 0; i < text.length; i++) {
    if (text[i] === char) {
      counter++
    }
    if (n > 0 && counter === n) {
      return { index: i, count: counter }
    }
  }
  return { index: text.length - 1, count: counter }
}

function createResponsiveChildren(children, wordCount) {
  if (wordCount === undefined) {
    return undefined
  }
  const childArray = React.Children.toArray(children)
  const bps = wordCount
    .filter((el, idx, arr) => parseInt(el) && arr.indexOf(el) === idx)
    .map(value => parseInt(value))
    .sort()
  var bpg = {}
  var bpi = 0
  var wcnt = 0
  for (var child of childArray) {
    const el = getTextElement(child)
    var text =
      el.props.children && el.props.children[0]
        ? el.props.children[0]
        : el.props.name
    const textLen = text.match(/\S+/g).length
    if (wcnt + textLen < bps[bpi]) {
      bpg[bpi].push(React.cloneElement(child))
    } else {
      var i = 0
      while (text.length > 0 && text.match(/\S+/g).length > 0) {
        const words = bps[bpi] === undefined ? -1 : bps[bpi] - wcnt
        const { index, count } = getIndexOfNthChar(text, ' ', words)
        const clonedEl = React.cloneElement(
          child,
          { key: child.key + '-cl-' + i },
          child.props.children ? text.substring(0, index + 1) : null
        )
        if (bpg[bpi] === undefined) {
          bpg[bpi] = []
        }
        bpg[bpi].push(clonedEl)
        wcnt += count
        text = text.substring(index + 1)
        i++
        if (wcnt === bps[bpi]) {
          bpi++
        }
      }
    }
    if (wcnt === bps[bpi]) {
      bpi++
    }
  }
  return bpg
}

@withResponsiveTheme
class Paragraph extends PureComponent {
  constructor(props) {
    super(props)
    const { children, responsive, textId, wordCount } = props
    var plainText = true
    for (var child of children) {
      plainText =
        plainText &&
        child.type.defaultProps &&
        child.type.defaultProps.element &&
        (child.type.defaultProps.element === 'text' ||
          child.type.defaultProps.element === 'icon')
    }
    var responsiveChildren = undefined
    if (plainText) {
      responsiveChildren = createResponsiveChildren(children, wordCount)
      if (responsiveChildren != undefined) {
        responsive.dispatch({
          type: 'SET_TEXT',
          value: {
            [textId]: {
              wordCount,
              text: responsiveChildren,
            },
          },
        })
      }
    }
    this.state = {
      plainText,
      responsive: responsiveChildren != undefined,
    }
  }
  render() {
    const {
      theme,
      style,
      textId,
      wordCount,
      responsive,
      ...restProps
    } = this.props
    var children = []
    if (this.state.responsive) {
      if (responsive.text && responsive.text[textId]) {
        Object.keys(responsive.text[textId].text)
          .filter(value => value <= responsive.breakpoint)
          .forEach(bp => children.push(...responsive.text[textId].text[bp]))
      }
    } else {
      children = this.props.children
    }
    if (this.state.plainText) {
      return (
        <Text
          style={theme.style({ theme, element: 'paragraph', type: 'text' })}
          {...restProps}
        >
          {children}
        </Text>
      )
    }
    return (
      <View
        style={[theme.style({ theme, element: 'paragraph' }), style]}
        {...restProps}
      >
        {children}
      </View>
    )
  }
}
Paragraph.defaultProps = {
  style: {
    flex: 1,
  },
}

export default Paragraph
