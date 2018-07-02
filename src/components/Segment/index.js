import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { View, Text } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import Box from '../Grid/Box';

const SegmentEntry = (props, child, theme) => {
  const {
    element = 'contentBlock',
    type = 'normal',
    innerType = 'normal',
    gradient,
    children,
  } = props;
  return (
    <View
      key={props.key}
      style={theme.style({
        ...props,
        element: `${element}InnerContainer`,
        type: innerType,
      })}
    >
      {child}
    </View>
  );
};

const renderEntries = (props, theme) => {
  if (Array.isArray(props.children) && props.separate) {
    return props.children.map((child, index) =>
      SegmentEntry({ ...props, key: index }, child, theme),
    );
  }
  return SegmentEntry(props, props.children, theme);
};

const Segment = props => {
  const { gradient, style } = props;
  return (
    <ThemeContext.Consumer>
      {theme => {
        // console.log(props);
        return (
          <LinearGradient
            {...theme.gradient(gradient)}
            style={[
              theme.style(props),
              { backgroundColor: theme.gradient(gradient).fallback },
              style,
            ]}
          >
            <Text
              id={props.anchor}
              style={{ position: 'absolute', top: -40 }}
            />
            <View
              style={theme.style({
                ...props,
                element: 'contentBlockOuterContainer',
              })}
            >
              {renderEntries(props, theme)}
            </View>
          </LinearGradient>
        );
      }}
    </ThemeContext.Consumer>
  );
};
Segment.defaultProps = {
  element: 'contentBlock',
  type: 'normal',
};

Segment.propTypes = {
  element: PropTypes.string,
  type: PropTypes.string,
  outerType: PropTypes.string,
  innerType: PropTypes.string,
  gradient: PropTypes.string,
  children: PropTypes.any,
  style: PropTypes.any,
};

export default Segment;
