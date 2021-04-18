import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import RNBounceable from "@freakycoder/react-native-bounceable";

const App = () => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          height: 30,
          width: 150,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 12,
          backgroundColor: checkboxState ? "#34eb83" : "#eb4034",
        }}
      >
        <Text
          style={{ color: "#fff" }}
        >{`Check Status: ${checkboxState.toString()}`}</Text>
      </View>
      <BouncyCheckbox
        style={{ marginTop: 16 }}
        ref={(ref: any) => (bouncyCheckboxRef = ref)}
        isChecked={checkboxState}
        text="Synthetic Checkbox"
        disableBuiltInState
        onPress={(isChecked: boolean = false) =>
          setCheckboxState(!checkboxState)
        }
      />
      <RNBounceable
        style={{
          marginTop: 16,
          height: 50,
          width: "90%",
          backgroundColor: "#ffc484",
          borderRadius: 12,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => bouncyCheckboxRef?.onPress()}
      >
        <Text style={{ color: "#fff" }}>Synthetic Checkbox Press</Text>
      </RNBounceable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
