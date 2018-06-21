import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { View, StyleSheet } from 'react-native';
import RippleFeedback from 'react-native-material-ui/src/RippleFeedback';

const styles = StyleSheet.create({
  contentView: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// <Link to={to} style={{ ...linkStyle, ...style }}>
// </Link>

const goTo = (to, delay) => {
  setTimeout(() => navigateTo(to), delay);
};

class RippleLink extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { to, rippleColor, contentStyle, children, delay = 300 } = this.props;
    return (
      <RippleFeedback
        onPress={() => goTo(to, delay)}
        delayPressIn={50}
        color={rippleColor.string()}
      >
        <View style={[styles.contentView, contentStyle]}>{children}</View>
      </RippleFeedback>
    );
  }
}

RippleLink.propTypes = {
  to: PropTypes.string,
  style: PropTypes.any,
  rippleColor: PropTypes.object,
  contentStyle: PropTypes.any,
  delay: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default RippleLink;
