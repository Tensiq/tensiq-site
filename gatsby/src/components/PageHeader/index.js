import React from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const Header = ({ children, style, ...props }) => (
  <View {...props}>
    <ThemeContext.Consumer>
      {theme => (
        <Text style={[theme.style(props), style]} {...props}>
          {children}
        </Text>
      )}
    </ThemeContext.Consumer>
  </View>
);
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
const Header4 = props => <Header {...props} />;
Header4.defaultProps = {
  type: 4,
};
export default { Header1, Header2, Header3, Header4 };
