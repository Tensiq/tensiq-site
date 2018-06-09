import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { withResponsiveTheme } from '../ResponsiveProvider'

@withResponsiveTheme
class TextIcon extends PureComponent {
  render() {
    const { theme } = this.props
    return (
      <Icon
        style={theme.style(this.props)}
        {...this.props}
      />
    )
  }
}
TextIcon.defaultProps = {
  element: 'icon',
  type: 'normal'
}

export default TextIcon
