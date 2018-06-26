import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const TeaserTitle = props => {
  const { children } = props;
  return (
    <ThemeContext.Consumer>
      {theme => (
        <Text
          style={theme.style({
            element: 'teaserTitleText',
          })}
        >
          {children}
        </Text>
      )}
    </ThemeContext.Consumer>
  );
};

TeaserTitle.propTypes = {
  children: PropTypes.any,
};

export default TeaserTitle;
