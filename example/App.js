import React from "react";
import { View, Image, StatusBar, SafeAreaView } from "react-native";
import BottomSearchBar from "react-native-bottom-search-bar";
import { AppleHeader } from "@freakycoder/react-native-header-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <View style={{ margin: 16 }}>
          <BouncyCheckbox
            isChecked={false}
            textColor="#000"
            unfillColor="white"
            fontFamily="JosefinSans-Regular"
            iconComponent={
              <Image
                style={{ height: 10, width: 10 }}
                source={require("./assets/checkmark.png")}
              />
            }
            text="Custom Icon Example"
          />
          <BouncyCheckbox
            fontFamily="JosefinSans-Regular"
            onPress={(checked) => {
              alert(checked);
            }}
          />
          <BouncyCheckbox
            text="Get groceries"
            fontFamily="JosefinSans-Regular"
          />
          <BouncyCheckbox
            isChecked
            text="Pay the bills"
            fontFamily="JosefinSans-Regular"
          />
          <BouncyCheckbox
            fontFamily="JosefinSans-Regular"
            text="Take out of the trash 💩"
          />
          <BouncyCheckbox
            fontFamily="JosefinSans-Regular"
            text="Buy tickets for concert 🎉 🎊"
          />
          <BouncyCheckbox
            isChecked
            disableTextDecoration
            text="Try new gym routine"
            fontFamily="JosefinSans-Regular"
          />
          <BouncyCheckbox
            isChecked
            text="Do a load of laundry"
            fontFamily="JosefinSans-Regular"
          />
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;
