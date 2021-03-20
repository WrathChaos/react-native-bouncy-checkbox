import React from "react";
import { View, Text, StatusBar, SafeAreaView } from "react-native";
import AppleHeader from "react-native-apple-header";
import BottomSearchBar from "react-native-bottom-search-bar";
import BouncyCheckbox from "react-native-bouncy-checkbox";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <AppleHeader />
        <View style={{ margin: 16 }}>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              size={25}
              fillColor="red"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
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
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              unfillColor="white"
              borderRadius={10}
              text="Custom Disabled Checkbox Example"
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Call my mom 😇"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(checked: boolean) => {
                alert(checked);
              }}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Get groceries"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Pay the bills"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Take out of the trash 💩"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              text="Buy tickets for concert 🎉 🎊"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Try new gym routine"
              textStyle={{
                fontFamily: "JosefinSans-Regular",
                color: "red",
                textDecorationLine: "none",
              }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
          <View style={{ margin: 8 }}>
            <BouncyCheckbox
              isChecked
              text="Do a load of laundry"
              textStyle={{ fontFamily: "JosefinSans-Regular" }}
              onPress={(isChecked: boolean) => {}}
            />
          </View>
        </View>
        <View
          style={{
            marginTop: 16,
          }}
        >
          <Text
            style={{
              marginLeft: 24,
              fontSize: 24,
              fontWeight: "700",
              fontFamily: "JosefinSans-Regular",
            }}
          >
            Checkbox Only
          </Text>
          <View
            style={{
              marginTop: 16,
              width: "100%",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <BouncyCheckbox
              size={50}
              isChecked
              iconImageStyle={{ width: 18, height: 18 }}
              disableText
              onPress={() => {}}
            />
            <BouncyCheckbox
              disableText
              fillColor="#f54b42"
              size={50}
              iconImageStyle={{ width: 18, height: 18 }}
              iconStyle={{ borderColor: "#f54b42" }}
              onPress={() => {}}
            />
            <BouncyCheckbox
              isChecked
              disableText
              fillColor="#4287f5"
              size={50}
              iconImageStyle={{ width: 18, height: 18 }}
              iconStyle={{ borderColor: "#4287f5" }}
              onPress={() => {}}
            />
            <BouncyCheckbox
              disableText
              fillColor="#9342f5"
              size={50}
              iconImageStyle={{ width: 18, height: 18 }}
              iconStyle={{ borderColor: "#9342f5" }}
              onPress={() => {}}
            />
            <BouncyCheckbox
              isChecked
              disableText
              fillColor="green"
              size={50}
              iconImageStyle={{ width: 18, height: 18 }}
              iconStyle={{ borderColor: "green" }}
              onPress={() => {}}
            />
          </View>
        </View>
        <BottomSearchBar />
      </SafeAreaView>
    </View>
  );
};

export default App;
