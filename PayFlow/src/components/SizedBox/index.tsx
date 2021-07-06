import React from 'react'
import { View } from 'react-native'

type Props = {
  height?: number,
  width?: number
}

const SizedBox: React.FC<Props> = ({ height = 0, width = 0 }) => {
  return <View style={{ height, width }} />
}

export default SizedBox