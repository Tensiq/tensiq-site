import React from 'react';
import Link from '../RippleLink';
import PropTypes from 'prop-types';
import { Animated, Platform, View, Text, StyleSheet } from 'react-native';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const uiTheme = {};

const Header = ({ height, opacity }) => (
  <ThemeContext.Consumer>
    {theme => (
      <ThemeProvider uiTheme={uiTheme}>
        <Animated.View style={[styles.header, { height }]}>
          <View style={[styles.barColor, { opacity }]} />
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              flex: 1,
              alignSelf: 'center',
              justifyContent: 'center',
              width: '100%',
              maxWidth: 960,
              paddingHorizontal: theme.sp(2),
            }}
          >
            <Box
              style={{
                alignItems: 'center',
                flexDirection: 'row',
              }}
              justifyContent={['center', , 'flex-start']}
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
                      fontFamily: 'Tensiq',
                      paddingBottom: theme.sp(1),
                      fontSize: 48,
                      color: '#f5f5f5ff',
                    }}
                  >
                    a
                  </Text>
                  <Text
                    style={{
                      fontFamily: 'OpenSans',
                      fontSize: 32,
                      fontWeight: 'bold',
                      color: '#f5f5f5ff',
                      paddingRight: theme.sp(1),
                      textDecorationLine: 'none',
                    }}
                  >
                    Tensiq
                  </Text>
                </View>
              </Link>
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
                <View style={{ height: '100%', marginHorizontal: 2 }}>
                  <Link to="/">
                    <Text
                      style={{
                        fontFamily: 'OpenSans',
                        fontSize: 24,
                        fontWeight: 'normal',
                        color: '#f5f5f5ff',
                        paddingHorizontal: theme.sp(1),
                        paddingVertical: theme.sp(2),
                      }}
                    >
                      Services
                    </Text>
                  </Link>
                </View>
                <View style={{ height: '100%', marginHorizontal: 2 }}>
                  <Link to="/about">
                    <Text
                      style={{
                        fontFamily: 'OpenSans',
                        fontSize: 24,
                        fontWeight: 'normal',
                        color: '#f5f5f5ff',
                        paddingHorizontal: theme.sp(1),
                        paddingVertical: theme.sp(2),
                      }}
                    >
                      About
                    </Text>
                  </Link>
                </View>
                <View style={{ height: '100%', marginHorizontal: 2 }}>
                  <Link to="/">
                    <Text
                      style={{
                        fontFamily: 'OpenSans',
                        fontSize: 24,
                        fontWeight: 'normal',
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
            </Box>
          </View>
        </Animated.View>
      </ThemeProvider>
    )}
  </ThemeContext.Consumer>
);

Header.propTypes = {
  height: PropTypes.object,
  opacity: PropTypes.number,
};

const styles = StyleSheet.create({
  fill: {
    flex: 1,
  },
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    ...Platform.select({
      default: {
        paddingBottom: 10,
      },
      web: {
        paddingBottom: 8,
      },
    }),
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
