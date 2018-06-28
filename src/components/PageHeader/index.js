import React from 'react';
import { View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import { ScrollContext } from '../ScrollProvider';

class Header extends React.PureComponent {
  componentDidMount() {
    const { children, addAnchor } = this.props;
    let text = children;
    if (Array.isArray(children)) {
      text = children.join(' ');
    }
    text = text
      .replace(/[^a-zA-Z ]/g, '')
      .replace(/[ ]/g, '-')
      .toLowerCase();
    if (addAnchor) {
      this.header.measure((x, y, width, height, px, py) => {
        addAnchor(text, py);
      });
    }
  }
  render() {
    const { children, style, addAnchor, ...props } = this.props;
    return (
      <View ref={ref => (this.header = ref)} {...props} style={{ flex: -1 }}>
        <Text style={{ position: 'absolute', top: -50 }} />
        <ThemeContext.Consumer>
          {theme => (
            <Text style={[theme.style(props), style]} {...props}>
              {children}
            </Text>
          )}
        </ThemeContext.Consumer>
      </View>
    );
  }
}
Header.defaultProps = {
  element: 'textHeader',
};
const Header1 = props => (
  <ScrollContext.Consumer>
    {({ addAnchor }) => <Header {...props} addAnchor={addAnchor} />}
  </ScrollContext.Consumer>
);
Header1.defaultProps = {
  type: 1,
};
const Header2 = props => (
  <ScrollContext.Consumer>
    {({ addAnchor }) => <Header {...props} addAnchor={addAnchor} />}
  </ScrollContext.Consumer>
);
Header2.defaultProps = {
  type: 2,
};
const Header3 = props => (
  <ScrollContext.Consumer>
    {({ addAnchor }) => <Header {...props} addAnchor={addAnchor} />}
  </ScrollContext.Consumer>
);
Header3.defaultProps = {
  type: 3,
};
const Header4 = props => <Header {...props} />;
Header4.defaultProps = {
  type: 4,
};
export default { Header1, Header2, Header3, Header4 };
