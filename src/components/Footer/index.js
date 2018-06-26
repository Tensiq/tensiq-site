import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Linking } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import { TextNormal } from '../Text';
import Icon from '../Icon';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../../utils/cleanHtmlAst';
import Link from '../Link/Plain';

const PlainLink = props => (
  <Link {...props} style={{ textDecorationLine: 'none' }} />
);

const renderFooter = new rehypeReact({
  createElement: React.createElement,
  components: {
    view: View,
    text: TextNormal,
    icon: Icon,
    a: PlainLink,
  },
}).Compiler;

const Footer = ({ htmlAst }) => (
  <ThemeContext.Consumer>
    {theme => (
      <View
        style={[
          {
            paddingTop: theme.sp(3),
            paddingBottom: theme.sp(7),
            backgroundColor: theme.color('footnotes'),
            alignItems: 'center',
          },
        ]}
      >
        <View
          style={[
            {
              flexDirection: 'column',
              alignItems: 'center',
              paddingHorizontal: theme.sp(2),
              paddingBottom: theme.sp(1),
            },
          ]}
        >
          <Text
            style={{
              textAlign: 'center',
              paddingVertical: theme.sp(0),
              color: theme.color('lightText'),
            }}
          >
            {renderFooter(cleanHtmlAst(htmlAst))}
          </Text>
        </View>
      </View>
    )}
  </ThemeContext.Consumer>
);

Footer.propTypes = {
  htmlAst: PropTypes.object,
};

export default Footer;
