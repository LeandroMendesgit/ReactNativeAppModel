import React, { Component } from 'react'
import { Text, View } from 'react-native'

const Person = (props) => {
    return (
      <View> 
        <Text> O meu nome é  {props.nome} </Text>
        <Text> A minha idade é  {props.idade} </Text>
        <Text> O meu telefone é  {props.telefone} </Text>
      </View>
    )
}

export default Person
