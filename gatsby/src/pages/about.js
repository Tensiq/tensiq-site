import React from 'react';
import Link from '../components/RippleLink';
import { navigateTo } from 'gatsby-link';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Grid/Box';
import { ThemeContext } from '../components/ThemeProvider';
import Img from 'gatsby-image';
import { Header1, Header2 } from '../components/PageHeader';
import { TextNormal, TextStrong } from '../components/Text';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Card from 'react-native-material-ui/src/Card';
import { createIconSet } from 'react-native-vector-icons';

const glyphMap = {
  rocket: parseInt('f135', 16),
  users: parseInt('f0c0', 16),
  heartbeat: parseInt('f21e', 16),
  toolbox: parseInt('f552', 16),
  'arrow-circle-right': parseInt('f0a9', 16),
  heart: parseInt('f004', 16),
};

const brandGlyphMap = {
  react: parseInt('f41b', 16),
  github: parseInt('f09b', 16),
};

const customGlyphMap = {
  tensiq: 't',
  netlify: 'n',
  gatsby: 'g',
};

const Icon = createIconSet(glyphMap, 'FontAwesome');
const BrandIcon = createIconSet(brandGlyphMap, 'FontAwesomeBrands');
const CustomIcon = createIconSet(customGlyphMap, 'Tensiq');

const tensiqIcon = theme => (
  <CustomIcon name="tensiq" style={theme.style({ element: 'githubIcon' })} />
);

const netlifyIcon = theme => (
  <CustomIcon name="netlify" style={theme.style({ element: 'githubIcon' })} />
);

const gatsbyIcon = theme => (
  <CustomIcon name="gatsby" style={theme.style({ element: 'githubIcon' })} />
);

const crewIcon = (theme, type = 'normal') => (
  <Icon name="users" style={theme.style({ element: 'headerIcon', type })} />
);

const missionIcon = (theme, type = 'normal') => (
  <Icon name="heartbeat" style={theme.style({ element: 'headerIcon', type })} />
);

const toolsIcon = (theme, type = 'normal') => (
  <Icon name="toolbox" style={theme.style({ element: 'headerIcon', type })} />
);

const goIcon = theme => (
  <Icon name="arrow-circle-right" style={theme.style({ element: 'goIcon' })} />
);

const heartIcon = theme => (
  <Icon name="heart" style={theme.style({ element: 'githubIcon' })} />
);

const reactIcon = theme => (
  <BrandIcon name="react" style={theme.style({ element: 'githubIcon' })} />
);

