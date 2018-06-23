import React from 'react';
import PropTypes from 'prop-types';
import { Text, Linking } from 'react-native';

const LinkNormal = props => (
  <Text
    {...props}
    onPress={() => Linking.openURL(props.href)}
    style={{ textDecorationLine: 'underline' }}
  />
);

LinkNormal.propTypes = {
  href: PropTypes.string,
};

export default LinkNormal;
