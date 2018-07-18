import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';
import solidIconFont from '../fonts/stripped/icon/fa-solid-900.ttf';
import regularIconFont from '../fonts/stripped/icon/fa-regular-400.ttf';
import brandIconFont from '../fonts/stripped/icon/fa-brands-400.ttf';
import tensiqFont from '../fonts/stripped/icon/Tensiq.ttf';
import openSansNormal from '../fonts/stripped/text/OpenSans-Regular.ttf';
import openSansBold from '../fonts/stripped/text/OpenSans-Bold.ttf';
import socialImage from '../images/site.png';
import favicon from '../images/favicon.png';
import MenuTop from '../components/Menu/Top';
import MenuBottom from '../components/Menu/Bottom';
import { headerHeightMax, headerHeightMin } from '../utils/theme';
import ScrollProvider from '../components/ScrollProvider';
import CookiesProvider from '../components/CookieProvider';

const headerScrollDistance = headerHeightMax - headerHeightMin;

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    alignSelf: 'center',
  },
  scrollViewOuterContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
  },
});

class TemplateWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    const scrollY = new Animated.Value(0);
    this.state = {
      scrollY,
    };
    this.scrollView = React.createRef();
  }
  scrollHandler = ({
    nativeEvent: {
      contentOffset: { y: scrollY },
    },
  }) => {
    this.menuBottom.scrollHandler(scrollY);
  };
  render() {
    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance],
      outputRange: [0.0, 1.0],
      extrapolate: 'clamp',
    });
    const headerHeight = this.state.scrollY.interpolate({
      inputRange: [0, headerScrollDistance],
      outputRange: [headerHeightMax, headerHeightMin],
      extrapolate: 'clamp',
    });
    const { children, location, data } = this.props;
    return (
      <View style={{ height: '100%' }}>
        <CookiesProvider>
          <View style={styles.scrollViewOuterContainer}>
            <ScrollProvider
              scrollView={this.scrollView}
              location={location.pathname}
              hash={location.hash}
            >
              <ScrollView
                ref={this.scrollView}
                contentContainerStyle={styles.scrollViewContent}
                scrollEventThrottle={10}
                onScroll={Animated.event(
                  [
                    {
                      nativeEvent: { contentOffset: { y: this.state.scrollY } },
                    },
                  ],
                  { listener: event => this.scrollHandler(event) },
                )}
              >
                {children()}
              </ScrollView>
            </ScrollProvider>
          </View>
          <MenuTop
            height={headerHeight}
            opacity={opacity}
            location={location}
          />
          <MenuBottom
            ref={ref => (this.menuBottom = ref)}
            scrollY={this.state.scrollY}
            cookieData={data.cookieBanner}
            location={location}
          />
          <Helmet
            title="Tensiq"
            meta={[
              {
                name: 'description',
                content: data.site.siteMetadata.description,
              },
              { name: 'keywords', content: data.site.siteMetadata.keywords },
            ]}
          >
            <meta property="og:title" content="Tensiq technology spaceport" />
            <meta
              property="og:description"
              content={data.site.siteMetadata.description}
            />
            <meta property="og:image" content={socialImage} />
            <meta property="og:url" content={data.site.siteMetadata.url} />
            <style type="text/css">
              {`
                  @font-face {
                    font-family: FontAwesomeSolid;
                    src: url(${solidIconFont});
                  }
                  @font-face {
                    font-family: FontAwesomeRegular;
                    src: url(${regularIconFont});
                  }
                  @font-face {
                    font-family: FontAwesomeBrands;
                    src: url(${brandIconFont});
                  }
                  @font-face {
                    font-family: Tensiq;
                    src: url(${tensiqFont});
                  }
                  @font-face {
                    font-family: OpenSans;
                    src: url(${openSansNormal}); 
                    font-weight: 400;
                  }
                  @font-face {
                    font-family: OpenSans;
                    src: url(${openSansBold}); 
                    font-weight: 700;
                  }
                `}
            </style>
            <link rel="shortcut icon" type="image/png" href={favicon} />
          </Helmet>
        </CookiesProvider>
      </View>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        content
        url
      }
    }
    cookieBanner: markdownRemark(
      frontmatter: { snippet: { eq: "cookieBanner" } }
    ) {
      frontmatter {
        icon
      }
      htmlAst
    }
  }
`;
