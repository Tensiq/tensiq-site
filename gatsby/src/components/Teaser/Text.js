import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const TeaserText = props => {
  const { children } = props;
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Text
          style={theme.style({
            element: 'teaserText',
          })}
        >
          {children}
        </Text>
      )}
    </ThemeContext.Consumer>
  );
};

TeaserText.propTypes = {
  children: PropTypes.any,
};

export default TeaserText;
