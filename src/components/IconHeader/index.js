import React from 'react';
import PropTypes from 'prop-types';
import Box from '../Grid/Box';
import Icon from '../Icon';
import { View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';

const IconHeader = ({
  icon,
  title,
  content,
  type = 'normal',
  boxType = 'normal',
}) => (
  <ThemeContext.Consumer>
    {theme => (
      <View style={{ flex: -1, flexDirection: 'row' }}>
        <Box
          style={theme.style({ element: 'headerIconLeft', type: boxType })}
          {...theme.props.headerIconLeft[boxType]}
        >
          <Icon name={icon} element="headerIcon" type={type} />
        </Box>
        <View
          style={theme.style({ element: 'headerContent', type: boxType })}
        >
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
              type: boxType,
            })}
            {...theme.props.headerIconCenter[boxType]}
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
