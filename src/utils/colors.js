import Color from 'color';

const colors = {
  header: '#3a3a3aff',
  footer: '#3a3a3aff',
  footnotes: '#4b4b4bff',
  lightText: '#f5f5f5ff',
  darkText: '#2b2b2bff',
  headerRipple: '#f5f5f580',
  footerRipple: '#f5f5f580',
  teaserButtonRipple: '#3a3a3aff',
};

const gradients = {
  darkBlock1: {
    start: { x: 0.0, y: 0.25 },
    end: { x: 1.0, y: 0.9 },
    colors: ['#632e96ff', '#125aa5ff', '#48c4d9ff'],
  },
  darkBlock2: {
    start: { x: 0.7, y: 0.0 },
    end: { x: 0.3, y: 1.0 },
    colors: ['#632e96ff', '#125aa5ff', '#48c4d9ff'],
  },
  lightBlock: {
    start: { x: 0.0, y: 0.25 },
    end: { x: 1.0, y: 0.9 },
    colors: ['#e8dae9ff', '#b0d6f9ff'],
  },
  blackBlock: {
    start: { x: 0.0, y: 0.25 },
    end: { x: 1.0, y: 0.9 },
    colors: ['#323232ff', '#666666ff'],
  },
};

export default color => Color(colors[color]);

export const gradient = gradient => gradients[gradient];
