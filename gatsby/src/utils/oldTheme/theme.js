import React from 'react'
import { withContext, withMultiContext } from 'with-context'

export const ThemeContext = React.createContext()
export const ResponsiveContext = React.createContext()

export const withTheme = withContext(ThemeContext, 'theme')
export const withResponsiveTheme = withMultiContext({
  theme: ThemeContext,
  responsive: ResponsiveContext,
})

export function getNumberWithUnit(string) {
  const components = /^(-?)(?!0)(\d+|\d+(,\d{3})*)(\.\d{1,3})?(\w{2,3})?$/.exec(
    string
  )
  if (components === null) {
    return null
  }
  var value = ''
  ;[1, 2, 4].forEach(key => {
    if (components[key] != undefined) {
      value = value + components[key]
    }
  })
  return components != undefined
    ? {
        value,
        unit: components[5],
      }
    : null
}

const unitConvert = {
  em: {
    px: value => value * 16,
  },
  px: {
    em: value => value / 16,
  },
}

// 1em = 16px
const EM = 16
// const breakpoints = [ '40em', '52em', '64em' ]
// @media screen and (min-width: 40em)
// @media screen and (min-width: 52em)
// @media screen and (min-width: 64em)
export const breakpoints = [40 * EM, 52 * EM]

// Typographic Scale (numbers are converted to px values)
const fontSizes = [12, 14, 16, 20, 24, 32, 48, 64, 72]

// Spacing Scale (used for margin and padding)
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

// styleArray: { m:[1,1,2], p:[2,2,4], pt:[1], width:[1,1,3,4] }
export function createResponsiveStyleSheets(styles) {
  const styleSheets = {}
  const styleKeys = Object.keys(styles)
  const styleSheetCount = Math.max(...styleKeys.map(key => styles[key].length))
  const range = Array(styleSheetCount).keys()
  Array.from(Array(styleSheetCount).keys()).forEach(key => {
    styleSheets[key] = {}
    styleKeys.forEach(styleKey => {
      styleSheets[key][styleKey] =
        styles[styleKey][key] || styleSheets[key - 1][styleKey]
    })
  })
  return styleSheets
}

export default { ThemeContext, ResponsiveContext }
