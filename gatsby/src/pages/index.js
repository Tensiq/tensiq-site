import React from 'react'
import Link from 'gatsby-link'
import {
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Text,
  TextInput,
  View,
} from 'react-native'
import Svg, { Rect, Text as SvgText } from 'react-native-svg'
import { View as AView } from 'react-native-animatable'
import Icon from 'react-native-vector-icons/FontAwesome'
import material from 'react-native-typography/src/collections/material'
import { Consumer } from '../stores/ctxStore'
//import { inject, observer } from 'mobx-react'

const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: 'black' },
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
  buttonText: {
    //   fontWeight: 'bold',
    color: 'black',
  },
})

const myIcon = <Icon name="rocket" size={30} color="#900" />

const customTextButton = (
  <View style={{ margin: 20 }}>
    <Icon.Button name="facebook" backgroundColor="#3b5998">
      <Text
        style={{
          fontFamily: 'Arial',
          color: 'white',
          fontWeight: 'bold',
          fontSize: 15,
        }}
      >
        Login with Facebook
      </Text>
    </Icon.Button>
  </View>
)

//@inject('myStore')
//@observer
class IndexPage extends React.Component {
  handleViewRef = ref => (this.view = ref)

  bounce = () =>
    this.view
      .bounce(800)
      .then(endState =>
        console.log(endState.finished ? 'bounce finished' : 'bounce cancelled')
      )

  onInputChange = (setData, value) => {
    setData(value)
  }

  render() {
    return (
      <Consumer
        mapStateToProps={state => ({
          data: state.data,
        })}
      >
        {({ data, actions }) => (
          <View style={styles.box}>
            <Text style={styles.text}>
              Hi this is React-Native-Web rendered by Gatsby
            </Text>
            <Text style={{ fontSize: 30, marginTop: 20 }}>
              Lorem <Icon name="adjust" size={30} color="#4F8EF7" /> Ipsum
            </Text>

            <View style={{ margin: 20 }}>
              <TouchableWithoutFeedback onPress={this.bounce}>
                <AView ref={this.handleViewRef}>
                  <Text>Bounce me!</Text>
                </AView>
              </TouchableWithoutFeedback>
            </View>
            <TextInput
              style={[
                {
                  width: 200,
                  margin: 10,
                },
              ]}
              onChangeText={text => this.onInputChange(actions.setData, text)}
              value={data}
            />
            {myIcon}
            {customTextButton}
            <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
              <Text style={material.display1}>Markdown articles</Text>
              <Text
                style={[
                  material.subheading,
                  { marginLeft: 10, marginBottom: 4 },
                ]}
              >
                ({this.props.data.allMarkdownRemark.totalCount} Posts)
              </Text>
            </View>

            <View style={{ flexDirection: 'column' }}>
              {this.props.data.allMarkdownRemark.edges.map(({ node }) => (
                <View
                  key={node.id}
                  style={{ flexDirection: 'row', justifyContent: 'flex-start' }}
                >
                  <Link
                    to={node.fields.slug}
                    style={{ textDecoration: 'none', color: `inherit` }}
                  >
                    <View style={{ flexDirection: 'column' }}>
                      <View
                        style={{ flexDirection: 'row', alignItems: 'flex-end' }}
                      >
                        <Text
                          style={[
                            material.title,
                            { textDecorationLine: 'none' },
                          ]}
                        >
                          {node.frontmatter.title}
                        </Text>
                        <Text
                          style={[
                            material.caption,
                            { marginLeft: 10, marginBottom: 4 },
                          ]}
                        >
                          - {node.frontmatter.date}
                        </Text>
                      </View>
                      <Text style={material.body1}>{node.excerpt}</Text>
                    </View>
                  </Link>
                </View>
              ))}
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => alert('it works')}
            >
              <Text style={styles.buttonText}>Button</Text>
            </TouchableOpacity>
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
            <Link to="/page-2/">Go to page 2</Link>
          </View>
        )}
      </Consumer>
    )
  }
}

export default IndexPage

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
`
