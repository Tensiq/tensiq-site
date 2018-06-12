import React from 'react';

import { Dimensions } from 'react-native';
import { withTheme, ResponsiveContext } from '../../utils/context';

const reducer = (state, action) => {
  if (action.type === 'SET_TEXT') {
    return { ...state, text: { ...state.text, ...action.value } };
  }
};

@withTheme
export default class ResponsiveProvider extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      height: 0,
      width: 0,
      breakpoint: 0,
      text: {},
      style: (element, breakpoint, type) =>
        this.getStyle(element, breakpoint, type),
      dispatch: action => {
        this.setState(state => reducer(state, action));
      },
    };
  }
  getBreakpoint = width => {
    const { theme } = this.props;
    if (!theme.styles || !theme.styles.breakpoints) {
      return 0;
    }
    const breakpoints = theme.styles.breakpoints;
    const diff =
      Math.max(
        ...breakpoints.map(val => val - width).filter(val => val <= 0),
      ) ||
      Math.min(...breakpoints.map(val => val - width).filter(val => val >= 0));
    const bp_width = width + diff;
    return Math.max(0, breakpoints.indexOf(bp_width));
  };
  getStyle = (element, breakpoint, type) => {
    const { theme } = this.props;
    if (theme) {
      return theme.style(element, type, breakpoint);
    } else {
      return null;
    }
  };
  onDimensionsChangeHandler = event => {
    this.updateState(this.props);
  };
  updateState = () => {
    const { width, height } = Dimensions.get('window');
    this.setState({
      ...this.setState,
      height,
      width,
      breakpoint: this.getBreakpoint(width),
    });
    //console.log('width:', width, 'bp:', getBreakpoint(width))
  };
  componentWillMount() {
    Dimensions.addEventListener('change', this.onDimensionsChangeHandler);
  }
  componentWillUnmount() {
    Dimensions.removeEventListener('change', this.onDimensionsChangeHandler);
  }
  componentDidMount() {
    this.updateState();
  }
  componentDidUpdate() {
    this.updateState();
  }
  render() {
    const {
      props: { children },
      state,
    } = this;
    return (
      <ResponsiveContext.Provider value={state}>
        {children}
      </ResponsiveContext.Provider>
    );
  }
}

export { withResponsiveTheme } from '../../utils/context';
