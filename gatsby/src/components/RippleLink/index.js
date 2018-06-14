import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { View, StyleSheet } from 'react-native';
import RippleFeedback from 'react-native-material-ui/src/RippleFeedback';

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  height: '100%',
  width: '100%',
};

const styles = StyleSheet.create({
  contentView: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class RippleLink extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { to, style, rippleColor, contentStyle, children } = this.props;
    return (
      <Link to={to} style={{ ...linkStyle, ...style }}>
        <RippleFeedback delayPressIn={50} color={rippleColor.string()}>
          <View style={[styles.contentView, contentStyle]}>{children}</View>
        </RippleFeedback>
      </Link>
    );
  }
}

RippleLink.propTypes = {
  to: PropTypes.string,
  style: PropTypes.any,
  rippleColor: PropTypes.object,
  contentStyle: PropTypes.any,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RippleLink;
