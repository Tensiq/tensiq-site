import React from 'react'
import Link from 'gatsby-link'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import material from 'react-native-typography/src/collections/material'
import Svg, { Rect, Text as SvgText } from 'react-native-svg'
import { View as AView } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome'
//import { Column as Col, Row } from 'react-native-flexbox-grid'
import Col from '../components/Grid/Column'
import Row from '../components/Grid/Row'
//import { inject, observer } from 'mobx-react'
import { Consumer } from '../stores/ctxStore'

const styles = StyleSheet.create({
  box: { padding: 0, margin: 0, borderWidth: 0, borderColor: 'black' },
  text: { fontWeight: 'bold', color: 'red' },
  button: {
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold', color: 'black' },
  element: {
    height: 100,
    justifyContent: 'center',
  },
})

const myIcon = <Icon name="rocket" size={30} color="#900" />

// @inject("Store")
// @observer
//@inject('myStore')
//@observer
class SecondPage extends React.Component {
  handleViewRef = ref => (this.view = ref)

  bounce = () => this.view.bounce(800)

  render() {
    return (
      <Consumer
        mapStateToProps={state => ({
          data: state.data,
        })}
      >
        {({ data }) => (
          <View style={styles.box}>
            <Text style={material.headline}>Hi from the second page</Text>
            <Text style={styles.text}>Welcome to page 2</Text>
            <Text style={[{ margin: 10 }]}>{data}</Text>
            <View style={{ margin: 20 }}>
              <TouchableWithoutFeedback onPress={this.bounce}>
                <AView ref={this.handleViewRef}>
                  <Text>Bounce me!</Text>
                </AView>
              </TouchableWithoutFeedback>
            </View>
            {myIcon}
            <Row size={12}>
              <Col width={[12, 6, 4]} pb={[2]}>
                <View
                  style={[styles.element, { backgroundColor: '#c3defe' }]}
                />
              </Col>
              <Col width={[12, 6, 4]} pb={[2]}>
                <View
                  style={[styles.element, { backgroundColor: '#b2d4fe' }]}
                />
              </Col>
              <Col width={[12, 6, 4]} pb={[2]}>
                <View
                  style={[styles.element, { backgroundColor: '#a1cbfd' }]}
                />
              </Col>
            </Row>
            <Link to="/">Go back to the homepage</Link>
            <Svg width="200" height="100">
              <Rect
                x="25"
                y="5"
                onPressIn={() => alert('PressIn on Rect')}
                onPressOut={() => alert('PressOut on Rect')}
                width="150"
                height="50"
                fill="rgb(0,0,255)"
                strokeWidth="3"
                stroke="rgb(0,0,0)"
              />
              <SvgText
                fontFamily="Verdana"
                fill="none"
                stroke="purple"
                fontSize="20"
                fontWeight="bold"
                x="100"
                y="80"
                textAnchor="middle"
              >
                STROKED TEXT
              </SvgText>
            </Svg>
          </View>
        )}
      </Consumer>
    )
  }
}

export default SecondPage
