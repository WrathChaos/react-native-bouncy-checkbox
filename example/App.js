import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BouncyCheckbox from "./lib/src/BouncyCheckbox";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ margin: 16 }}>
          <BouncyCheckbox />
          <BouncyCheckbox text="Get groceries" />
          <BouncyCheckbox text="Buy tickets for concert" />
          <BouncyCheckbox text="Work on inbox zero" />
          <BouncyCheckbox text="Do a load of laundry" isChecked />
          <BouncyCheckbox text="Try new gym routine" isChecked />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default App;
