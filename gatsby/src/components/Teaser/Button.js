import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Link from '../RippleLink';
import { ThemeContext } from '../ThemeProvider';

const TeaserButton = ({ text, link }) => {
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View
          style={theme.style({
            element: 'teaserButtonContainer',
          })}
        >
          <Link
            to={link}
            style={{ flex: 1 }}
            contentStyle={theme.style({
              element: 'teaserButtonContent',
            })}
            rippleColor={theme.color('teaserButtonRipple')}
          >
            <LinearGradient
              {...theme.gradient('lightBlock')}
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Text
                style={theme.style({
                  element: 'teaserButtonText',
                })}
              >
                {text}
              </Text>
            </LinearGradient>
          </Link>
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

TeaserButton.propTypes = {
  text: PropTypes.string,
  link: PropTypes.string,
};

export default TeaserButton;
