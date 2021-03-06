import React from 'react';
import { View, Text, Animated } from 'react-native';
import Icon from '../Icon';
import Box from '../Grid/Box';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Button from 'react-native-material-ui/src/Button';
import { ThemeContext } from '../ThemeProvider';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../../utils/cleanHtmlAst';
import { TextNormal, TextStrong } from '../Text';
import Link from '../Link/Plain';
import { cookieAcceptDistance } from '../../utils/theme';

const PRIVACY_PATH = '/privacy';

const TextNormalLight = props => <TextNormal {...props} type="light" />;
const TextStrongLight = props => <TextStrong {...props} type="light" />;

const renderText = new rehypeReact({
  createElement: React.createElement,
  components: {
    view: View,
    text: TextNormalLight,
    strong: TextStrongLight,
    a: Link,
    icon: Icon,
  },
}).Compiler;

const AcceptButton = ({ theme, acceptCookies }) => (
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
    onPress={() => acceptCookies({ animate: true })}
  />
);

class CookieContainer extends React.PureComponent {
  constructor(props) {
    super();
    const { cookies } = props;
    const initialValue = cookies.get('cookieAccepted')
      ? cookieAcceptDistance * 2
      : 0;
    const acceptingCookie = new Animated.Value(initialValue);
    const scrollYCookie = Animated.add(props.scrollY, acceptingCookie);
    this.state = {
      acceptingCookie,
      scrollYCookie,
      cookieAccepted: cookies.get('cookieAccepted') || false,
      height: 0,
      top: 0,
    };
  }
  scrollHandler = scrollY => {
    if (
      this.props.location.pathname !== PRIVACY_PATH &&
      !this.state.cookieAccepted &&
      scrollY > cookieAcceptDistance * 2
    ) {
      this.acceptCookies();
    }
  };
  acceptCookies = options => {
    let animate = false;
    if (options) {
      animate = options.animate;
    }
    if (animate) {
      this.state.acceptingCookie.setValue(cookieAcceptDistance);
      Animated.timing(this.state.acceptingCookie, {
        toValue: cookieAcceptDistance * 2,
        duration: 1000,
      }).start(() => {
        this.saveCookieDecision();
      });
    } else {
      this.saveCookieDecision();
    }
  };
  saveCookieDecision = () => {
    const { cookies } = this.props;
    cookies.set('cookieAccepted', true, { path: '/' });
    this.setState(prevState => ({
      ...prevState,
      cookieAccepted: true,
    }));
  };
  onLayout({
    nativeEvent: {
      layout: { x, y, width, height },
    },
  }) {
    this.setState(prevState => ({ ...prevState, height: height }));
  }
  render() {
    const { data } = this.props;
    const cookieScroll = this.state.scrollYCookie.interpolate({
      inputRange: [0, cookieAcceptDistance, cookieAcceptDistance * 2],
      outputRange: [-this.state.height, -this.state.height, 0.0],
      extrapolate: 'clamp',
    });
    const cookieScrollLocal = this.state.acceptingCookie.interpolate({
      inputRange: [0, cookieAcceptDistance, cookieAcceptDistance * 2],
      outputRange: [-this.state.height, -this.state.height, 0.0],
      extrapolate: 'clamp',
    });
    return (
      <ThemeProvider uiTheme={{}}>
        <ThemeContext.Consumer>
          {theme => (
            <Animated.View
              style={[
                theme.style({ element: 'footerCookieContainer' }),
                this.props.location.pathname !== PRIVACY_PATH
                  ? { top: cookieScroll }
                  : { top: cookieScrollLocal },
              ]}
              onLayout={this.onLayout.bind(this)}
            >
              <View style={{ flexDirection: 'column', flex: 1 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    width: '100%',
                  }}
                >
                  <View
                    style={{ alignSelf: 'flex-start', paddingTop: theme.sp(1) }}
                  >
                    <Icon
                      size={36}
                      style={{
                        color: theme.color('lightText'),
                      }}
                      name={data.frontmatter.icon}
                    />
                  </View>
                  <View
                    style={theme.style({
                      element: 'footerCookieTextContainer',
                    })}
                  >
                    <Text style={theme.style({ element: 'footerCookieText' })}>
                      {renderText(cleanHtmlAst(data.htmlAst))}
                    </Text>
                  </View>
                  <Box
                    display={['none', 'none', 'flex']}
                    style={{ marginLeft: theme.sp(2) }}
                  >
                    <AcceptButton
                      theme={theme}
                      acceptCookies={this.acceptCookies}
                    />
                  </Box>
                </View>
                <Box
                  display={['flex', 'flex', 'none']}
                  style={{ marginTop: theme.sp(2) }}
                >
                  <AcceptButton
                    theme={theme}
                    acceptCookies={this.acceptCookies}
                  />
                </Box>
              </View>
            </Animated.View>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
  }
}

export default CookieContainer;
