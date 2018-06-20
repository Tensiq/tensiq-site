import React from 'react';
import { ThemeContext } from '../ThemeProvider';
import { View } from 'react-native';
import Img from 'gatsby-image';
import Box from '../Grid/Box';
import { Header2 } from '../PageHeader';
import { TextNormal } from '../components/Text';

const Block = ({ title, image, children }) => (
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
        <Img sizes={data.imgModernMobileWebApps.childImageSharp.sizes} />
        <TextNormal theme={theme}>{children}</TextNormal>
      </Box>
    )}
  </ThemeContext.Consumer>
);

export default Block;
