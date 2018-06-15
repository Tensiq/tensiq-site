import React, { PureComponent } from 'react';
import { Text } from 'react-native';

class TextNormal extends PureComponent {
  render() {
    const { children, ...props } = this.props;
    const { theme } = props;
    return (
      <Text style={theme.style(props)} {...props}>
        {children}
      </Text>
    );
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
