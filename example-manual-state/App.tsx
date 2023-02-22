import React, { useRef } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import BouncyCheckbox from "./lib/BouncyCheckbox";
import RNBounceable from "@freakycoder/react-native-bounceable";

const App = () => {
  let bouncyCheckboxRef = useRef(null);
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.checkStatus,
          {
            backgroundColor: checkboxState ? "#34eb83" : "#eb4034",
          },
        ]}
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
        onPress={() => bouncyCheckboxRef.current?.onPress()}
      >
        <Text style={{ color: "#fff" }}>Synthetic Checkbox Press</Text>
      </RNBounceable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  checkStatus: {
    height: 30,
    width: 150,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
