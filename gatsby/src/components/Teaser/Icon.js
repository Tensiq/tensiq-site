import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Grid/Box';
import Icon from '../Icon';
import { ThemeContext } from '../ThemeProvider';

const TeaserIcon = ({ name, element, type }) => (
  <ThemeContext.Consumer>
    {theme => {
      const el =
        element === undefined || element === 'undefined'
          ? 'teaserIcon'
          : element;
      const ty = type === undefined || type === 'undefined' ? 'normal' : type;
      const boxEl = `${el}Box`;
      const boxProperties =
        theme.props[boxEl] && theme.props[boxEl][ty]
          ? theme.props[boxEl][ty]
          : null;
      return (
        <Box element={boxEl} type={ty} {...boxProperties}>
          <Icon name={name} element={el} type={ty} />
        </Box>
      );
    }}
  </ThemeContext.Consumer>
);

TeaserIcon.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  element: PropTypes.string,
};

export default TeaserIcon;
