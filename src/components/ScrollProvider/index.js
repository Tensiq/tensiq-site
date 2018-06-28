import React from 'react';

export const ScrollContext = React.createContext();

class ScrollProvider extends React.PureComponent {
  state = {
    anchor: {},
    addAnchor: (text, pos) =>
      (this.state.anchor[this.props.location][text] = pos),
  };
  processHash() {
    const {
      props: { scrollView, location, hash },
      state: { anchor },
    } = this;
    if (!scrollView) return;
    if (!hash || hash === '') return;
    const pos = anchor[location][hash.substring(1)] || 0;
    scrollView.current.scrollTo({ x: 0, y: pos - 50, animated: true });
  }
  componentDidUpdate(prevProps, prevState) {
    this.props.scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
    if (prevProps.hash == this.props.hash) return;
    this.processHash();
  }
  componentDidMount() {
    this.props.scrollView.current.scrollTo({ x: 0, y: 0, animated: false });
    this.processHash();
  }
  render() {
    const { children, hash } = this.props;
    if (!this.state.anchor[this.props.location]) {
      this.state.anchor[this.props.location] = {};
    }
    return (
      <ScrollContext.Provider value={this.state}>
        {children}
      </ScrollContext.Provider>
    );
  }
}

export default ScrollProvider;
