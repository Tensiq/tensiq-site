import React from 'react';

import { View, StyleSheet } from 'react-native';

export const RowContext = React.createContext();

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default class Row extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      size: props.size > 0 ? props.size : 12,
    };
  }
  render() {
    const {
      state,
      props: { style, children },
    } = this;
    return (
      <View {...this.props} style={[styles.row]}>
        <RowContext.Provider value={state}>{children}</RowContext.Provider>
      </View>
    );
  }
}
