import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';
import Icon from '../Icon';

class Top extends React.PureComponent {
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
    const { height, opacity } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => {
          return (
            <ThemeProvider uiTheme={{}}>
              <Animated.View
                style={[
                  theme.style({ element: 'headerOuterContainer' }),
                  { height, opacity: fade },
                ]}
              >
                <Animated.View
                  style={[
                    theme.style({ element: 'headerColorContainer' }),
                    { opacity: opacity },
                  ]}
                >
                  <View style={theme.style({ element: 'headerColor' })} />
                </Animated.View>
                <Box
                  element="headerInnerContainer"
                  {...theme.props.headerInnerContainer}
                >
                  <View
                    style={theme.style({
                      element: 'headerLogoLinkOuterContainer',
                    })}
                  >
                    <Link
                      to="/"
                      contentStyle={theme.style({
                        element: 'headerLogoContent',
                      })}
                      rippleColor={theme.color('headerRipple')}
                    >
                      <Icon name="tensiq" element="headerLogoIcon" />
                      <Text style={theme.style({ element: 'headerLogoText' })}>
                        Tensiq
                      </Text>
                    </Link>
                  </View>
                  <Box
                    element="headerMenuContainer"
                    display={['none', null, 'flex']}
                  >
                    <View
                      style={theme.style({
                        element: 'headerLinkOuterContainer',
                      })}
                    >
                      <Link to="/" rippleColor={theme.color('headerRipple')}>
                        <Text
                          style={theme.style({
                            element: 'headerLinkText',
                          })}
                        >
                          Services
                        </Text>
                      </Link>
                    </View>
                    <View
                      style={theme.style({
                        element: 'headerLinkOuterContainer',
                      })}
                    >
                      <Link
                        to="/about"
                        rippleColor={theme.color('headerRipple')}
                      >
                        <Text
                          style={theme.style({
                            element: 'headerLinkText',
                          })}
                        >
                          About
                        </Text>
                      </Link>
                    </View>
                    <View
                      style={theme.style({
                        element: 'headerLinkOuterContainer',
                      })}
                    >
                      <Link
                        to="/contact"
                        rippleColor={theme.color('headerRipple')}
                      >
                        <Text
                          style={theme.style({
                            element: 'headerLinkText',
                          })}
                        >
                          Contact
                        </Text>
                      </Link>
                    </View>
                  </Box>
                </Box>
              </Animated.View>
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

Top.propTypes = {
  height: PropTypes.object,
  opacity: PropTypes.object,
};

export default Top;
