import React from 'react'
import { View } from 'react-native'

const customView = props => {
  const { children, style, ...restProps } = props
  const propStyle = {}
  if ('height' in restProps) {
    propStyle['height'] = parseInt(restProps.height)
  }
  if ('flex-direction' in restProps) {
    propStyle['flexDirection'] = restProps['flex-direction']
  }
  if (props.__html) {
    return <div dangerouslySetInnerHTML={{ __html: props.__html }} />
  } else {
    return (
      <View style={[style, propStyle]} {...restProps}>
        {children}
      </View>
    )
  }
}

export default customView
