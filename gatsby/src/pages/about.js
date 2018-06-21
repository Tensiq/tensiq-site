import React from 'react';
import { Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Grid/Box';
import { ThemeContext } from '../components/ThemeProvider';
import Img from 'gatsby-image';
import { Header1, Header2 } from '../components/PageHeader';
import { TextNormal } from '../components/Text';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Card from 'react-native-material-ui/src/Card';
import rehypeReact from 'rehype-react';
import Icon from '../components/Icon';
import Footer from '../components/Footer';

const tensiqCardIcon = () => <Icon name="tensiq" element="cardWrapIcon" />;
const CrewIcon = props => <Icon name="users" element="headerIcon" {...props} />;
const MindIcon = props => (
  <Icon name="heartbeat" element="headerIcon" {...props} />
);
const ToolsIcon = props => (
  <Icon name="toolbox" element="headerIcon" {...props} />
);

const ReactIcon = props => <Icon name="react" {...props} />;
const GithubIcon = props => <Icon name="github" {...props} />;
const TwitterIcon = props => <Icon name="twitter" {...props} />;
const NetlifyIcon = props => <Icon name="netlify" {...props} />;
const GatsbyIcon = props => <Icon name="gatsby" {...props} />;
const GlobeIcon = props => (
  <Icon name="globe" element="cardTitleIcon" {...props} />
);
const ServerIcon = props => (
  <Icon name="server" element="cardTitleIcon" {...props} />
);
const CloudIcon = props => (
  <Icon name="cloud" element="cardTitleIcon" {...props} />
);
const CodeIcon = props => (
  <Icon name="code" element="cardTitleIcon" {...props} />
);
const NodeIcon = props => <Icon name="node-js" {...props} />;
const GameIcon = props => (
  <Icon name="game" element="cardTitleIcon" {...props} />
);
const TerminalIcon = props => (
  <Icon name="terminal" element="cardTitleIcon" {...props} />
);
const EyeIcon = props => <Icon name="eye" element="cardTitleIcon" {...props} />;

const renderHtmlAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    p: TextNormal,
    icon: Icon,
  },
}).Compiler;

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => {
              return (
                <View>
                  <Text id="mission" />
                  <LinearGradient
                    {...theme.gradient('darkBlock1')}
                    style={theme.style({
                      element: 'contentBlockCol',
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
                          style={theme.style({ element: 'headerIconLeft' })}
                          {...theme.props.headerIcon.left}
                        >
                          <MindIcon />
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'headerTitleText',
                            })}
                          >
                            Mission
                          </Text>
                          <Box
                            style={theme.style({ element: 'headerIconCenter' })}
                            {...theme.props.headerIcon.normal}
                          >
                            <MindIcon />
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'headerText',
                            })}
                          >
                            All things in life start with why. Feel what powers
                            our minds and thus fuels this company.
                          </Text>
                        </View>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.withIcon,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withIcon',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Header1 theme={theme}>Tensiq</Header1>
                              <View
                                style={theme.style({ element: 'socialBlock' })}
                              >
                                <Text
                                  style={theme.style({
                                    element: 'socialBlockEntry',
                                    type: 'dark',
                                  })}
                                >
                                  <TwitterIcon />
                                  <TextNormal
                                    theme={theme}
                                    element="socialBlockEntryText"
                                  >
                                    tensiq
                                  </TextNormal>
                                </Text>
                              </View>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                Tensiq is an estonian based web and mobile app
                                development company specialized in building
                                custom solutions for innovative projects. We
                                focus on technology that let us build fast,
                                secure, reliable and maintainable products while
                                targeting most of the commonly used devices.
                                Backed by 12 years of experience in the IT
                                industry, we really know what we are doing and
                                how to reach the target. We are really good at
                                what we do and love to build the next big thing.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                      <View
                        style={theme.style({ element: 'cardIconContainer' })}
                      >
                        <View
                          style={{
                            position: 'absolute',
                            top: 36,
                            height: '99%',
                            width: '99%',
                          }}
                        >
                          <Img
                            sizes={
                              data.imgTensiqIconShadow.childImageSharp.sizes
                            }
                          />
                        </View>
                        {tensiqCardIcon(theme)}
                        <View
                          style={{
                            position: 'absolute',
                            top: 35,
                            left: -2,
                            width: '100%',
                          }}
                        >
                          <Img
                            sizes={data.imgTensiqIcon.childImageSharp.sizes}
                          />
                        </View>
                      </View>
                    </View>
                    <Text id="crew" />
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('lightBlock')}
                    style={theme.style({
                      element: 'contentBlockCol',
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
                          style={theme.style({ element: 'headerIconLeft' })}
                          {...theme.props.headerIcon.left}
                        >
                          <CrewIcon type="dark" />
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'headerTitleText',
                              type: 'dark',
                            })}
                          >
                            Crew
                          </Text>
                          <Box
                            style={theme.style({ element: 'headerIconCenter' })}
                            {...theme.props.headerIcon.normal}
                          >
                            <CrewIcon type="dark" />
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'headerText',
                              type: 'dark',
                            })}
                          >
                            Great people create great products. This is our crew
                            to fly this rocket-ship...
                          </Text>
                        </View>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.withIcon,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withIcon',
                            })}
                            {...theme.gradient('blackBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Header1 light="true" theme={theme}>
                                Jens
                              </Header1>
                              <View
                                style={theme.style({ element: 'socialBlock' })}
                              >
                                <Text
                                  style={theme.style({
                                    element: 'socialBlockEntry',
                                  })}
                                >
                                  <TwitterIcon />
                                  <TextNormal
                                    theme={theme}
                                    element="socialBlockEntryText"
                                  >
                                    arrkiin
                                  </TextNormal>
                                </Text>
                                <Text
                                  style={theme.style({
                                    element: 'socialBlockEntry',
                                  })}
                                >
                                  <GithubIcon />
                                  <TextNormal
                                    theme={theme}
                                    element="socialBlockEntryText"
                                  >
                                    arrkiin
                                  </TextNormal>
                                </Text>
                              </View>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withIcon',
                              })}
                              pointerEvents="none"
                            >
                              <Text style={{ color: theme.color('lightText') }}>
                                <TextNormal theme={theme}>
                                  I am an academically educated and awarded IT
                                  specialist working in diverse IT projects for
                                  almost two decades now. I believe in great
                                  people forming even better teams by fluent
                                  collaboration and the force of constant
                                  improvement. As an highly motivated engineer I
                                  provide a great ability to integrate into
                                  existing teams while keeping the courage to
                                  offer leadership. I love working with
                                  teammates and invest all of my creativity,
                                  experience and skills to deliver smart and
                                  elegant solutions.
                                </TextNormal>
                              </Text>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                      <View
                        style={theme.style({ element: 'cardIconContainer' })}
                      >
                        <View
                          style={{
                            position: 'absolute',
                            top: 34,
                            width: '100%',
                          }}
                        >
                          <Img
                            sizes={
                              data.imgTensiqIconShadow.childImageSharp.sizes
                            }
                          />
                        </View>
                        {tensiqCardIcon(theme)}
                        <View
                          style={{
                            position: 'absolute',
                            top: 34,
                            width: '100%',
                          }}
                        >
                          <Img sizes={data.imgJensIcon.childImageSharp.sizes} />
                        </View>
                      </View>
                    </View>
                    <Text id="tools" />
                  </LinearGradient>
                  <LinearGradient
                    {...theme.gradient('darkBlock2')}
                    style={theme.style({
                      element: 'contentBlockCol',
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
                          style={theme.style({ element: 'headerIconLeft' })}
                          {...theme.props.headerIcon.Left}
                        >
                          <ToolsIcon />
                        </Box>
                        <View style={{ flex: 1 }}>
                          <Text
                            style={theme.style({
                              element: 'headerTitleText',
                            })}
                            id="tools"
                          >
                            Tools
                          </Text>
                          <Box
                            style={theme.style({ element: 'headerIconCenter' })}
                            {...theme.props.headerIcon.normal}
                          >
                            <ToolsIcon />
                          </Box>
                          <Text
                            style={theme.style({
                              element: 'headerText',
                            })}
                          >
                            Awesome products need great tools. We show you which
                            great products we love and use...
                          </Text>
                        </View>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <ReactIcon element="cardTitleIcon" />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Cross-Platform Apps
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                We fell in love with the <ReactIcon /> React
                                ecosystem and use all the proven libraries like
                                redux and mobx. To reach the goal of
                                cross-platform we focus on using React Native
                                and React Native Web and wisely select 3rd party
                                libraries that support this approach.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <GlobeIcon />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Progressive Web Apps
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                For building fast and secure web projects we
                                found <GatsbyIcon /> Gatsby.js as a good fit.
                                Because it uses React.js and Webpack and offers
                                custom plugins we are able to support the goal
                                of cross-platform components with React Native
                                Web.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <CloudIcon
                                style={{
                                  fontSize: theme.fs(7),
                                  marginRight: theme.sp(2),
                                }}
                              />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Serverless
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                To reach an high level of performance and
                                security we prefer an serverless approach. Thus
                                we use different cloud solutions like{' '}
                                <GithubIcon /> Github Pages, <NetlifyIcon />{' '}
                                Netlify, etc. to provide an fast and easy to
                                maintain product.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <ServerIcon
                                style={{
                                  fontSize: theme.fs(7),
                                  marginRight: theme.sp(2),
                                }}
                              />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Backend
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                While we focus on a serverless setup for all our
                                projects, we also use cloud services like
                                Firebase or a combination of <NodeIcon />{' '}
                                Node.JS, NGINX, OpenResty, Redis deployed on
                                Debian or Ubuntu Linux systems to support
                                backend logic.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <CodeIcon
                                style={{
                                  fontSize: theme.fs(7),
                                  marginRight: theme.sp(2),
                                }}
                              />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Programming Languages
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                Our preferred programming languages to support
                                our projects are Javascript, Java, Python, Lua
                                (OpenResty), GDScript (Godot Engine),
                                ABAP/ABAP-OO (SAP).
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <GameIcon
                                style={{
                                  fontSize: theme.fs(7),
                                  marginRight: theme.sp(2),
                                }}
                              />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Cross-Platform Games
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                After using different kind of game development
                                tools and environments we fell in love with the
                                awesome Godot Engine. It is a compact open
                                source C++ game engine with a custom Python
                                flavored script language called GDScript. Via
                                different export templates it targets most of
                                the needed platforms. Thru the open source
                                nature it is fully extensible and the MIT
                                licence supports a completely free commercial
                                usage.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TerminalIcon
                                style={{
                                  fontSize: theme.fs(7),
                                  marginRight: theme.sp(2),
                                }}
                              />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Environments
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                We live on Windows, Mac OSX and Linux operating
                                systems and do our coding in Visual Studio Code,
                                Sublime Text and neovim thru tmux on Linux
                                systems. We chose the environment that fits best
                                and share our source code via git on Github or
                                Gitea as local replacement.
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
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
                        <Card
                          style={{
                            container: theme.rawStyles.cardContainer.normal,
                          }}
                        >
                          <LinearGradient
                            style={theme.style({
                              element: 'cardGradient',
                              type: 'withLongText',
                            })}
                            {...theme.gradient('lightBlock')}
                            pointerEvents="none"
                          >
                            <View
                              style={theme.style({
                                element: 'cardTitle',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <EyeIcon
                                style={{
                                  fontSize: theme.fs(7),
                                  marginRight: theme.sp(2),
                                }}
                              />
                              <Header2 theme={theme} style={{ marginTop: 0 }}>
                                Graphics
                              </Header2>
                            </View>
                            <View
                              style={theme.style({
                                element: 'cardTextBody',
                                type: 'withLongText',
                              })}
                              pointerEvents="none"
                            >
                              <TextNormal theme={theme}>
                                To create our digital art work and prototypes we
                                rely on Inkscape and Gimp. If we do 3d modelling
                                and rendering or cut-out-animations we use and
                                Blender, which also became very good at video
                                editing, thanks to the video sequencer addons
                                provided by...
                              </TextNormal>
                            </View>
                          </LinearGradient>
                        </Card>
                      </Box>
                    </View>
                  </LinearGradient>
                  <Footer htmlAst={data.mdFootnotes.htmlAst} />
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
  query AboutPageQuery {
    mdFootnotes: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
    }
    imgTensiqIconShadow: file(
      relativePath: { eq: "profiles/tensiq-icon-shadow.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgTensiqIcon: file(
      relativePath: { eq: "profiles/tensiq-icon-with-shadow.png" }
      sourceInstanceName: { eq: "images" }
    ) {
      childImageSharp {
        sizes(maxWidth: 960) {
          ...GatsbyImageSharpSizes_withWebp_noBase64
        }
      }
    }
    imgJensIcon: file(
      relativePath: { eq: "profiles/jens-icon-with-shadow.png" }
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
