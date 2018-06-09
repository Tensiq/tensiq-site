import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'

class Page5 extends React.Component {
  render() {
    return (
      <View>
        <Text>Dies ist ein Text</Text>
        <Link to="/">Go back to the homepage</Link>
      </View>
    )
  }
}

export default Page5
