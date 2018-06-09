import React from 'react'

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

export default createContextElement
