import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const uiTheme = {};

class Bottom extends React.PureComponent {
  state = {
    fade: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(this.state.fade, {
      toValue: 1,
      duration: 1000,
      delay: 100,
    }).start();
  }
  render() {
    const { fade } = this.state;
    const { location } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Animated.View style={{ opacity: fade }}>
            <Box
              element="footerOuterContainer"
              display={['flex', null, 'none']}
            >
              <View style={theme.style({ element: 'footerColor' })} />
              <View style={theme.style({ element: 'footerInnerContainer' })}>
                <View
                  style={theme.style({
                    element: 'footerLinkOuterContainer',
                    type: location.pathname === '/' ? 'active' : 'normal',
                  })}
                >
                  <Link
                    to="/"
                    contentStyle={theme.style({
                      element: 'footerLinkContent',
                    })}
                    rippleColor={theme.color('footerRipple')}
                  >
                    <Text style={theme.style({ element: 'footerLinkText' })}>
                      Services
                    </Text>
                  </Link>
                </View>
                <View
                  style={theme.style({
                    element: 'footerLinkOuterContainer',
                    type: location.pathname === '/about' ? 'active' : 'normal',
                  })}
                >
                  <Link
                    to="/about"
                    contentStyle={theme.style({
                      element: 'footerLinkContent',
                    })}
                    rippleColor={theme.color('footerRipple')}
                  >
                    <Text style={theme.style({ element: 'footerLinkText' })}>
                      About
                    </Text>
                  </Link>
                </View>
                <View
                  style={theme.style({
                    element: 'footerLinkOuterContainer',
                    type:
                      location.pathname === '/contact' ? 'active' : 'normal',
                  })}
                >
                  <Link
                    to="/contact"
                    contentStyle={theme.style({
                      element: 'footerLinkContent',
                    })}
                    rippleColor={theme.color('footerRipple')}
                  >
                    <Text style={theme.style({ element: 'footerLinkText' })}>
                      Contact
                    </Text>
                  </Link>
                </View>
              </View>
            </Box>
          </Animated.View>
        )}
      </ThemeContext.Consumer>
    );
  }
}

Bottom.propTypes = {
  height: PropTypes.object,
  opacity: PropTypes.number,
};

export default Bottom;
