/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
//https://www.youtube.com/watch?v=r7f03VJ8bDE

//Part 2
//https://www.youtube.com/watch?v=nBz4k-F9g5E
import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" /> 
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});

export default App;
