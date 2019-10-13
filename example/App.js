import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BouncyCheckbox from "./lib/src/BouncyCheckbox";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <BouncyCheckbox text="Call my mom" />
        <BouncyCheckbox text="Call my mom" />
        <BouncyCheckbox text="Call my mom" />
        <BouncyCheckbox text="Call my mom" />
      </SafeAreaView>
    </View>
  );
};

export default App;
