import GatsbyLink from 'gatsby-link'

const Link = props => {
  const { children, style, ...restProps } = props
  return (
    <GatsbyLink style={{ paddingTop: 5, paddingRight: 5 }} to={props.href}>
      {children}
    </GatsbyLink>
  )
}

export default Link
