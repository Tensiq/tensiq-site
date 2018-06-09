import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Counter from '../components/Counter'
import { StyleSheet, View, Text, render } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Img from 'gatsby-image'
import Link from 'gatsby-link'
import Col from '../components/Grid/Column'
import Row from '../components/Grid/Row'
import { TextNormal } from '../components/Text'
import { cleanHtmlAst, getHtmlAstRenderer } from '../utils/astHelper'
import { Header1 as H1 } from '../components/PageHeader'
import * as theme from '../utils/theme'
import { withTheme } from '../components/ThemeProvider'
import { withResponsiveTheme } from '../components/ResponsiveProvider'
import { isConnected, getConnected } from '../utils/connectHelper'
import TableRow from '../components/Table/Row'

const iconStyles2 = {
  normal: StyleSheet.create({
    0: {
      fontSize: 18,
      color: 'green',
    },
    1: {
      fontSize: 22,
      color: 'cyan',
    },
    2: {
      fontSize: 24,
      color: 'orange',
    },
  }),
}

const Header1 = withTheme(H1)

const CTextIcon = props => {
  const size = parseInt(props.size)
  return (
    <Icon
      style={{ paddingVertical: 4 }}
      name={props.name}
      size={size}
      color={props.color}
    />
  )
}

class mdImg extends Component {
  render() {
    const sizes = mdImg.images.edges.filter(
      edge => edge.node.sizes.originalName === this.props.src
    )[0].node.sizes
    if (sizes === undefined) {
      return <img {...this.props} />
    }
    return (
        <View style={theme.style({ theme, element: 'aspectRatio' })}>
      <View style={{ flex: 1 }}>
        <Img sizes={sizes} />
      </View>
    </View>
    )
  }
}

const mdYoutube = props => {
  const { theme, title, children } = props
  return (
    <View style={theme.style({ theme, element: 'ytOuterContainer' })}>
      <View style={theme.style({ theme, element: 'ytInnerContainer' })}>
        <View style={theme.style({ theme, element: 'aspectRatio' })}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {children}
          </View>
        </View>
        <Text style={theme.style({ theme, element: 'ytTitle' })}>{title}</Text>
      </View>
    </View>
  )
}

const parseIntoArray = prop => prop.split(',')

var parseMdProps = props => {
  const newProps = {}
  Object.keys(props).forEach(key => {
    if (typeof props[key] === 'string' && /\[.*\]/.test(props[key])) {
      newProps[key] = parseIntoArray(/\[(.*)\]/.exec(props[key])[1])
    } else {
      newProps[key] = props[key]
    }
  })
  return newProps
}

const mdRow = props => {
  const { children, ...restProps } = props
  const parsedProps = parseMdProps(props)
  return <Row {...parsedProps}>{children}</Row>
}

const mdCol = props => {
  const { children, ...restProps } = props
  const parsedProps = parseMdProps(props)
  return <Col {...parsedProps}>{children}</Col>
}

const CFlex = props => {
  const { children, style, ...restProps } = props
  const flexStyle = { flex: 1, paddingHorizontal: 10 }
  if ('row' in restProps) {
    flexStyle['flexDirection'] = 'row'
  } else {
    flexStyle['flexDirection'] = 'column'
    flexStyle['justifyContent'] = 'center'
  }
  return (
    <View style={[style, flexStyle]} {...restProps}>
      {children}
    </View>
  )
}

const mdTable = props => {
  const { theme, style, ...restProps } = props
  return (
    <View style={[theme.style(props), style]} {...restProps}>
      {createContextElement(props)}
    </View>
  )
}
mdTable.defaultProps = {
  element: 'table',
}

const mdTableHead = props => {
  const { theme, style, ...restProps } = props
  return (
    <View style={[theme.style(props), style]} {...restProps}>
      {createContextElement(props)}
    </View>
  )
}
mdTableHead.defaultProps = {
  element: 'tableHeader',
}

const mdTableHeadCell = props => {
  const { theme, style, ...restProps } = props
  return (
    <View style={[theme.style(props), style]} {...restProps}>
      {createContextElement(props)}
    </View>
  )
}
mdTableHeadCell.defaultProps = {
  element: 'tableHeaderCell',
}

const mdTableBody = props => {
  const { theme, style, ...restProps } = props
  return (
    <View style={[theme.style(props), style]} {...restProps}>
      {createContextElement(props, { withIndex: 'row' })}
    </View>
  )
}
mdTableBody.defaultProps = {
  element: 'tableBody',
}

const mdTableBodyCell = props => {
  const { theme, style, ...restProps } = props
  return (
    <View style={[theme.style(props), style]} {...restProps}>
      {createContextElement(props)}
    </View>
  )
}
mdTableBodyCell.defaultProps = {
  element: 'tableBodyCell',
}

