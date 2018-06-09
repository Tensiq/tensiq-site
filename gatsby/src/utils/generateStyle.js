export default (styles, props) => {
  const { element, type = 'normal' } = props
  if (element === undefined) {
    return null
  }
  const breakpoint =
    props.responsive && props.responsive.breakpoint
      ? props.responsive.breakpoint
      : 0
  const typeToUse = styles[type] ? type : 'normal'
  var elementStyle = undefined
  if (typeof styles[typeToUse] === 'function') {
    const styleFunc = styles[typeToUse]
    elementStyle = styleFunc(props)
  } else {
    elementStyle = styles[typeToUse]
  }

  const bestBp =
    breakpoint -
    Math.min(
      ...Object.keys(elementStyle)
        .map(value => breakpoint - value)
        .filter(value => value >= 0)
    )
  return elementStyle[bestBp]
}
