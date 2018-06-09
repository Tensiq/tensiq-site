import React from 'react'
import { withContext, withMultiContext } from 'with-context'

export const ThemeContext = React.createContext()
export const ResponsiveContext = React.createContext()

export const withTheme = withContext(ThemeContext, 'theme')
export const withResponsiveTheme = withMultiContext({
  theme: ThemeContext,
  responsive: ResponsiveContext,
})
