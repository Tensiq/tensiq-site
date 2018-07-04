import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';
import { CookieContext } from '../CookieProvider';
import CookieContainer from '../Cookie/Container';

const uiTheme = {};

class Bottom extends React.PureComponent {
  constructor(props) {
    super();
    //this.cookieBanner = React.createRef();
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
    if (this.cookieBanner) {
      this.cookieBanner.scrollHandler(scrollY);
    }
  };
  render() {
    const { fade } = this.state;
    const { cookieData, scrollY, location } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => (
          <CookieContext.Consumer>
            {cookies => (
              <Animated.View style={{ opacity: fade }}>
                <View style={theme.style({ element: 'footerOuterContainer' })}>
                  <View
                    style={theme.style({ element: 'footerInnerContainer' })}
                  >
                    <CookieContainer
                      location={location}
                      cookies={cookies}
                      ref={ref => (this.cookieBanner = ref)}
                      data={cookieData}
                      scrollY={scrollY}
                    />
                    <View
                      style={theme.style({ element: 'footerMenuContainer' })}
                    >
                      <View
                        style={theme.style({
                          element: 'footerLinkOuterContainer',
                          type: location.pathname === '/' ? 'active' : 'normal',
                        })}
                      >
                        <Link to="/" rippleColor={theme.color('footerRipple')}>
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
                            location.pathname === '/about'
                              ? 'active'
                              : 'normal',
                        })}
                      >
                        <Link
                          to="/about"
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
                  </View>
                </View>
              </Animated.View>
            )}
          </CookieContext.Consumer>
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
