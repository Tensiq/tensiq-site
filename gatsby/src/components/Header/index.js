import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, Platform, View, Text, StyleSheet } from 'react-native';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const uiTheme = {};

class Header extends React.PureComponent {
  state = {
    fade: new Animated.Value(0),
  };
  componentDidMount() {
    Animated.timing(
      // Animate over time
      this.state.fade, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 1000, // Make it take a while
      },
    ).start();
  }
  render() {
    const { fade } = this.state;
    const { height, opacity } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => {
          // console.log(theme);
          // console.log(theme.style({ element: 'headerContainer' }));
          return (
            <ThemeProvider uiTheme={uiTheme}>
              <Animated.View
                style={[
                  theme.style({ element: 'headerOuterContainer' }),
                  { height, opacity: fade },
                ]}
              >
                <View
                  style={[theme.style({ element: 'headerColor' }), { opacity }]}
                />
                <View style={theme.style({ element: 'headerInnerContainer' })}>
                  <View
                    style={theme.style({
                      element: 'headerLinkOuterContainer',
                    })}
                  >
                    <Link to="/">
                      <View
                        style={{
                          alignItems: 'center',
                          flexDirection: 'row',
                          paddingBottom: theme.sp(1),
                        }}
                      >
                        <Text
                          style={{
                            ...theme.fonts.tensiq,
                            paddingBottom: theme.sp(1),
                            fontSize: 48,
                            color: '#f5f5f5ff',
                          }}
                        >
                          a
                        </Text>
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 32,
                            fontWeight: theme.fontweights.bold,
                            color: '#f5f5f5ff',
                            paddingRight: theme.sp(1),
                            textDecorationLine: 'none',
                          }}
                        >
                          Tensiq
                        </Text>
                      </View>
                    </Link>
                  </View>
                  <Box
                    style={{
                      flex: 1,
                      height: '100%',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      flexDirection: 'row',
                      paddingHorizontal: theme.sp(4),
                    }}
                    display={['none', , 'flex']}
                  >
                    <View
                      style={theme.style({
                        element: 'headerLinkOuterContainer',
                      })}
                    >
                      <Link to="/">
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 24,
                            color: '#f5f5f5ff',
                            paddingHorizontal: theme.sp(1),
                            paddingVertical: theme.sp(2),
                          }}
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
                      <Link to="/about">
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 24,
                            color: '#f5f5f5ff',
                            paddingHorizontal: theme.sp(1),
                            paddingVertical: theme.sp(2),
                          }}
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
                      <Link to="/contact">
                        <Text
                          style={{
                            ...theme.fonts.normal,
                            fontSize: 24,
                            color: '#f5f5f5ff',
                            paddingHorizontal: theme.sp(1),
                            paddingVertical: theme.sp(2),
                          }}
                        >
                          Contact
                        </Text>
                      </Link>
                    </View>
                  </Box>
                </View>
              </Animated.View>
            </ThemeProvider>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

Header.propTypes = {
  height: PropTypes.object,
  opacity: PropTypes.number,
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  barColor: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: '#3a3a3aff',
    opacity: 0,
  },
  bar: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 1200,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    ...Platform.select({
      default: {
        paddingBottom: 2,
      },
      web: {
        paddingBottom: 0,
      },
    }),
  },
  title: {
    flex: 1,
    backgroundColor: 'transparent',
    color: '#f5f5f5ff',
    fontSize: 32,
    fontWeight: 'bold',
    elevation: 8,
  },
  menu: {
    backgroundColor: 'transparent',
    color: '#f5f5f5ff',
    fontSize: 20,
    paddingTop: 4,
    paddingHorizontal: 10,
    elevation: 8,
  },
  logo: {
    fontFamily: 'Tensiq',
    color: '#f5f5f5ff',
    fontSize: 48,
    elevation: 8,
  },
});

export default Header;
