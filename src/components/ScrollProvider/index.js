import React from 'react';

export const ScrollContext = React.createContext();

const getCleanUrl = url => /(\/[A-Za-z0-9_-]*)\/?/.exec(url)[1];

class ScrollProvider extends React.PureComponent {
  state = {
    anchor: {},
    addAnchor: (text, pos) => {
      this.state.anchor[getCleanUrl(this.props.location)][text] = pos;
      if (this.props.hash && this.props.hash.substring(1) === text) {
        this.forceUpdate();
      }
    },
  };
  processHash() {
    const {
      props: { scrollView, location, hash },
      state: { anchor },
    } = this;
    if (!scrollView) return;
    if (!hash || hash === '') return;
    const pos = anchor[getCleanUrl(location)][hash.substring(1)] || 0;
    scrollView.current.scrollTo({ x: 0, y: pos - 50, animated: true });
  }
  componentDidUpdate(prevProps, prevState) {
    this.props.scrollView.current.scrollTo({ x: 0, y: 0, animated: false })
    this.processHash();
  }
  componentDidMount() {
    this.props.scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
    this.processHash();
  }
  render() {
    console.log('render')
    const { children, hash } = this.props;
    if (!this.state.anchor[getCleanUrl(this.props.location)]) {
      this.state.anchor[getCleanUrl(this.props.location)] = {};
    }
    return (
      <ScrollContext.Provider value={this.state}>
        {children}
      </ScrollContext.Provider>
    );
  }
}

export default ScrollProvider;
