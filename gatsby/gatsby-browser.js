/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import React from 'react';
import { AppRegistry } from 'react-native';
import PropTypes from 'prop-types';
import { Router } from 'react-router-dom';
// import { Provider } from './src/stores/ctxStore';
import ThemeProvider from './src/components/ThemeProvider';

exports.replaceHydrateFunction = () => {
  return (element, container, callback) => {
    class Root extends React.Component {
      render() {
        return element;
      }
    }
    AppRegistry.registerComponent('App', () => Root);
    AppRegistry.runApplication('App', {
      initialProps: {},
      rootTag: container,
      callback,
    });
  };
};

exports.replaceRouterComponent = ({ history }) => {
  const CustomRouter = ({ children }) => (
    <ThemeProvider>
      <Router history={history}>{children}</Router>
    </ThemeProvider>
  );
  CustomRouter.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  };
  return CustomRouter;
};

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
