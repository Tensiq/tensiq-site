import React from 'react';
import PropTypes from 'prop-types';
import { navigateTo } from 'gatsby-link';
import { Text, Linking } from 'react-native';

const openURL = url => {
  const internal = /^\/(?!\/)/.test(url);
  if (internal) {
    navigateTo(url);
  } else {
    Linking.openURL(url);
  }
};

const LinkNormal = props => (
  <Text
    {...props}
    onPress={() => openURL(props.href)}
    style={[{ textDecorationLine: 'underline' }, props.style]}
  />
);

LinkNormal.propTypes = {
  href: PropTypes.string,
};

export default LinkNormal;
