import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import AppleHeader from "react-native-apple-header";
import BottomSearchBar from "react-native-bottom-search-bar";
import BouncyCheckbox from "./lib/BouncyCheckbox";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <View style={{ margin: 16 }}>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox isChecked disableText onPress={() => {}} />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              size={25}
              fillColor="red"
              iconStyle={{ borderColor: "red" }}
              unfillColor="#FFFFFF"
              text="Custom Checkbox"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              disabled
              isChecked={false}
              iconStyle={{ borderColor: "blue", borderRadius: 10 }}
              unfillColor="white"
              borderRadius={10}
              text="Custom Disabled Checkbox Example"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Call my mom 😇"
              onPress={(checked: boolean) => {
                alert(checked);
              }}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Get groceries"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Pay the bills"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Take out of the trash 💩"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Buy tickets for concert 🎉 🎊"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Try new gym routine"
              textStyle={{ color: "red", textDecorationLine: "none" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Do a load of laundry"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;
