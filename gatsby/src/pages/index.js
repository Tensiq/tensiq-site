import React from 'react';
import Link from '../components/RippleLink';
import { navigateTo } from 'gatsby-link';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Grid/Box';
import { ThemeContext } from '../components/ThemeProvider';
import Img from 'gatsby-image';
import { Header1, Header2 } from '../components/PageHeader';
import { TextNormal, TextStrong } from '../components/Text';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Card from 'react-native-material-ui/src/Card';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../utils/cleanHtmlAst';
import Icon from '../components/Icon';
import Teaser, {
  Title as TeaserTitle,
  Icon as TeaserIcon,
  Button as TeaserButton,
  Text as TeaserText,
} from '../components/Teaser';

const CrewIcon = () => <Icon name="users" element="aboutIcon" />;
const MindIcon = () => <Icon name="heartbeat" element="aboutIcon" />;
const ToolsIcon = () => <Icon name="toolbox" element="aboutIcon" />;
const GoIcon = () => <Icon name="arrow-circle-right" element="goIcon" />;

const renderFooter = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextNormal,
    icon: Icon,
  },
}).Compiler;

const renderTeaser = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: View,
    text: Text,
    'text-block': TeaserText,
    h1: TeaserTitle,
    icon: TeaserIcon,
    button: TeaserButton,
  },
}).Compiler;

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => {
              const footnotes = renderFooter(data.mdFootnotes.htmlAst);
              const teaser = renderTeaser(cleanHtmlAst(data.mdTeaser.htmlAst));
              console.log(data.services.edges);
              console.log(data.imgServices.edges);
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
                        <Teaser icon="rocket">{teaser}</Teaser>
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
                        >
                          <Icon name="rocket" element="teaserIcon" />
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
                                  <MindIcon />
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
                                  <GoIcon />
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
                                  <CrewIcon />
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
                                  <GoIcon />
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
                                  <ToolsIcon />
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
                                  <GoIcon />
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
                      <Text
                        style={{
                          textAlign: 'center',
                          paddingVertical: theme.sp(0),
                          color: theme.color('lightText'),
                        }}
                      >
                        {footnotes}
                      </Text>
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
  query IndexPageQuery {
    services: allMarkdownRemark(
      filter: { frontmatter: { snippet: { eq: "service" } } }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          htmlAst
        }
      }
    }
    imgServices: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "services" }
      }
    ) {
      edges {
        node {
          relativeDirectory
          childImageSharp {
            sizes(maxWidth: 960) {
              originalName
              ...GatsbyImageSharpSizes_withWebp_noBase64
            }
          }
        }
      }
    }
    mdTeaser: markdownRemark(frontmatter: { snippet: { eq: "teaser" } }) {
      frontmatter {
        icon
      }
      htmlAst
    }
    mdFootnotes: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
    }
    imgModernMobileWebApps: file(
      relativePath: { eq: "services/modern-mobile-web-apps.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgCrossPlatform2dGames: file(
      relativePath: { eq: "services/cross-platform-2d-games.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgDataAnalysis: file(
      relativePath: { eq: "services/data-analysis.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
  }
`;
