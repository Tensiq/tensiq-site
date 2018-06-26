import React from 'react';
import { ThemeContext } from '../ThemeProvider';
import { View } from 'react-native';
import Img from 'gatsby-image';
import Box from '../Grid/Box';
import { Header2 } from '../PageHeader';
import { TextNormal } from '../Text';

const Block = ({ title, sizes, children }) => (
  <ThemeContext.Consumer>
    {theme => (
      <Box
        style={theme.style({ element: 'contentColumn3' })}
        {...theme.props.contentColumn3}
      >
        <View
          style={theme.style({
            element: 'contentColumnTitle',
          })}
        >
          <Header2 theme={theme}>{title}</Header2>
        </View>
        {/* <Img sizes={sizes} /> */}
        {/* <TextNormal theme={theme}> */}
        {children}
        {/* </TextNormal> */}
      </Box>
    )}
  </ThemeContext.Consumer>
);

export default Block;
