import React from 'react';
import { View, Text, Animated } from 'react-native';
import Icon from '../Icon';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Button from 'react-native-material-ui/src/Button';
import { ThemeContext } from '../ThemeProvider';

const CookieContainer = props => (
  <ThemeProvider uiTheme={{}}>
    <ThemeContext.Consumer>
      {theme => (
        <View style={theme.style({ element: 'footerCookieContainer' })}>
          <Icon size={36} color={theme.color('lightText')} name="cookie-bite" />
          <View
            style={theme.style({
              element: 'footerCookieTextContainer',
            })}
          >
            <Text style={theme.style({ element: 'footerCookieText' })}>
              We are using cookies ...
            </Text>
          </View>
          <Button
            raised={true}
            upperCase={false}
            text="I agree"
            style={{
              container: theme.style({
                element: 'footerCookieButton',
              }),
              text: theme.style({
                element: 'footerCookieButtonText',
              }),
            }}
          />
        </View>
      )}
    </ThemeContext.Consumer>
  </ThemeProvider>
);

export default CookieContainer;
