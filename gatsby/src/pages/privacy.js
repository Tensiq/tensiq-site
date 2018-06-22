import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, Linking } from 'react-native';
import { ThemeContext } from '../components/ThemeProvider';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Icon from '../components/Icon';
import Footer from '../components/Footer';
import Segment from '../components/Segment';
import IconHeader from '../components/IconHeader';
import PlainCard from '../components/Card/Plain';
import rehypeReact from 'rehype-react';
import cleanHtmlAst from '../utils/cleanHtmlAst';
import { TextNormal } from '../components/Text';
import { Header2, Header3, Header4 } from '../components/PageHeader';
import LinearGradient from 'react-native-linear-gradient';

const renderHeader = () =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      view: Text,
      text: Text,
      icon: Icon,
    },
  }).Compiler;

const Paragraph = props => (
  <ThemeContext.Consumer>
    {theme => <View {...props} style={theme.style({ element: 'paragraph' })} />}
  </ThemeContext.Consumer>
);
const LongParagraph = props => <Paragraph {...props} type="long" />;
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
const LinkLight = props => (
  <Text
    {...props}
    onPress={() => Linking.openURL(props.href)}
    style={{ textDecorationLine: 'underline' }}
  />
);
const LinkNormal = props => (
  <Text
    {...props}
    onPress={() => Linking.openURL(props.href)}
    style={{ textDecorationLine: 'underline' }}
  />
);

const renderPolicy = type =>
  new rehypeReact({
    createElement: React.createElement,
    components: {
      view: LongParagraph,
      text: type === 'dark' ? TextNormalLight : TextNormal,
      a: type === 'dark' ? LinkLight : LinkNormal,
      icon: Icon,
      h1: type === 'dark' ? Header2Light : Header2,
      h2: type === 'dark' ? Header3Light : Header3,
      h3: type === 'dark' ? Header4Light : Header4,
      ul: View,
      li: ListEntry,
    },
  }).Compiler;

class PrivacyPage extends React.Component {
  render() {
    const { data } = this.props;
    console.log(data.privacyPolicy.htmlAst);
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => (
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
                    <View
                      style={theme.style({
                        directions: ['column', 'column'],
                        element: 'contentBlockInnerContainer',
                      })}
                    >
                      <IconHeader
                        icon={data.privacy.frontmatter.icon}
                        title={data.privacy.frontmatter.title}
                        content={renderHeader()(
                          cleanHtmlAst(data.privacy.htmlAst),
                        )}
                      />
                      <PlainCard
                        icon={data.privacyPolicy.frontmatter.icon}
                        title={data.privacyPolicy.frontmatter.title}
                        content={renderPolicy()(
                          cleanHtmlAst(data.privacyPolicy.htmlAst),
                        )}
                        style={{ marginTop: 30 }}
                      />
                    </View>
                  </View>
                </LinearGradient>
                <Footer htmlAst={data.footer.htmlAst} />
              </View>
            )}
          </ThemeContext.Consumer>
        </ThemeProvider>
      </View>
    );
  }
}

PrivacyPage.propTypes = {
  data: PropTypes.object,
};

export default PrivacyPage;

export const query = graphql`
  query PrivacyPageQuery {
    privacy: markdownRemark(frontmatter: { snippet: { eq: "privacy" } }) {
      frontmatter {
        icon
        title
      }
      htmlAst
    }
    privacyPolicy: markdownRemark(
      frontmatter: { snippet: { eq: "privacy-policy" } }
    ) {
      frontmatter {
        icon
        title
      }
      htmlAst
    }
    footer: markdownRemark(frontmatter: { snippet: { eq: "footnotes" } }) {
      htmlAst
    }
  }
`;
