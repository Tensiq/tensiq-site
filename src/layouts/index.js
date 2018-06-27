import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Animated, View, ScrollView, StyleSheet } from 'react-native';
import solidIconFont from '../fonts/icon/fa-solid-900.ttf';
import regularIconFont from '../fonts/icon/fa-regular-400.ttf';
import brandIconFont from '../fonts/icon/fa-brands-400.ttf';
import tensiqFont from '../fonts/icon/Tensiq.ttf';
import openSansNormal from '../fonts/text/OpenSans-Regular.ttf';
import openSansBold from '../fonts/text/OpenSans-Bold.ttf';
import favicon from '../images/favicon.png';
import MenuTop from '../components/Menu/Top';
import MenuBottom from '../components/Menu/Bottom';
import { headerHeightMax, headerHeightMin } from '../utils/theme';

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
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  render() {
    console.log(this.props)
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
    const { children, location } = this.props;
    return (
      <View>
        <View style={styles.scrollViewOuterContainer}>
          <ScrollView
            ref={ref => (this.scrollView = ref)}
            contentContainerStyle={styles.scrollViewContent}
            scrollEventThrottle={1}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.state.scrollY } } },
            ])}
          >
            {children()}
          </ScrollView>
        </View>
        <MenuTop height={headerHeight} opacity={opacity} location={location}/>
        <MenuBottom location={location}/>
        <Helmet
          title="Tensiq"
          meta={[
            { name: 'description', content: 'Tensiq' },
            { name: 'keywords', content: 'Tensiq' },
          ]}
        >
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
      </View>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
