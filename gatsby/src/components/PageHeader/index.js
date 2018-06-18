import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';

const getChildrenWithStyle = (style, children) => {
  if (typeof children == 'string') {
    return children;
  }
  return React.Children.map(children, child => {
    return React.cloneElement(child, {
      style,
    });
  });
};
const Header = ({ children, style, ...props }) => {
  const { theme } = props;
  return (
    <Text style={[theme.style(props), style]} {...props}>
      {children}
    </Text>
  );
};
Header.defaultProps = {
  element: 'textHeader',
};
const Header1 = props => <Header {...props} />;
Header1.defaultProps = {
  type: 1,
};
const Header2 = props => <Header {...props} />;
Header2.defaultProps = {
  type: 2,
};
const Header3 = props => <Header {...props} />;
Header3.defaultProps = {
  type: 3,
};
export default { Header1, Header2, Header3 };
