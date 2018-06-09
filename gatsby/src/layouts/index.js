import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Animated, View, ScrollView, Text, StyleSheet } from 'react-native';
import iconFont from '../fonts/FontAwesome.ttf';
import tensiqFont from '../fonts/Tensiq.ttf';
import openSansNormal from '../fonts/OpenSans-Regular.ttf';
import openSansBold from '../fonts/OpenSans-Bold.ttf';
import favicon from '../images/favicon.png';
import Header from '../components/Header';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    maxWidth: 960,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 30,
    paddingTop: 0,
    alignSelf: 'center',
  },
  fill: {
    flex: 1,
    overflowX: 'visible',
    overflowY: 'visible',
  },
});

const scrollViewContent = () => (
  <View>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
    <Text>Test</Text>
  </View>
)

class TemplateWrapper extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  onScroll = e => {
    console.log(e);
  };
  render() {
    const { children } = this.props;
    console.log("Test")
    return (
      <View style={{ position: 'absolute', top:0, left:0, width: '100%', height: '100%' }}>
        <ScrollView
          style={styles.fill}
          contentContainerStyle={{flex:1}}
          scrollEventThrottle={1}
          children={scrollViewContent()}
        />
      </View>
      //        <Helmet
      //          title="Gatsby Default Starter"
      //          meta={[
      //            { name: 'description', content: 'Sample' },
      //            { name: 'keywords', content: 'sample, something' },
      //          ]}
      //        >
      //          <style type="text/css">
      //            {`
      //          @font-face {
      //             font-family: FontAwesome;
      //             src: url(${iconFont});
      //          }
      //          @font-face {
      //            font-family: Tensiq;
      //            src: url(${tensiqFont});
      //          }
      //          @font-face {
      //            font-family: OpenSans;
      //            src: url(${openSansNormal}); 
      //            font-weight: 400;
      //          }
      //          @font-face {
      //            font-family: OpenSans;
      //            src: url(${openSansBold}); 
      //            font-weight: 700;
      //          }
      //        `}
      //          </style>
      //          <link rel="shortcut icon" type="image/png" href={favicon} />
      //        </Helmet>
      //        <Header />
      //      </View>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
