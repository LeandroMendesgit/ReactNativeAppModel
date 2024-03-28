import { View, Text } from 'react-native'
import React from 'react'

const Car = (props) => {
  return (
    <View>
      <Text>O carro {props.name}</Text>
    </View>
  )
}

export default Car
