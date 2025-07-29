// App.js

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {
  const [inputValue, setInputValue] = useState('');     // State for user input
  const [displayValue, setDisplayValue] = useState(''); // State for displayed/stored data

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('@storage_Key', inputValue);
      setDisplayValue(inputValue); // Update the display immediately
      console.log('Data stored successfully');
    } catch (e) {
      console.error('Failed to save data', e);
    }
  };

  const retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('@storage_Key');
      if (value !== null) {
        setDisplayValue(value);
        console.log('Data retrieved successfully');
      }
    } catch (e) {
      console.error('Failed to retrieve data', e);
    }
  };

  const clearData = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
      setInputValue('');
      setDisplayValue('');
      console.log('Data cleared successfully');
    } catch (e) {
      console.error('Failed to clear data', e);
    }
  };

  useEffect(() => {
    retrieveData(); // Load on mount
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>AsyncStorage Practice</Text>

      {/* Text input for entering data */}
      <TextInput
        style={styles.input}
        placeholder="Enter some text"
        value={inputValue}
        onChangeText={setInputValue}
        testID="inputTextBox"
      />

      {/* Buttons */}
      <View style={styles.spacer}>
        <Button title="Store Data" onPress={storeData} testID="storeData" />
        <Button title="Retrieve Data" onPress={retrieveData} testID="retrieveData" />
        <Button title="Clear Data" onPress={clearData} testID="clearData" />
      </View>

      {/* Text input for showing the stored value */}
      <TextInput
        style={styles.input}
        placeholder="Stored value appears here"
        value={displayValue}
        editable={false} // read-only display
        testID="displayTextBox"
      />

      {/* Also show below in plain text */}
      <Text style={styles.text} testID="displayedText">Stored Value: {displayValue}</Text>
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
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#888',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
  },
  spacer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default App;
