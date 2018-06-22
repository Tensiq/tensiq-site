import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Grid/Box';
import Icon from '../Icon';
import { View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const IconHeader = ({ icon, title, content, type = 'normal' }) => (
  <ThemeContext.Consumer>
    {theme => (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <Box
          style={theme.style({ element: 'headerIconLeft' })}
          {...theme.props.headerIcon.left}
        >
          <Icon name={icon} element="headerIcon" type={type} />
        </Box>
        <View style={{ flex: 1 }}>
          <Text
            style={theme.style({
              element: 'headerTitleText',
              light: !(type === 'dark'),
            })}
          >
            {title}
          </Text>
          <Box
            style={theme.style({
              element: 'headerIconCenter',
            })}
            {...theme.props.headerIcon.normal}
          >
            <Icon name={icon} element="headerIcon" type={type} />
          </Box>
          <Text
            style={theme.style({
              element: 'headerText',
              type: type,
            })}
          >
            {content}
          </Text>
        </View>
      </View>
    )}
  </ThemeContext.Consumer>
);

IconHeader.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.any,
  content: PropTypes.any,
  type: PropTypes.string,
};

export default IconHeader;