// const mdTableRow = props => {
//   const { theme, style, ...restProps } = props
//   return (
//     <View style={[theme.style(props), style]} {...restProps}>
//       {createContextElement(props, { withIndex: 'col' })}
//     </View>
//   )
// }
// mdTableRow.defaultProps = {
//   element: 'tableRow',
// }

const createContextElement = (props, options = {}) => {
  const { element, type, children } = props
  if (!children) {
    return null
  }
  const { withIndex, withDepth } = options
  const indexProps = {}
  if (props) {
    Object.keys(props)
      .filter(key => /^[a-z]*(count|index)$/.test(key))
      .forEach(key => (indexProps[key] = props[key]))
  }
  const elementCount = children.length
  return React.Children.map(children, (child, index) => {
    const counter =
      withIndex != undefined
        ? { [`${withIndex}index`]: index, [`${withIndex}count`]: elementCount }
        : null
    const depth = withDepth != undefined ? { depth: withDepth } : null
    return React.cloneElement(child, {
      type,
      ...indexProps,
      ...counter,
      ...depth,
    })
  })
}

const mdElementContext = props => createContextElement(props)

const mdList = props => {
  const { theme, style, depth } = props
  const listProps = {
    ...props,
    depth: depth === undefined ? 0 : depth + 1,
  }
  return (
    <View style={[theme.style(listProps), style]} {...listProps}>
      {createContextElement(listProps, { withDepth: listProps.depth })}
    </View>
  )
}
mdList.defaultProps = {
  element: 'list',
}

const mdListItem = props => {
  const { theme, style, depth } = props
  const dot = '•'
  return (
    <View style={[theme.style(props), style]} {...props}>
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <View
          style={[
            theme.style({ theme, element: 'listParagraph' }),
            { flex: -1 },
          ]}
        >
          <TextNormal {...props} element="text">
            {dot}
          </TextNormal>
        </View>
        <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 10 }}>
          {createContextElement(props, { withDepth: depth })}
        </View>
      </View>
    </View>
  )
}
mdListItem.defaultProps = {
  element: 'listItem',
}

const mdListParagraph = props => {
  const { theme } = props
  return <Text style={[theme.style(props)]} {...props} />
}
mdListParagraph.defaultProps = {
  element: 'listParagraph',
}

@withTheme
export default class extends React.PureComponent {
  constructor(props) {
    super(props)
    props.theme.dispatch({
      type: 'SET_THEME',
      value: {
        styles: {
          text: theme.text,
          header: theme.header,
          icon: iconStyles2,
          paragraph: theme.paragraph,
          list: theme.list,
          listItem: theme.listItem,
          listParagraph: theme.listParagraph,
          table: theme.table,
          tableHeader: theme.tableHeader,
          tableHeaderCell: theme.tableHeaderCell,
          tableHeaderText: theme.tableHeaderText,
          tableBody: theme.tableBody,
          tableBodyCell: theme.tableBodyCell,
          tableBodyText: theme.tableBodyText,
          //          tableRow: theme.tableRow,
          ytOuterContainer: theme.ytOuterContainer,
          ytInnerContainer: theme.ytInnerContainer,
          ytTitle: theme.ytTitle,
          aspectRatio: theme.aspectRatio,
          breakpoints: theme.breakpoints,
          spaces: theme.spaces,
          types: theme.types,
        },
        colors: theme.colors
      },
    })
  }
  render() {
    const { data, theme } = this.props
    const post = data.markdownRemark
    mdImg.images = data.allImageSharp

    // console.log('htmlAst', post.htmlAst)
    cleanHtmlAst(post.htmlAst)
    console.log('htmlAst', post.htmlAst)

    const renderHtmlAst = getHtmlAstRenderer(post.htmlAst, {
      components: {
        img: mdImg,
        'c-row': mdRow,
        'c-col': mdCol,
        table: withResponsiveTheme(mdTable),
        thead: withTheme(mdTableHead),
        th: withTheme(mdTableHeadCell),
        tbody: withTheme(mdTableBody),
        td: withTheme(mdTableBodyCell),
        //        tr: withTheme(mdTableRow),
        tr: TableRow,
        ul: withTheme(mdList),
        li: withTheme(mdListItem),
        'c-list-paragraph': withTheme(mdListParagraph),
        'c-element': mdElementContext,
        'c-youtube': withTheme(mdYoutube),
        //    'c-counter': Counter,
      },
    })
    if (this.props.theme.styles === undefined) {
      return null
    }
    return (
      <View>
        <Header1>{post.frontmatter.title}</Header1>
        {renderHtmlAst(post.htmlAst)}
      </View>
    )
  }
}

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
      }
    }
    allImageSharp(filter: { id: { regex: "/pages/.*.jpg/" } }) {
      edges {
        node {
          sizes(maxWidth: 800) {
            originalName
            ...GatsbyImageSharpSizes_withWebp
          }
        }
      }
    }
  }
`
