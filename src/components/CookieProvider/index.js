import React from 'react';
import Cookies from 'universal-cookie';

export const CookieContext = React.createContext();

export default class CookieProvider extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  state = {
    cookies: new Cookies()
  };
  render() {
    const {
      state,
      props: { children },
    } = this;
    return (
      <CookieContext.Provider value={state.cookies}>{children}</CookieContext.Provider>
    );
  }
}
