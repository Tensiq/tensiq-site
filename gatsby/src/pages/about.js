import React from 'react';
import Link from 'gatsby-link';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Row from '../components/Grid/Row';
import Column from '../components/Grid/Column';

import Icon from 'react-native-vector-icons/FontAwesome';

const HEADER_MAX_HEIGHT = 120;

const styles = StyleSheet.create({
  block: {
    width: '100%',
    paddingVertical: 75,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  blockContent: {
    width: '100%',
    maxWidth: 960,
    flexDirection: 'row',
  },
  text: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f5f5f5ff',
    paddingVertical: 4,
  },
  text2: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#303030ff',
    paddingVertical: 4,
  },
  text3: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#102144ff',
  },
  text4: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#f5f5f5ff',
  },
  linearGradient: {
    margin: 10,
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 2,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
});

const myIcon = <Icon name="rocket" size={30} color="#900" />;

const shadow = Platform.select({
  default: {
    shadowColor: '#00000088',
    shadowRadius: 30,
  },
  android: {
    elevation: 6,
  },
});

class IndexPage extends React.Component {
  render() {
    return (
      <View>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 1.0, y: 0.9 }}
          colors={['#632e96ff', '#125aa5ff', '#48c4d9ff']}
          style={[styles.block, { paddingTop: 75 + HEADER_MAX_HEIGHT }]}
        >
          <View style={styles.blockContent}>
            <Row size={12}>
              <Column
                width={[12, 12, 12, 6, 6]}
                pb={[6, 6, 6, 0, 0]}
                display={['none', , 'flex']}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: 20,
                    paddingRight: 10,
                  }}
                >
                  <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 1.0, y: 0.9 }}
                    colors={['#e8dae9ff', '#b0d6f9ff']}
                    style={{
                      ...shadow,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 100,
                      height: 50,
                      backgroundColor: '#f5f5f5ff',
                    }}
                  >
                    <Text style={styles.text3}>Git</Text>
                  </LinearGradient>
                  <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 1.0, y: 0.9 }}
                    colors={['#e8dae9ff', '#b0d6f9ff']}
                    style={{
                      ...shadow,
                      marginTop: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 100,
                      height: 50,
                      backgroundColor: '#f5f5f5ff',
                    }}
                  >
                    <Text style={styles.text3}>Project</Text>
                  </LinearGradient>
                  <LinearGradient
                    start={{ x: 0.0, y: 0.25 }}
                    end={{ x: 1.0, y: 0.9 }}
                    colors={['#e8dae9ff', '#b0d6f9ff']}
                    style={{
                      ...shadow,
                      marginTop: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 100,
                      height: 50,
                      backgroundColor: '#f5f5f5ff',
                    }}
                  >
                    <Text style={styles.text3}>Target</Text>
                  </LinearGradient>
                </View>
              </Column>
              <Column width={[12, 12, 12, 6, 6]} pt={[6, 6, 6, 0, 0]}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    paddingVertical: 20,
                    paddingLeft: 10,
                  }}
                >
                  <Text style={styles.text}>
                    Open up src/App.js to start working on your app!
                  </Text>
                  <Text style={styles.text}>
                    Changes you make will automatically reload.
                  </Text>
                  <Text style={styles.text}>
                    Shake your phone to open the developer menu.
                  </Text>
                </View>
              </Column>
            </Row>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 1.0, y: 0.9 }}
          colors={['#e8dae9ff', '#b0d6f9ff']}
          style={styles.block}
        >
          <View style={styles.blockContent}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingVertical: 20,
                paddingRight: 10,
              }}
            >
              <Text style={styles.text2}>
                Open up src/App.js to start working on your app!
              </Text>
              <Text style={styles.text2}>
                Changes you make will automatically reload.
              </Text>
              <Text style={styles.text2}>
                Shake your phone to open the developer menu.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
                paddingRight: 10,
              }}
            >
              <LinearGradient
                start={{ x: 0.25, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#7c7c7cff', '#2b2b2bff']}
                style={{
                  ...shadow,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#3a3a3aff',
                }}
              >
                <Text style={styles.text4}>Git</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0.25, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#7c7c7cff', '#2b2b2bff']}
                style={{
                  ...shadow,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#3a3a3aff',
                }}
              >
                <Text style={styles.text4}>Project</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0.25, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#7c7c7cff', '#2b2b2bff']}
                style={{
                  ...shadow,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#3a3a3aff',
                }}
              >
                <Text style={styles.text4}>Target</Text>
              </LinearGradient>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 1.0, y: 0.9 }}
          colors={['#632e96ff', '#125aa5ff', '#48c4d9ff']}
          style={[styles.block, { paddingTop: 75 }]}
        >
          <View style={styles.blockContent}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
                paddingRight: 10,
              }}
            >
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 0.9 }}
                colors={['#e8dae9ff', '#b0d6f9ff']}
                style={{
                  ...shadow,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#f5f5f5ff',
                }}
              >
                <Text style={styles.text3}>Git</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 0.9 }}
                colors={['#e8dae9ff', '#b0d6f9ff']}
                style={{
                  ...shadow,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#f5f5f5ff',
                }}
              >
                <Text style={styles.text3}>Project</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 0.9 }}
                colors={['#e8dae9ff', '#b0d6f9ff']}
                style={{
                  ...shadow,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#f5f5f5ff',
                }}
              >
                <Text style={styles.text3}>Target</Text>
              </LinearGradient>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                paddingVertical: 20,
                paddingLeft: 10,
              }}
            >
              <Text style={styles.text}>
                Open up src/App.js to start working on your app!
              </Text>
              <Text style={styles.text}>
                Changes you make will automatically reload.
              </Text>
              <Text style={styles.text}>
                Shake your phone to open the developer menu.
              </Text>
            </View>
          </View>
        </LinearGradient>
        <LinearGradient
          start={{ x: 0.0, y: 0.25 }}
          end={{ x: 1.0, y: 0.9 }}
          colors={['#e8dae9ff', '#b0d6f9ff']}
          style={styles.block}
        >
          <View style={styles.blockContent}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'flex-end',
                paddingVertical: 20,
                paddingRight: 10,
              }}
            >
              <Text style={styles.text2}>
                Open up src/App.js to start working on your app!
              </Text>
              <Text style={styles.text2}>
                Changes you make will automatically reload.
              </Text>
              <Text style={styles.text2}>
                Shake your phone to open the developer menu.
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingVertical: 20,
                paddingRight: 10,
              }}
            >
              <LinearGradient
                start={{ x: 0.25, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#7c7c7cff', '#2b2b2bff']}
                style={{
                  ...shadow,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#3a3a3aff',
                }}
              >
                <Text style={styles.text4}>Git</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0.25, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#7c7c7cff', '#2b2b2bff']}
                style={{
                  ...shadow,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#3a3a3aff',
                }}
              >
                <Text style={styles.text4}>Project</Text>
              </LinearGradient>
              <LinearGradient
                start={{ x: 0.25, y: 0.0 }}
                end={{ x: 0.5, y: 1.0 }}
                colors={['#7c7c7cff', '#2b2b2bff']}
                style={{
                  ...shadow,
                  marginTop: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 100,
                  height: 50,
                  backgroundColor: '#3a3a3aff',
                }}
              >
                <Text style={styles.text4}>Target</Text>
              </LinearGradient>
            </View>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
