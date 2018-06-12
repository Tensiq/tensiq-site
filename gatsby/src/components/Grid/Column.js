import React from 'react';

import { RowContext } from './Row';
import { ThemeContext } from '../ThemeProvider';

import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'column',
  },
});

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

const props = {
  padding: {
    direction: true,
    convert: ({ value, props }) => spaceToPixel(value, props.theme.spaces),
  },
  margin: {
    direction: true,
    convert: ({ value, props }) => spaceToPixel(value, props.theme.spaces),
  },
  width: {
    direction: false,
    convert: ({ value, props }) => gridToPercent(value, props.row.size),
  },
  color: {
    direction: false,
    convert: ({ value }) => value,
  },
  display: {
    direction: false,
    convert: ({ value }) => value,
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

const spaceToPixel = (value, spaces) => spaces[parseInt(value)];
const gridToPercent = (value, max) => parseInt(value) * 100 / max + '%';

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

export default class Column extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  getStyleSheet = (size, theme) => {
    if (this.styleSheets === undefined) {
      const props = {
        ...this.props,
        theme,
        row: {
          size,
        },
      };
      this.styleSheets = getStyleSheets(props);
    }
    return this.styleSheets;
  };
  render() {
    // console.log(this.props.width[0]);
    const { children } = this.props;
    return (
      <RowContext.Consumer>
        {({ size }) => (
          <ThemeContext.Consumer>
            {theme => {
              console.log(this.getStyleSheet(size, theme));
              return (
                <View
                  style={[
                    styles.row,
                    this.getStyleSheet(size, theme)[theme.breakpoint],
                  ]}
                  {...this.props}
                >
                  {children}
                </View>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </RowContext.Consumer>
    );
  }
}
