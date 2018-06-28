import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ThemeContext } from '../components/ThemeProvider';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Icon from '../components/Icon';
import Footer from '../components/Footer';
import Segment from '../components/Segment';
import Profile from '../components/Card/Profile';
import IconHeader from '../components/IconHeader';
import PlainCard from '../components/Card/Plain';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../utils/cleanHtmlAst';
import Image from '../components/Image';
import { TextNormal } from '../components/Text';
import { Header2, Header3, Header4 } from '../components/PageHeader';

const Paragraph = props => (
  <ThemeContext.Consumer>
    {theme => <View {...props} style={theme.style({ element: 'paragraph' })} />}
  </ThemeContext.Consumer>
);
const TextNormalLight = props => <TextNormal {...props} type="light" />;
const Header2Light = props => <Header2 {...props} light="true" />;
const Header3Light = props => <Header3 {...props} light="true" />;
const Header4Light = props => <Header4 {...props} light="true" />;
const ListEntry = props => {
  const { children } = props;
  return (
    <ThemeContext.Consumer>
      {theme => (
        <View {...props} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
            <Text style={{ fontSize: 10, color: theme.color('lightText') }}>
              <Icon name="tensiq" />
            </Text>
          </View>
          {children}
        </View>
      )}
    </ThemeContext.Consumer>
  );
};

const renderAbout = type =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      view: Paragraph,
      text: type === 'dark' ? TextNormalLight : TextNormal,
      icon: Icon,
      h1: type === 'dark' ? Header2Light : Header2,
      h2: type === 'dark' ? Header3Light : Header3,
      h3: type === 'dark' ? Header4Light : Header4,
      ul: View,
      li: ListEntry,
    },
  }).Compiler;

const renderHeader = () =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      view: Text,
      text: Text,
      icon: Icon,
    },
  }).Compiler;

const renderIconCards = (data, edges, theme, dark) => {
  return edges.map(edge => (
    <Profile
      key={edge.node.frontmatter.title.toLowerCase()}
      name={edge.node.frontmatter.title}
      githubName={edge.node.frontmatter.github}
      content={renderAbout(dark ? 'dark' : 'normal')(
        cleanHtmlAst(edge.node.htmlAst),
      )}
      profileImage={edge.node.frontmatter.image}
      shadowImage={data.imgTensiqIconShadow.childImageSharp.sizes}
      type={dark ? 'dark' : 'normal'}
    />
  ));
};

const renderPlainCards = (data, edges, theme, dark) => {
  return edges.map(edge => (
    <PlainCard
      key={edge.node.frontmatter.title.toLowerCase()}
      icon={edge.node.frontmatter.icon}
      title={edge.node.frontmatter.title}
      content={renderAbout(dark ? 'dark' : 'normal')(
        cleanHtmlAst(edge.node.htmlAst),
      )}
      type={dark ? 'dark' : 'normal'}
      style={{ marginBottom: theme.sp(5) }}
    />
  ));
};

const render = {
  mission: renderIconCards,
  crew: renderIconCards,
  tools: renderPlainCards,
};

const renderContent = (data, edge, theme, index) => {
  const contentType = edge.node.frontmatter.title.toLowerCase();
  if (!render[contentType]) {
    return null;
  }
  return render[contentType](
    data,
    data.aboutContent.edges.filter(
      contentEdge => contentEdge.node.frontmatter.type === contentType,
    ),
    theme,
    theme.segments.about[index].dark,
  );
};

const renderSegments = (props, theme) => {
  const { data } = props;
  return data.aboutDetails.edges.map((segmentEdge, index) => (
    <Segment
      key={`segment${index}`}
      anchor={segmentEdge.node.frontmatter.anchor}
      {...theme.segments.about[index]}
    >
      <IconHeader
        icon={segmentEdge.node.frontmatter.icon}
        title={segmentEdge.node.frontmatter.title}
        content={renderHeader(
          theme.segments.about[index].dark ? 'normal' : 'dark',
        )(cleanHtmlAst(segmentEdge.node.htmlAst))}
        type={theme.segments.about[index].dark ? 'dark' : 'normal'}
      />
      {renderContent(data, segmentEdge, theme, index)}
    </Segment>
  ));
};

class AboutPage extends React.Component {
  render() {
    const { data } = this.props;
    Image.images['profile'] = data.profileImages;
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => {
              return (
                <View>
                  {renderSegments(this.props, theme)}
                  <Footer htmlAst={data.footer.htmlAst} />
                </View>
              );
            }}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </View>
    );
  }
}

AboutPage.propTypes = {
  data: PropTypes.object,
};

export default AboutPage;

export const query = graphql`
  query AboutPageQuery {
    footer: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
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
    aboutDetails: allMarkdownRemark(
      filter: { id: {regex: "/snippets\/about\/details\/[a-zA-Z0-9-_]*\\.md/" } }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            icon
            anchor
          }
          htmlAst
        }
      }
    }
    aboutContent: allMarkdownRemark(
      filter: { id: {regex: "/snippets\/about\/content\/[a-zA-Z0-9-_]*\\.md/" } }
      sort: { fields: [frontmatter___order] }
    ) {
      edges {
        node {
          frontmatter {
            title
            image
            icon
            type
            github
          }
          htmlAst
        }
      }
    }
    profileImages: allFile(
      filter: {
        sourceInstanceName: { eq: "images" }
        relativeDirectory: { eq: "profiles" }
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
  }
`;
