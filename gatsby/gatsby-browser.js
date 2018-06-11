/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// import React from 'react';
// import { AppRegistry } from 'react-native';
// import { Router } from 'react-router-dom';
// import { Provider } from './src/stores/ctxStore';
// import ThemeProvider from './src/components/ThemeProvider';
// import ResponsiveProvider from './src/components/ResponsiveProvider';

// exports.replaceRouterComponent = ({ history }) => {
//   return ({ children }) => (
//     <Provider>
//       <ThemeProvider>
//         <ResponsiveProvider>
//           <Router history={history}>{children}</Router>
//         </ResponsiveProvider>
//       </ThemeProvider>
//     </Provider>
//   )
// }

// exports.wrapRootComponent = ({ Root }) => {
//   AppRegistry.registerComponent('Root', () => Root)

//   class WrappedRootComponent extends React.PureComponent {
//     render() {
//       const { element } = AppRegistry.getApplication('Root', {
//         initialProps: this.props,
//       })
//       return element
//     }
//   }
//   return WrappedRootComponent
// }
