/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
 import { createStore, applyMiddleware } from 'redux';
 import { Provider } from 'react-redux';
 import Timer from './src/components/Timer.js'
 import timerReducer from './src/reducers/reducers.js';
 import AppNavigator from './src/Navigation/Navigator.js'
 import { logger } from 'redux-logger';
 import createSagaMiddleware from 'redux-saga';
 const sagaMiddleware = createSagaMiddleware();
 const store = createStore(timerReducer,applyMiddleware(sagaMiddleware, logger),)
 
 const App = () => {
   return (
     <Provider store={store}>
       <AppNavigator />
     </Provider>
   )
 };
 
 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });
 
 export default App;
 