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

const rocketIcon = theme => (
  <Icon name="rocket" style={theme.style({ element: 'teaserIcon' })} />
);

const crewIcon = theme => (
  <Icon name="users" style={theme.style({ element: 'aboutIcon' })} />
);

const mindIcon = theme => (
  <Icon name="heartbeat" style={theme.style({ element: 'aboutIcon' })} />
);

const toolsIcon = theme => (
  <Icon name="toolbox" style={theme.style({ element: 'aboutIcon' })} />
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

class IndexPage extends React.Component {
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
                          {...theme.props.rocketIconLeft}
                        >
                          {rocketIcon(theme)}
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'teaserTitleText',
                            })}
                          >
                            Let's build awesome things together...
                          </Text>
                          <Box
                            style={{
                              marginVertical: theme.sp(2),
                              alignItems: 'center',
                            }}
                            {...theme.props.rocketIconCenter}
                          >
                            {rocketIcon(theme)}
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'teaserText',
                            })}
                          >
                            We master the bridge between cutting-edge technology
                            and secure, resilient, performant solutions.
                          </Text>
                          <View
                            style={theme.style({
                              element: 'teaserButtonContainer',
                            })}
                          >
                            <Link
                              to="/"
                              style={{ flex: 1 }}
                              contentStyle={theme.style({
                                element: 'teaserButtonContent',
                              })}
                              rippleColor={theme.color('rippleTeaserButton')}
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
                                  Get In Touch
                                </Text>
                              </LinearGradient>
                            </Link>
                          </View>
                        </View>
                      </Box>
                    </View>
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('lightBlock')}
                    style={[theme.style({ element: 'contentBlock' })]}
                  >
                    <View
                      style={theme.style({
                        element: 'contentBlockOuterContainer',
                      })}
                    >
                      <View
                        style={[
                          theme.style({
                            element: 'contentBlockInnerContainer',
                          }),
                          { flexDirection: 'column' },
                        ]}
                      >
                        <Header1 theme={theme}>Services</Header1>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            style={theme.style({ element: 'contentColumn3' })}
                            {...theme.props.contentColumn3}
                          >
                            <View
                              style={theme.style({
                                element: 'contentColumnTitle',
                              })}
                            >
                              <Header2 theme={theme}>
                                Modern Mobile & Web Apps
                              </Header2>
                            </View>
                            <Img
                              sizes={
                                data.imgModernMobileWebApps.childImageSharp
                                  .sizes
                              }
                            />
                            <TextNormal theme={theme}>
                              Responsive mobile-first native and Progressive Web
                              Apps with high quality UI components and cloud
                              service integration like{' '}
                              <TextStrong theme={theme}>Firebase</TextStrong>{' '}
                              powered by{' '}
                              <TextStrong theme={theme}>
                                React Native
                              </TextStrong>,{' '}
                              <TextStrong theme={theme}>
                                React Native Web
                              </TextStrong>,{' '}
                              <TextStrong theme={theme}>Gatsby.js </TextStrong>
                              and <TextStrong theme={theme}>
                                Node.js
                              </TextStrong>.
                            </TextNormal>
                          </Box>
                          <Box
                            style={theme.style({ element: 'contentColumn3' })}
                            {...theme.props.contentColumn3}
                          >
                            <View
                              style={theme.style({
                                element: 'contentColumnTitle',
                              })}
                            >
                              <Header2 theme={theme}>
                                Cross-Platform 2D Games
                              </Header2>
                            </View>
                            <Img
                              sizes={
                                data.imgCrossPlatform2dGames.childImageSharp
                                  .sizes
                              }
                            />
                            <Text style={theme.style({ element: 'text' })}>
                              Beautiful, cross-platform games designed in{' '}
                              <TextStrong theme={theme}>Inkscape</TextStrong>{' '}
                              and <TextStrong theme={theme}>Gimp</TextStrong>{' '}
                              and build with the highly extensible{' '}
                              <TextStrong theme={theme}>
                                Godot Engine
                              </TextStrong>{' '}
                              backed by an commercial friendly MIT licence.
                            </Text>
                          </Box>
                          <Box
                            style={[theme.style({ element: 'contentColumn3' })]}
                            {...theme.props.contentColumn3}
                          >
                            <View
                              style={theme.style({
                                element: 'contentColumnTitle',
                              })}
                            >
                              <Header2 theme={theme}>Data Analysis</Header2>
                            </View>
                            <Img
                              sizes={data.imgDataAnalysis.childImageSharp.sizes}
                            />
                            <Text style={theme.style({ element: 'text' })}>
                              Interactive analysis of data from cloud APIs,
                              Databases and common filetypes with{' '}
                              <TextStrong theme={theme}>Python</TextStrong>,{' '}
                              <TextStrong theme={theme}>Pandas</TextStrong>,{' '}
                              <TextStrong theme={theme}>NumPy</TextStrong> and{' '}
                              <TextStrong theme={theme}>SciPy</TextStrong> in{' '}
                              <TextStrong theme={theme}>
                                Jupyter notebooks
                              </TextStrong>{' '}
                              resulting in visual presentations and interaction
                              with ipywidget and Matplotlib.
                            </Text>
                          </Box>
                        </View>
                      </View>
                    </View>
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('darkBlock2')}
                    style={[theme.style({ element: 'contentBlock' })]}
                  >
                    <View
                      style={theme.style({
                        element: 'contentBlockOuterContainer',
                      })}
                    >
                      <View
                        style={[
                          theme.style({
                            element: 'contentBlockInnerContainer',
                          }),
                          {
                            flexDirection: 'column',
                            paddingHorizontal: theme.sp(4),
                          },
                        ]}
                      >
                        <Header1 light="true" centered="true" theme={theme}>
                          Who is flying this rocket?
                        </Header1>
                        <Box
                          style={{
                            paddingTop: theme.sp(5),
                            paddingBottom: theme.sp(8),
                            alignItems: 'center',
                          }}
                          // {...theme.props.rocketIconCenter}
                        >
                          {rocketIcon(theme)}
                        </Box>
                        <View
                          style={{
                            flex: 1,
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                          }}
                        >
                          <Box
                            style={theme.style({ element: 'contentCard3' })}
                            {...theme.props.contentColumn3}
                          >
                            <Card
                              onPress={() =>
                                setTimeout(
                                  () => navigateTo('/about#mission'),
                                  400,
                                )
                              }
                              style={{
                                container: {
                                  flex: 1,
                                  marginBottom: theme.sp(3),
                                },
                              }}
                            >
                              <LinearGradient
                                style={{ flex: 1 }}
                                {...theme.gradient('lightBlock')}
                              >
                                <View
                                  style={{
                                    marginTop: theme.sp(4),
                                    width: '100%',
                                    alignItems: 'center',
                                  }}
                                >
                                  {mindIcon(theme)}
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardTitle',
                                  })}
                                >
                                  <Header2 centered="true" theme={theme}>
                                    Mission
                                  </Header2>
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardTextBody',
                                  })}
                                >
                                  <TextNormal theme={theme}>
                                    All things in life start with why. Feel what
                                    powers our minds.
                                  </TextNormal>
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardGoIcon',
                                  })}
                                >
                                  {goIcon(theme)}
                                </View>
                              </LinearGradient>
                            </Card>
                          </Box>
                          <Box
                            style={theme.style({ element: 'contentCard3' })}
                            {...theme.props.contentColumn3}
                          >
                            <Card
                              onPress={() =>
                                setTimeout(() => navigateTo('/about#crew'), 400)
                              }
                              style={{
                                container: {
                                  flex: 1,
                                  marginBottom: theme.sp(3),
                                },
                              }}
                            >
                              <LinearGradient
                                style={{ flex: 1 }}
                                {...theme.gradient('lightBlock')}
                                pointerEvents="none"
                              >
                                <View
                                  style={{
                                    marginTop: theme.sp(4),
                                    width: '100%',
                                    alignItems: 'center',
                                  }}
                                  pointerEvents="none"
                                >
                                  {crewIcon(theme)}
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardTitle',
                                  })}
                                  pointerEvents="none"
                                >
                                  <Header2 centered="true" theme={theme}>
                                    Crew
                                  </Header2>
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardTextBody',
                                  })}
                                  pointerEvents="none"
                                >
                                  <TextNormal theme={theme}>
                                    Greate people create great products. Let us
                                    show you who we are.
                                  </TextNormal>
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardGoIcon',
                                  })}
                                  pointerEvents="none"
                                >
                                  {goIcon(theme)}
                                </View>
                              </LinearGradient>
                            </Card>
                          </Box>

                          <Box
                            style={theme.style({ element: 'contentCard3' })}
                            {...theme.props.contentColumn3}
                          >
                            <Card
                              onPress={() =>
                                setTimeout(
                                  () => navigateTo('/about#tools'),
                                  400,
                                )
                              }
                              style={{
                                container: {
                                  flex: 1,
                                  marginBottom: theme.sp(3),
                                },
                              }}
                            >
                              <LinearGradient
                                style={{ flex: 1 }}
                                {...theme.gradient('lightBlock')}
                              >
                                <View
                                  style={{
                                    marginTop: theme.sp(4),
                                    width: '100%',
                                    alignItems: 'center',
                                  }}
                                >
                                  {toolsIcon(theme)}
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardTitle',
                                  })}
                                >
                                  <Header2 centered="true" theme={theme}>
                                    Tools
                                  </Header2>
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardTextBody',
                                  })}
                                >
                                  <TextNormal theme={theme}>
                                    Awesome products need great tools. We show
                                    you what we use.
                                  </TextNormal>
                                </View>
                                <View
                                  style={theme.style({
                                    element: 'cardGoIcon',
                                  })}
                                >
                                  {goIcon(theme)}
                                </View>
                              </LinearGradient>
                            </Card>
                          </Box>
                        </View>
                      </View>
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

export default IndexPage;

export const query = graphql`
  query IndexImageQuery {
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
