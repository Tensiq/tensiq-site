import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';
import CookieContainer from '../Cookie/Container';

const uiTheme = {};

class Bottom extends React.PureComponent {
  constructor(props) {
    super();
    this.cookieBanner = React.createRef();
  }
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
  scrollHandler = scrollY => {
    this.cookieBanner.current.scrollHandler(scrollY);
  };
  render() {
    const { fade } = this.state;
    const { cookieData, scrollY, location } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <Animated.View style={{ opacity: fade }}>
            <Box element="footerOuterContainer">
              <View style={theme.style({ element: 'footerInnerContainer' })}>
                <CookieContainer
                  wrappedComponentRef={this.cookieBanner}
                  data={cookieData}
                  scrollY={scrollY}
                />
                <Box style={{ height: 36 }} display={['flex', null, 'none']}>
                  <View style={theme.style({ element: 'footerMenuContainer' })}>
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
                        <Text
                          style={theme.style({ element: 'footerLinkText' })}
                        >
                          Services
                        </Text>
                      </Link>
                    </View>
                    <View
                      style={theme.style({
                        element: 'footerLinkOuterContainer',
                        type:
                          location.pathname === '/about' ? 'active' : 'normal',
                      })}
                    >
                      <Link
                        to="/about"
                        contentStyle={theme.style({
                          element: 'footerLinkContent',
                        })}
                        rippleColor={theme.color('footerRipple')}
                      >
                        <Text
                          style={theme.style({ element: 'footerLinkText' })}
                        >
                          About
                        </Text>
                      </Link>
                    </View>
                    <View
                      style={theme.style({
                        element: 'footerLinkOuterContainer',
                        type:
                          location.pathname === '/contact'
                            ? 'active'
                            : 'normal',
                      })}
                    >
                      <Link
                        to="/contact"
                        contentStyle={theme.style({
                          element: 'footerLinkContent',
                        })}
                        rippleColor={theme.color('footerRipple')}
                      >
                        <Text
                          style={theme.style({ element: 'footerLinkText' })}
                        >
                          Contact
                        </Text>
                      </Link>
                    </View>
                  </View>
                </Box>
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