const githubIcon = theme => (
  <BrandIcon name="github" style={theme.style({ element: 'githubIcon' })} />
);

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    // console.log(data);
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => {
              return (
                <View>
                  <LinearGradient
                    {...theme.gradient('darkBlock1')}
                    style={theme.style({
                      element: 'contentBlock',
                      type: 'first',
                    })}
                  >
                    <View
                      style={theme.style({
                        element: 'contentBlockOuterContainer',
                      })}
                    >
                      <Box
                        style={theme.style({
                          element: 'contentBlockInnerContainer',
                        })}
                      >
                        <Box
                          style={{
                            paddingTop: theme.sp(1),
                            marginRight: theme.sp(4),
                          }}
                          {...theme.props.headerIconLeft}
                        >
                          {missionIcon(theme)}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'teaserTitleText',
                            })}
                          >
                            Mission
                          </Text>
                          <Box
                            style={{
                              marginVertical: theme.sp(2),
                              alignItems: 'center',
                            }}
                            {...theme.props.headerIconCenter}
                          >
                            {missionIcon(theme)}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'teaserText',
                            })}
                          >
                            All things in life start with why. Feel what powers
                            our minds and thus fuels this company.
                          </Text>
                        </View>
                      </Box>
                    </View>
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('lightBlock')}
                    style={theme.style({
                      element: 'contentBlock',
                    })}
                  >
                    <View
                      style={theme.style({
                        element: 'contentBlockOuterContainer',
                      })}
                    >
                      <Box
                        style={theme.style({
                          element: 'contentBlockInnerContainer',
                        })}
                      >
                        <Box
                          style={{
                            paddingTop: theme.sp(1),
                            marginRight: theme.sp(4),
                          }}
                          {...theme.props.headerIconLeft}
                        >
                          {crewIcon(theme, 'dark')}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'teaserTitleText',
                              type: 'dark',
                            })}
                          >
                            Crew
                          </Text>
                          <Box
                            style={{
                              marginVertical: theme.sp(2),
                              alignItems: 'center',
                            }}
                            {...theme.props.headerIconCenter}
                          >
                            {crewIcon(theme, 'dark')}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'teaserText',
                              type: 'dark',
                            })}
                          >
                            Great people create great products. This is our crew
                            to fly this rocket-ship...
                          </Text>
                        </View>
                      </Box>
                    </View>
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('darkBlock2')}
                    style={theme.style({
                      element: 'contentBlock',
                    })}
                  >
                    <View
                      style={theme.style({
                        element: 'contentBlockOuterContainer',
                      })}
                    >
                      <Box
                        style={theme.style({
                          element: 'contentBlockInnerContainer',
                        })}
                      >
                        <Box
                          style={{
                            paddingTop: theme.sp(1),
                            marginRight: theme.sp(4),
                          }}
                          {...theme.props.headerIconLeft}
                        >
                          {toolsIcon(theme)}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'teaserTitleText',
                            })}
                          >
                            Tools
                          </Text>
                          <Box
                            style={{
                              marginVertical: theme.sp(2),
                              alignItems: 'center',
                            }}
                            {...theme.props.headerIconCenter}
                          >
                            {toolsIcon(theme)}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'teaserText',
                            })}
                          >
                            Awesome products need great tools. We show you which
                            great products we love and use...
                          </Text>
                        </View>
                      </Box>
                    </View>
                  </LinearGradient>
                  <View
                    style={[
                      {
                        paddingTop: theme.sp(3),
                        paddingBottom: theme.sp(7),
                        backgroundColor: theme.color('footnotes'),
                        alignItems: 'center',
                      },
                    ]}
                  >
                    <View
                      style={[
                        {
                          flexDirection: 'column',
                          alignItems: 'center',
                          paddingHorizontal: theme.sp(2),
                          paddingBottom: theme.sp(1),
                        },
                      ]}
                    >
                      <TextNormal
                        theme={theme}
                        style={{
                          textAlign: 'center',
                          paddingVertical: theme.sp(0),
                          color: theme.color('lightText'),
                        }}
                      >
                        Copyright © 2018 {tensiqIcon(theme)} Tensiq OÜ.
                      </TextNormal>
                      <TextNormal
                        theme={theme}
                        style={{
                          textAlign: 'center',
                          paddingVertical: theme.sp(0),
                          color: theme.color('lightText'),
                        }}
                      >
                        All rights reserved.
                      </TextNormal>
                      <TextNormal
                        theme={theme}
                        style={{
                          textAlign: 'center',
                          paddingVertical: theme.sp(0),
                          color: theme.color('lightText'),
                        }}
                      >
                        Built with {heartIcon(theme)} in Tallinn, Estonia.
                      </TextNormal>
                      <TextNormal
                        theme={theme}
                        style={{
                          textAlign: 'center',
                          paddingVertical: theme.sp(0),
                          color: theme.color('lightText'),
                        }}
                      >
                        Crafted with {gatsbyIcon(theme)} Gatsby.js and{' '}
                        {reactIcon(theme)} React Native Web.
                      </TextNormal>
                      <TextNormal
                        theme={theme}
                        style={{
                          textAlign: 'center',
                          paddingVertical: theme.sp(0),
                          color: theme.color('lightText'),
                        }}
                      >
                        Organized on {githubIcon(theme)} Github and deployed on{' '}
                        {netlifyIcon(theme)} Netlify.
                      </TextNormal>
                    </View>
                  </View>
                </View>
              );
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </View>
    );
  }
}

export default AboutPage;

export const query = graphql`
  query AboutImageQuery {
    imgModernMobileWebApps: file(
      relativePath: { eq: "images/modern-mobile-web-apps.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgCrossPlatform2dGames: file(
      relativePath: { eq: "images/cross-platform-2d-games.png" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgDataAnalysis: file(relativePath: { eq: "images/data-analysis.png" }) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
  }
`;
