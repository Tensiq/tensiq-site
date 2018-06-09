import React from 'react';
import Link from 'gatsby-link';
import { Animated, View, Text } from 'react-native';

const Header = () => (
  <View
    style={{
      backgroundColor: 'rebeccapurple',
      marginBottom: 20,
    }}
  >
    <View
      style={{
        alignSelf: 'center',
        width: '100%',
        maxWidth: 960,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
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
              style={{ fontFamily: 'Tensiq', paddingBottom: 4, fontSize: 48, color: '#f5f5f5ff' }}
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
          </View>
        </Link>
      </View>
    </View>
  </View>
);

export default Header;
