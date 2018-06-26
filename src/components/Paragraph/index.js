import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const Paragraph = props => (
  <ThemeContext.Consumer>
    {theme => (
      <View
        {...props}
        style={theme.style({
          element: 'paragraph',
          type: props.type ? props.type : 'normal',
        })}
      />
    )}
  </ThemeContext.Consumer>
);

Paragraph.propTypes = {
  type: PropTypes.string,
};

export default Paragraph;
