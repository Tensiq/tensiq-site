import React from 'react'
import rehypeReact from 'rehype-react'
import u from 'unist-builder'
import visit from 'unist-util-visit'
import remove from 'unist-util-remove'
import View from '../components/View'
import Paragraph from '../components/Paragraph'
import Link from '../components/Link'
import {
  TextNormal,
  TextEm,
  TextStrong,
  TextTableBody,
  TextTableHeader,
} from '../components/Text'
import { Header1, Header2, Header3 } from '../components/PageHeader'
import TextIcon from '../components/Icon'
import { withTheme } from '../components/ThemeProvider'
import { withResponsiveTheme } from '../components/ResponsiveProvider'

const textTags = /^(th|td)$/

const cleanHtmlAst = htmlAst => {
  remove(htmlAst, node => {
    return node.type === 'text' && /^\n*$/.test(node.value)
  })

  visit(
    htmlAst,
    (node, index, parent) => {
      return (
        node.type === 'element' &&
        node.tagName === 'p' &&
        parent.type === 'element' &&
        parent.tagName === 'li'
      )
    },
    (node, index, parent) => {
      node.tagName = 'c-list-paragraph'
    }
  )

  visit(
    htmlAst,
    (node, index, parent) => {
      return (
        node.type === 'element' &&
        node.tagName === 'ul' &&
        parent.type === 'root'
      )
    },
    (node, index, parent) => {
      parent.children[parent.children.indexOf(node)] = u(
        'element',
        { tagName: 'p' },
        [node]
      )
    }
  )

  visit(
    htmlAst,
    (node, index, parent) => {
      return (
        node.type === 'text' &&
        !(parent.type === 'element' && parent.tagName.endsWith('text'))
      )
    },
    (node, index, parent) => {
      node.type = 'element'
      node.tagName = 'text'
      if (parent && parent.type === 'element') {
        const result = textTags.exec(parent.tagName)
        if (result != null) {
          node.tagName = `c-${result[1]}-text`
        }
      }
      node.children = [{ type: 'text', value: node.value }]
      node.value = null
      return visit.SKIP
    }
  )

  return htmlAst
}

const getHtmlAstRenderer = (htmlAst, { createElement, components }) => {
  return new rehypeReact({
    createElement: createElement || React.createElement,
    components: Object.assign(
      {
        div: View,
        //      a: Link,
        text: TextNormal,
        em: TextEm,
        strong: TextStrong,
        icon: TextIcon,
        h1: withTheme(Header1),
        h2: withTheme(Header2),
        h3: withTheme(Header3),
        'c-td-text': withTheme(TextTableBody),
        'c-th-text': withTheme(TextTableHeader),
        p: Paragraph,
      },
      components
    ),
  }).Compiler
}

module.exports = { cleanHtmlAst, getHtmlAstRenderer }
