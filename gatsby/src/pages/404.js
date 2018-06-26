import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Linking } from 'react-native';
import { ThemeContext } from '../components/ThemeProvider';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Footer from '../components/Footer';
import Segment from '../components/Segment';
import IconHeader from '../components/IconHeader';
import PlainCard from '../components/Card/Plain';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../utils/cleanHtmlAst';
import Icon from '../components/Icon';
import { TextNormal } from '../components/Text';
import Paragraph from '../components/Paragraph';
import Link from '../components/Link/Plain';

const renderContent = () =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      view: Paragraph,
      text: TextNormal,
      icon: Icon,
      a: Link,
    },
  }).Compiler;

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => (
              <View style={{ width: '100%', height: theme.height }}>
                <Segment {...theme.segments.contact[0]} style={{ flex: 1 }}>
                  <IconHeader
                    icon={data.notFound.frontmatter.icon}
                    title={data.notFound.frontmatter.title}
                    content={renderContent()(
                      cleanHtmlAst(data.notFound.htmlAst),
                    )}
                    boxType='center'
                  />
                </Segment>
                <Footer htmlAst={data.footer.htmlAst} />
              </View>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </View>
    );
  }
}

NotFoundPage.propTypes = {
  data: PropTypes.object,
};

export default NotFoundPage;

export const query = graphql`
  query NotFoundPageQuery {
    footer: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
    }
    notFound: markdownRemark(frontmatter: { snippet: { eq: "notfound" } }) {
      frontmatter {
        icon
        title
      }
      htmlAst
    }
  }
`;
