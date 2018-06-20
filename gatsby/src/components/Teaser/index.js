import React from 'react';
import PropTypes from 'prop-types';
import TeaserIcon from './Icon';
import { View } from 'react-native';

const Teaser = ({ children, icon }) => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <TeaserIcon name={icon} type="left" />
    <View style={{ flex: 1 }}>{children}</View>
  </View>
);

Teaser.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.any,
};

export default Teaser;
export { default as Icon } from './Icon';
export { default as Button } from './Button';
export { default as Text } from './Text';
export { default as Title } from './Title';
