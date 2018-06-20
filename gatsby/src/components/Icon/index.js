import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeProvider';

import { createIconSet } from 'react-native-vector-icons';

import solidGlyphMap from '../../fonts/fa-solid-900';
import brandGlyphMap from '../../fonts/fa-brands-400';
import customGlyphMap from '../../fonts/Tensiq';

export const Icon = {
  Solid: createIconSet(solidGlyphMap, 'FontAwesomeSolid'),
  Brand: createIconSet(brandGlyphMap, 'FontAwesomeBrands'),
  Custom: createIconSet(customGlyphMap, 'Tensiq'),
};

const createStyleElement = (group, props, theme) => {
  const styledProps = {
    ...props,
    style: [
      props.style,
      theme.style({
        element:
          props.element === 'undefined' || props.element === undefined
            ? 'icon'
            : props.element,
        type: props.type || 'normal',
      }),
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
