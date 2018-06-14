import Color from 'color';

const colors = {
  header: '#3a3a3aff',
  footer: '#3a3a3aff',
  text: '#f5f5f5ff',
  rippleHeader: '#f5f5f580',
  rippleFooter: '#f5f5f580',
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
};

export default color => Color(colors[color]);

export const gradient = gradient => gradients[gradient];
