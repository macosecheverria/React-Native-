import React from 'react';
import {SafeAreaView} from 'react-native';
// import {HelloWorldScreen} from './src/presentation/screens/HelloWorldScreen';
import {CounterScreen} from './src/presentation/screens/CounterScreen';

export const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <HelloWorldScreen name={'Marco Antonio Ramirez Echeverria'} /> */}

      <CounterScreen />
    </SafeAreaView>
  );
};
