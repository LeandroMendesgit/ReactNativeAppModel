import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import Car from './components/Car';

export default function App() {
  const [value,setValue] = useState(false)
  const [nameCar,setNameCar] = useState('')
  
  return (
    <View style={styles.container}>
      <TextInput placeholder="Nome do carro">

      </TextInput>
      <Button title="Registrar"></Button>
      <Text>
        
      </Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});