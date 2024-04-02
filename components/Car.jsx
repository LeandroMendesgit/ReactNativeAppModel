import { View, Text } from 'react-native'
import React from 'react'

const Car = (props) => {
  return (
    <View>
     {props.name && <Text>O carro {props.name}</Text>}
     {!props.name && <Text>Carro não identificado</Text>}
    </View>
  )
}

export default Car
