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

class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => (
              <View>
                <Segment {...theme.segments.contact[0]}>
                  <IconHeader
                    icon={data.contact.frontmatter.icon}
                    title={data.contact.frontmatter.title}
                    content={renderContent()(
                      cleanHtmlAst(data.contact.htmlAst),
                    )}
                  />
                  <PlainCard
                    icon={data.contactInfo.frontmatter.icon}
                    title={data.contactInfo.frontmatter.title}
                    content={renderContent()(
                      cleanHtmlAst(data.contactInfo.htmlAst),
                    )}
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

ContactPage.propTypes = {
  data: PropTypes.object,
};

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    footer: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
    }
    contact: markdownRemark(frontmatter: { snippet: { eq: "contact" } }) {
      frontmatter {
        icon
        title
      }
      htmlAst
    }
    contactInfo: markdownRemark(
      frontmatter: { snippet: { eq: "contact-info" } }
    ) {
      frontmatter {
        icon
        title
      }
      htmlAst
    }
  }
`;
