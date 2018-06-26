import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

class TextNormal extends PureComponent {
  render() {
    const { children, style, ...props } = this.props;
    const { theme } = props;
    if (theme === undefined) {
      return (
        <ThemeContext.Consumer>
          {theme => (
              <Text style={theme.style(TextNormal.defaultProps)}>
                <Text style={[theme.style(props), style]} {...props}>
                  {children}
                </Text>
              </Text>
          )}
        </ThemeContext.Consumer>
      );
    } else {
      return (
        <Text style={[theme.style(props), style]} {...props}>
          {children}
        </Text>
      );
    }
  }
}
TextNormal.defaultProps = {
  element: 'text',
  type: 'normal',
};

class TextEm extends TextNormal {}
TextEm.defaultProps = Object.assign({}, TextNormal.defaultProps, {
  type: 'em',
});

class TextStrong extends TextNormal {}
TextStrong.defaultProps = Object.assign({}, TextNormal.defaultProps, {
  type: 'strong',
});

class TextTableHeader extends TextNormal {}
TextTableHeader.defaultProps = Object.assign({}, TextNormal.defaultProps, {
  element: 'tableHeaderText',
});

class TextTableBody extends TextNormal {}
TextTableBody.defaultProps = Object.assign({}, TextNormal.defaultProps, {
  element: 'tableBodyText',
});

export default {
  TextNormal,
  TextEm,
  TextStrong,
  TextTableBody,
  TextTableHeader,
};
