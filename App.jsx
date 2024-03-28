import { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Car from './components/Car';

export default function App() {
  const [value,setValue] = useState(false)
  
  return (
    <View style={styles.container}>
      <Text>
        <Car name="Monza"/>
      </Text>
      <Button title={value ? 'Tanque cheio!' : 'Encher tanque'}
      onPress={() => {setValue(true)}}
      disabled={value}
      >
      </Button>
      <Button
      title='Esvaziar tanque'
      disabled={!value}
      onPress={() => {
        setValue(false)
      }}
      >
      </Button>
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
