import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const RowWrapper = ({ children }) => (
  <View
    style={{
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
    }}
  >
    {children}
  </View>
);

RowWrapper.propTypes = {
  children: PropTypes.any,
};

export default RowWrapper;
