import React from 'react';
import { Dimensions } from 'react-native';
import theme from '../../utils/theme';

export const ThemeContext = React.createContext();

const reducer = (state, action) => {
  if (action.type === 'SET_THEME') {
    return { ...state, ...action.value };
  }
};

export default class ThemeProvider extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    width: 0,
    height: 0,
    breakpoint: 0,
    ...theme,
    style: props => this.getStyle(props),
    dispatch: action => {
      this.setState(state => reducer(state, action));
    },
  };
  getBreakpoint = width => {
    const { breakpoints } = this.state;
    const diff =
      Math.max(
        ...breakpoints.map(val => val - width).filter(val => val <= 0),
      ) ||
      Math.min(...breakpoints.map(val => val - width).filter(val => val >= 0));
    const bp_width = width + diff;
    return Math.max(0, breakpoints.indexOf(bp_width));
  };
  getStyle = props => {
    const { element, type = 'normal' } = props;
    const { breakpoint } = this.state;
    if (element === undefined) {
      return null;
    }
    const { styles } = this.state;
    const elementStyles = styles[element];
    const typeToUse = elementStyles[type] ? type : 'normal';
    var elementStyle = undefined;
    if (typeof elementStyles[typeToUse] === 'function') {
      const styleFunc = elementStyles[typeToUse];
      elementStyle = styleFunc(props);
    } else {
      elementStyle = elementStyles[typeToUse];
    }
    const bestBp =
      breakpoint -
      Math.min(
        ...Object.keys(elementStyle)
          .map(value => breakpoint - value)
          .filter(value => value >= 0),
      );
    return elementStyle[bestBp];
  };
  onDimensionsChangeHandler = event => {
    this.updateState(this.props);
  };
  updateState = () => {
    const { width, height } = Dimensions.get('window');
    const breakpoint = this.getBreakpoint(width);
    if (breakpoint != this.state.breakpoint) {
      this.setState({
        ...this.setState,
        height,
        width,
        breakpoint: this.getBreakpoint(width),
      });
      // console.log('width:', width, 'bp:', this.getBreakpoint(width));
    }
    // console.log('width:', width, 'bp:', this.getBreakpoint(width));
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
      state,
      props: { children },
    } = this;
    return (
      <ThemeContext.Provider value={state}>{children}</ThemeContext.Provider>
    );
  }
}
