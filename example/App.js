import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import BouncyCheckbox from "./lib/src/BouncyCheckbox";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import BottomSearchBar from "react-native-bottom-search-bar";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <View style={{ margin: 16 }}>
          <BouncyCheckbox />
          <BouncyCheckbox text="Get groceries" />
          <BouncyCheckbox text="Pay the bills" isChecked />
          <BouncyCheckbox text="Take out of the trash 💩" />
          <BouncyCheckbox text="Buy tickets for concert 🎉 🎊" />
          <BouncyCheckbox text="Try new gym routine" isChecked />
          <BouncyCheckbox text="Do a load of laundry" isChecked />
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;
