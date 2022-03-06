import React from "react";
import { View } from "react-native";
import store from "./src/redux/store";
import Router from "./src/router/Router";

const App = () => {
  return (
    <Provider store={store}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
};

export default App;
