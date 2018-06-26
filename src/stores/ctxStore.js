import React from 'react';
import { initStore } from 'react-waterfall';

const baseStore = {
  initialState: {
    data: '',
  },
  actions: {
    setData: ({ data }, newData) => ({
      data: newData,
    }),
    persist: state => {
      if (typeof localStorage !== 'undefined') {
        for (let key in state) {
          if (key === 'actions') {
            continue;
          }
          localStorage.setItem(key, JSON.stringify(state[key]));
        }
      }
      return state;
    },
  },
};

const hydrate = store => {
  if (typeof localStorage !== 'undefined') {
    for (let key in store.initialState) {
      if (localStorage.hasOwnProperty(key)) {
        let value = localStorage.getItem(key);
        try {
          value = JSON.parse(value);
          store.initialState[key] = value;
        } catch (e) {
          store.initialState[key] = value;
        }
      }
    }
  }
  return store;
};

export const {
  Provider,
  Consumer,
  actions,
  getState,
  connect,
  subscribe,
} = initStore(hydrate(baseStore));

Provider.prototype.componentDidMount = function() {
  window.addEventListener('beforeunload', actions.persist);
};

Provider.prototype.componentWillUnmount = function() {
  window.removeEventListener('beforeunload', actions.persist);
  actions.persist();
};
