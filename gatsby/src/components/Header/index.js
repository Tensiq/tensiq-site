import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import { Animated, Platform, View, Text, StyleSheet } from 'react-native';

const Header = ({ height, opacity }) => (
  <Animated.View style={[styles.header, { height }]}>
    <View style={[styles.barColor, { opacity }]} />
    <View
      style={{
        alignSelf: 'center',
        width: '100%',
        maxWidth: 960,
        padding: 20,
      }}
    >
      <View style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <Text
              style={{
                fontFamily: 'Tensiq',
                paddingBottom: 4,
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
              }}
            >
              Tensiq
            </Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                flexDirection: 'row',
              }}
            >
              <Text
                style={{
                  fontFamily: 'OpenSans',
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#f5f5f5ff',
                  paddingHorizontal: 15,
                }}
              >
                Services
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans',
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#f5f5f5ff',
                  paddingHorizontal: 15,
                }}
              >
                About
              </Text>
              <Text
                style={{
                  fontFamily: 'OpenSans',
                  fontSize: 24,
                  fontWeight: 'normal',
                  color: '#f5f5f5ff',
                  paddingHorizontal: 15,
                }}
              >
                Contact
              </Text>
            </View>
          </View>
        </Link>
      </View>
    </View>
  </Animated.View>
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
    height: 100,
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
