import React from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../components/ThemeProvider';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';

import { View } from 'react-native';
import Box from '../components/Grid/Box';
import { Header1 } from '../components/PageHeader';
import { TextNormal, TextStrong } from '../components/Text';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../utils/cleanHtmlAst';
import Icon from '../components/Icon';
import Teaser, {
  Title as TeaserTitle,
  Icon as TeaserIcon,
  Button as TeaserButton,
  Text as TeaserText,
} from '../components/Teaser';
import Footer from '../components/Footer';
import Segment from '../components/Segment';
import RowWrapper from '../components/RowWrapper';
import Block from '../components/Block';
import Image from '../components/Image';
import Card from '../components/Card';

const renderTeaser = new rehypeReact({
  createElement: React.createElement,
  components: {
    view: View,
    text: TeaserText,
    h1: TeaserTitle,
    icon: TeaserIcon,
    button: TeaserButton,
  },
}).Compiler;

const ServiceImage = props => <Image group="service" {...props} />;

const renderService = new rehypeReact({
  createElement: React.createElement,
  components: {
    img: ServiceImage,
    view: View,
    text: TextNormal,
    strong: TextStrong,
    icon: Icon,
  },
}).Compiler;

const renderAbout = new rehypeReact({
  createElement: React.createElement,
  components: {
    view: View,
    text: TextNormal,
  },
}).Compiler;

const renderBlocks = (dataEdges, render) => {
  return dataEdges.map((dataEdge, idx) => {
    return (
      <Block key={idx} title={dataEdge.node.frontmatter.title}>
        {render(cleanHtmlAst(dataEdge.node.htmlAst))}
      </Block>
    );
  });
};

const renderCards = (dataEdges, render) => {
  return dataEdges.map((dataEdge, idx) => {
    return (
      <Card
        key={idx}
        title={dataEdge.node.frontmatter.title}
        icon={dataEdge.node.frontmatter.icon}
        site={dataEdge.node.frontmatter.site}
        anchor={dataEdge.node.frontmatter.anchor}
      >
        {render(cleanHtmlAst(dataEdge.node.htmlAst))}
      </Card>
    );
  });
};

class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    Image.images['service'] = data.serviceImages;
    return (
      <View>
        <ThemeContext.Consumer>
          {theme => {
            return (
              <ThemeProvider uiTheme={{}}>
                <View>
                  <Segment {...theme.segments.index[0]}>
                    <Teaser icon="rocket">
                      {renderTeaser(cleanHtmlAst(data.teaser.htmlAst))}
                    </Teaser>
                  </Segment>
                  <Segment {...theme.segments.index[1]}>
                    <Header1 theme={theme}>Services</Header1>
                    <RowWrapper>
                      {renderBlocks(data.services.edges, renderService)}
                    </RowWrapper>
                  </Segment>
                  <Segment {...theme.segments.index[2]}>
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
                    <RowWrapper>
                      {renderCards(data.about.edges, renderAbout)}
                    </RowWrapper>
                  </Segment>
                  <Footer htmlAst={data.footer.htmlAst} />
                </View>
              </ThemeProvider>
            );
          }}
        </ThemeContext.Consumer>
      </View>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.object,
};

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
    serviceImages: allFile(
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
    about: allMarkdownRemark(
        filter: { id: {regex: "/snippets\/about\/[a-zA-Z0-9-_]*\\.md/" } }
        sort: { fields: [frontmatter___order] }
      ) {
        edges {
          node {
            frontmatter {
              title
              icon
              site
              anchor
            }
            htmlAst
          }
        }
    }
    teaser: markdownRemark(frontmatter: { snippet: { eq: "teaser" } }) {
      frontmatter {
        icon
      }
      htmlAst
    }
    footer: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
    }
  }
`;
