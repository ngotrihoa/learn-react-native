import React from 'react';
import { View } from 'react-native';
import Router from './src/router/Router';
import { ContextProvider } from './src/context';

// AppRegistry.registerComponent(appName, () => () => (
//   // <Provider store={store}>
//   <View style={{ flex: 1 }}>
//     <Router />
//   </View>
//   // </Provider>
// ));
const App = () => {
  return (
    <ContextProvider>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </ContextProvider>
  );
};

export default App;
