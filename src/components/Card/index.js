import React from 'react';
import PropTypes from 'prop-types';
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
            setTimeout(() => navigateTo(`/${site}#${anchor}`), 300)
          }
          style={{
            container: {
              flex: 1,
              marginBottom: theme.sp(3),
            },
          }}
        >
          <LinearGradient
            style={{
              flex: 1,
              backgroundColor: theme.gradient('lightBlock').fallback,
            }}
            {...theme.gradient('lightBlock')}
          >
            <View
              style={{
                marginTop: theme.sp(4),
                width: '100%',
                alignItems: 'center',
              }}
              pointerEvents="none"
            >
              <Icon name={icon} element="aboutIcon" />
            </View>
            <View
              style={theme.style({
                element: 'cardTitle',
              })}
              pointerEvents="none"
            >
              <Header2 centered="true" theme={theme}>
                {title}
              </Header2>
            </View>
            <View
              style={theme.style({
                element: 'cardTextBody',
              })}
              pointerEvents="none"
            >
              {children}
            </View>
            <View
              style={theme.style({
                element: 'cardGoIcon',
              })}
              pointerEvents="none"
            >
              <GoIcon />
            </View>
          </LinearGradient>
        </MaterialCard>
      </Box>
    )}
  </ThemeContext.Consumer>
);

Card.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.any,
  site: PropTypes.string,
  anchor: PropTypes.string,
};

export default Card;
