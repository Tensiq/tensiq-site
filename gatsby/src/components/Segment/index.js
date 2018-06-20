import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { View } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const Segment = ({
  element = 'contentBlock',
  type = 'normal',
  outerType = 'normal',
  innerType = 'normal',
  gradient,
  children,
}) => (
  <ThemeContext.Consumer>
    {theme => (
      <LinearGradient
        {...theme.gradient(gradient)}
        style={theme.style({
          element,
          type,
        })}
      >
        <View
          style={theme.style({
            element: `${element}OuterContainer`,
            type: outerType,
          })}
        >
          <Box
            style={theme.style({
              element: `${element}InnerContainer`,
              type: innerType,
            })}
          >
            {children}
          </Box>
        </View>
      </LinearGradient>
    )}
  </ThemeContext.Consumer>
);

Segment.propTypes = {
  element: PropTypes.string,
  type: PropTypes.string,
  outerType: PropTypes.string,
  innerType: PropTypes.string,
  gradient: PropTypes.string,
  children: PropTypes.any,
};

export default Segment;
