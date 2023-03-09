import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import TodoHeader from './src/components/TodoHeader';
import TodoList from './src/components/TodoList';

// import store
import store from './src/redux/store';
//import Provider
import {Provider} from 'react-redux';

const App = () => {
  const RootApp = () => {
    return (
      <View>
        <TodoHeader />
        <TodoList />
      </View>
    );
  };
  return (
    <Provider store={store}>
      <RootApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
