import React from 'react';
import Link from 'gatsby-link';
import { Platform, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Box from '../components/Grid/Box';
import { ThemeContext } from '../components/ThemeProvider';

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
    flexWrap: 'wrap',
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
        <ThemeContext.Consumer>
          {theme => {
            return (
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
                    <Box {...theme.props.contentBlockBoxLeftImage}>
                      <View
                        style={theme.style({
                          element: 'contentBlockInnerContainer',
                          type: 'allCentered',
                        })}
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
                    </Box>
                    <Box {...theme.props.contentBlockBoxRightText}>
                      <View
                        style={theme.style({
                          element: 'contentBlockInnerContainer',
                          type: 'leftCentered',
                        })}
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
                    </Box>
                  </View>
                </LinearGradient>
                <LinearGradient
                  {...theme.gradient('lightBlock')}
                  style={[theme.style({ element: 'contentBlock' })]}
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
                  {...theme.gradient('darkBlock2')}
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
          }}
        </ThemeContext.Consumer>
      </View>
    );
  }
}

export default IndexPage;
