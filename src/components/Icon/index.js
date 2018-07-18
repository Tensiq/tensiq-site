import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeProvider';

import { createIconSet } from 'react-native-vector-icons';

import solidGlyphMap from '../../fonts/raw/icon/fa-solid-900';
import regularGlyphMap from '../../fonts/raw/icon/fa-regular-400';
import brandGlyphMap from '../../fonts/raw/icon/fa-brands-400';
import customGlyphMap from '../../fonts/raw/icon/Tensiq';

export const Icon = {
  Regular: createIconSet(regularGlyphMap, 'FontAwesomeRegular'),
  Solid: createIconSet(solidGlyphMap, 'FontAwesomeSolid'),
  Brand: createIconSet(brandGlyphMap, 'FontAwesomeBrands'),
  Custom: createIconSet(customGlyphMap, 'Tensiq'),
};

const createStyleElement = (group, props, theme) => {
  const element =
    props.element === 'undefined' || props.element === undefined
      ? 'icon'
      : props.element;
  const styledProps = {
    ...props,
    element,
    style: [
      theme.style({
        element,
        type: props.type || 'normal',
      }),
      props.style,
    ],
  };
  return React.createElement(group, styledProps);
};

const TextIcon = props => {
  const group = Object.values(Icon).find(group => group.hasIcon(props.name));
  if (group === undefined) {
    return null;
  }
  return (
    <ThemeContext.Consumer>
      {theme => createStyleElement(group, props, theme)}
    </ThemeContext.Consumer>
  );
};

TextIcon.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any,
};

export default TextIcon;
