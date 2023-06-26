import React, { PureComponent } from 'react'
import { requireNativeComponent } from 'react-native'

const NativeQRCode = requireNativeComponent('QRCode')

class QRCode extends PureComponent {
  render() {
    const { backgroundColor = '#FFFFFF', foregroundColor = '#000000', ...props } = this.props
    return <NativeQRCode bgColor={backgroundColor} fgColor={foregroundColor} {...props} style={{ width: props.size, height: props.size, ...props.style }} />
  }
}

export default QRCode