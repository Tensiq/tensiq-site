/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// import React from 'react'
// import { AppRegistry } from 'react-native'
// import { renderToString } from 'react-dom/server'
// import ThemeProvider from './src/components/ThemeProvider'
// import ResponsiveProvider from './src/components/ResponsiveProvider'
// import { Provider } from './src/stores/ctxStore'

// exports.replaceRenderer = ({
//   bodyComponent,
//   replaceBodyHTMLString,
//   setHeadComponents,
// }) => {
//   class App extends React.Component {
//     render() {
//       return (
//         <Provider>
//           <ThemeProvider>
//             <ResponsiveProvider>{bodyComponent}</ResponsiveProvider>
//           </ThemeProvider>
//         </Provider>
//       )
//     }
//   }

//   AppRegistry.registerComponent('App', () => App)

//   const { element, getStyleElement } = AppRegistry.getApplication('App', {
//     initialProps: {},
//   })

//   const body = renderToString(element)

//   replaceBodyHTMLString(body)

//   setHeadComponents([getStyleElement()])

//   return
// }
