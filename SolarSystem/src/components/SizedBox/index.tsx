import React from 'react'
import { View } from 'react-native'

interface SizedProps {
  height?: number,
  width?: number
}

const SizedBox = ({ height = 0, width = 0 }: SizedProps) => {
  return <View style={{ height, width }} />
}

export default SizedBox