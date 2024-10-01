// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  


  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AsyncStorage Example</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter something..." 
      />
      <View style={styles.spacer} >
        <Button title="Store Data" testID='storeData'/>
        <Button title="Retrieve Data" testID='retrieveData'/>
        <Button title="Clear Data" testID='clearData'/>
      </View>
      <Text style={styles.text} testID='storedId'></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
  },
  spacer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
    flexDirection: 'row'

  },
  text: {
    fontSize: 18,
    marginTop: 20,
  },
});

export default App;
