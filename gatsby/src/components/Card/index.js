import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../Grid/Box';
import { Header2 } from '../PageHeader';
import { navigateTo } from 'gatsby-link';
import { View } from 'react-native';
import { ThemeContext } from '../ThemeProvider';
import Icon from '../Icon';
import MaterialCard from 'react-native-material-ui/src/Card';

const GoIcon = () => <Icon name="arrow-circle-right" element="goIcon" />;

const Card = ({ title, icon, children, site, anchor }) => (
  <ThemeContext.Consumer>
    {theme => (
      <Box
        style={theme.style({ element: 'contentCard3' })}
        {...theme.props.contentColumn3}
      >
        <MaterialCard
          onPress={() =>
            setTimeout(() => navigateTo(`/${site}#${anchor}`), 400)
          }
          style={{
            container: {
              flex: 1,
              marginBottom: theme.sp(3),
            },
          }}
        >
          <LinearGradient style={{ flex: 1 }} {...theme.gradient('lightBlock')}>
            <View
              style={{
                marginTop: theme.sp(4),
                width: '100%',
                alignItems: 'center',
              }}
            >
              <Icon name={icon} element="aboutIcon" />
            </View>
            <View
              style={theme.style({
                element: 'cardTitle',
              })}
            >
              <Header2 centered="true" theme={theme}>
                {title}
              </Header2>
            </View>
            <View
              style={theme.style({
                element: 'cardTextBody',
              })}
            >
              {children}
            </View>
            <View
              style={theme.style({
                element: 'cardGoIcon',
              })}
            >
              <GoIcon />
            </View>
          </LinearGradient>
        </MaterialCard>
      </Box>
    )}
  </ThemeContext.Consumer>
);

export default Card;
