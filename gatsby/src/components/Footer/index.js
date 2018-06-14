import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, View, Text } from 'react-native';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const uiTheme = {};

class Footer extends React.PureComponent {
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
    return (
      <ThemeContext.Consumer>
        {theme => (
          <ThemeProvider uiTheme={uiTheme}>
            <Animated.View style={{ opacity: fade }}>
              <Box
                style={theme.style({ element: 'footerOuterContainer' })}
                display={['flex', null, 'none']}
              >
                <View style={theme.style({ element: 'footerColor' })} />
                <View style={theme.style({ element: 'footerInnerContainer' })}>
                  <View
                    style={theme.style({ element: 'footerLinkOuterContainer' })}
                  >
                    <Link
                      to="/"
                      contentStyle={theme.style({
                        element: 'footerLinkContent',
                      })}
                      rippleColor={theme.color('rippleFooter')}
                    >
                      <Text style={theme.style({ element: 'footerLinkText' })}>
                        Services
                      </Text>
                    </Link>
                  </View>
                  <View
                    style={theme.style({ element: 'footerLinkOuterContainer' })}
                  >
                    <Link
                      to="/about"
                      contentStyle={theme.style({
                        element: 'footerLinkContent',
                      })}
                      rippleColor={theme.color('rippleFooter')}
                    >
                      <Text style={theme.style({ element: 'footerLinkText' })}>
                        About
                      </Text>
                    </Link>
                  </View>
                  <View
                    style={theme.style({ element: 'footerLinkOuterContainer' })}
                  >
                    <Link
                      to="/contact"
                      contentStyle={theme.style({
                        element: 'footerLinkContent',
                      })}
                      rippleColor={theme.color('rippleFooter')}
                    >
                      <Text style={theme.style({ element: 'footerLinkText' })}>
                        Contact
                      </Text>
                    </Link>
                  </View>
                </View>
              </Box>
            </Animated.View>
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    );
  }
}

Footer.propTypes = {
  height: PropTypes.object,
  opacity: PropTypes.number,
};

export default Footer;
