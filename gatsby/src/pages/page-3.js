import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Card from 'react-native-material-ui/src/Card'
import Button from 'react-native-material-ui/src/Button'
import ThemeProvider from 'react-native-material-ui/src/styles/ThemeProvider.react'

const uiTheme = {}

const styles = StyleSheet.create({
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    flex: 1,
  },
})

const card = {
  container: {
    width: 200,
    height: 300,
  },
}

class ThirdPage extends React.Component {
  render() {
    return (
      <ThemeProvider uiTheme={uiTheme}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            height: 550,
          }}
        >
          <Card style={card}>
            <Image
              style={{ width: '100%', height: '35%' }}
              source={{
                uri: 'https://picsum.photos/200/300',
              }}
            />
            <View style={styles.textContainer}>
              <Text style={{ fontFamily: 'Roboto', fontWeight: 'bold' }}>
                Hello world!
              </Text>
              <Text style={{ fontFamily: 'Roboto' }}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat.
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                padding: 5,
              }}
            >
              <Button
                style={{ text: { fontFamily: 'Roboto' } }}
                primary
                text="Submit"
              />
            </View>
          </Card>
          <Card style={card}>
            <View style={styles.textContainer}>
              <Text>Hello world!</Text>
            </View>
          </Card>
          <Card style={card}>
            <View style={styles.textContainer}>
              <Text>Hello world!</Text>
            </View>
          </Card>
        </View>
      </ThemeProvider>
    )
  }
}

export default ThirdPage
