import React from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../ThemeProvider';
import LinearGradient from 'react-native-web-linear-gradient';
import Card from 'react-native-material-ui/src/Card';
import { View } from 'react-native';
import { Header2 } from '../PageHeader';
import { TextNormal } from '../Text';
import Icon from '../Icon';

const PlainCard = ({ icon, title, content, style }) => (
  <ThemeContext.Consumer>
    {theme => (
      <Card
        style={{
          container: { ...theme.rawStyles.cardContainer.normal, ...style },
        }}
      >
        <LinearGradient
          style={[
            theme.style({
              element: 'cardGradient',
              type: 'withLongText',
            }),
            { backgroundColor: theme.gradient('lightBlock').fallback },
          ]}
          {...theme.gradient('lightBlock')}
        >
          <View
            style={theme.style({
              element: 'cardTitle',
              type: 'withLongText',
            })}
          >
            <Icon name={icon} element="cardTitleIcon" />
            <Header2 theme={theme} style={{ marginTop: 0 }}>
              {title}
            </Header2>
          </View>
          <View
            style={theme.style({
              element: 'cardTextBody',
              type: 'withLongText',
            })}
          >
            {content}
          </View>
        </LinearGradient>
      </Card>
    )}
  </ThemeContext.Consumer>
);

PlainCard.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.any,
  content: PropTypes.any,
  style: PropTypes.any,
};

export default PlainCard;
