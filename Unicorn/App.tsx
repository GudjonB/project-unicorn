import React from 'react';
import Prufa from './components/Prufa';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <div>
    <Prufa></Prufa>
    <View style={styles.container}>
      <Text>prufa 2</Text>
      <Text>Open up App.tsx to start working on your app!</Text>
    </View>
    </div>
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
