import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import { ThemeContext } from '../components/ThemeProvider';
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react';
import Footer from '../components/Footer';
import Segment from '../components/Segment';
import IconHeader from '../components/IconHeader';
import Profile from '../components/Card/Profile';
import Image from '../components/Image';

const titleText = <Text>Nice that you are interessted in us...</Text>;
const contactText = <Text>Tensiq OÜ</Text>;
class ContactPage extends React.Component {
  render() {
    const { data } = this.props;
    Image.images['profile'] = data.profileImages;
    return (
      <View>
        <ThemeProvider uiTheme={{}}>
          <ThemeContext.Consumer>
            {theme => (
              <View>
                <Segment {...theme.segments.contact[0]}>
                  <IconHeader icon="" title="Contact" content={titleText} />
                  <Profile
                    name="Tensiq"
                    content={contactText}
                    profileImage="tensiq-icon-with-shadow.png"
                    shadowImage={data.imgTensiqIconShadow.childImageSharp.sizes}
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
