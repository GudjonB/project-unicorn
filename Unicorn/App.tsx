import React from 'react';
import ReactDOM from 'react-dom';
import Prufa from './components/Prufa';

import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.h1}>
      <Text> Prufa </Text>
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
  h1: {
    fontSize: 40,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 80,
  }
});
