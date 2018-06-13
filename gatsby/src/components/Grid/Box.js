import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeProvider';
import { View, StyleSheet } from 'react-native';

const withDirection = key =>
  ['', 'Top', 'Bottom', 'Left', 'Right', 'Horizontal', 'Vertical'].map(
    value => key + value,
  );

const getProp = key =>
  key[0] +
  []
    .concat(key.match(/[A-Z]/g))
    .join('')
    .toLowerCase();

const spaceToPixel = ({ value, props }) => props.theme.spaces[parseInt(value)];
const plain = ({ value }) => value;
const toPercent = ({ value }) => value * 100 + '%';

const props = {
  padding: {
    direction: true,
    convert: spaceToPixel,
  },
  margin: {
    direction: true,
    convert: spaceToPixel,
  },
  width: {
    direction: false,
    convert: toPercent,
  },
  color: {
    direction: false,
    convert: plain,
  },
  display: {
    direction: false,
    convert: plain,
  },
  alignItems: {
    direction: false,
    convert: plain,
  },
  justifyContent: {
    direction: false,
    convert: plain,
  },
};

const getPropMap = () => {
  const propMap = {};
  Object.keys(props).forEach(key => {
    if (props[key].direction) {
      withDirection(key).forEach(keyWithDir => {
        propMap[getProp(keyWithDir)] = {
          name: keyWithDir,
          convert: props[key].convert,
        };
      });
    } else {
      propMap[key] = {
        name: key,
        convert: props[key].convert,
      };
    }
  });
  return propMap;
};

// styleArray: { m:[1,1,2], p:[2,2,4], pt:[1], width:[1,1,3,4] }
// test -> getStyleSheets({w:[1,2,3],p:[1,2,3],pl:[3,2],mr:[4,3,2,1]})
const getStyleSheets = props => {
  const propMap = getPropMap();
  const propsToMap = Object.keys(props).filter(
    key => Object.keys(propMap).indexOf(key) >= 0,
  );
  const styleSheets = [];
  for (var key = 0; key < props.theme.breakpoints.length; key++) {
    styleSheets[key] = {};
    propsToMap.forEach(styleKey => {
      const prop = propMap[styleKey];
      const value =
        props[styleKey][key] === undefined
          ? undefined
          : prop.convert({ value: props[styleKey][key], props });
      styleSheets[key][prop.name] =
        value === undefined ? styleSheets[key - 1][prop.name] : value;
    });
  }
  return styleSheets;
};

export default class Box extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  getStyleSheet = theme => {
    if (this.styleSheets === undefined) {
      const props = {
        ...this.props,
        theme,
      };
      this.styleSheets = getStyleSheets(props);
    }
    return this.styleSheets;
  };
  render() {
    // console.log(this.props.width[0]);
    const { children, style } = this.props;
    return (
      <ThemeContext.Consumer>
        {theme => {
          // console.log(this.getStyleSheet(theme));
          return (
            <View
              {...this.props}
              style={[style, this.getStyleSheet(theme)[theme.breakpoint]]}
            >
              {children}
            </View>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

Box.propTypes = {
  children: PropTypes.any,
  style: PropTypes.any,
};
