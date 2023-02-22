import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import RNBounceable from '@freakycoder/react-native-bounceable';

const App = () => {
  let bouncyCheckboxRef: BouncyCheckbox | null = null;
  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.stateContainer,
          {
            backgroundColor: checkboxState ? '#34eb83' : '#eb4034',
          },
        ]}>
        <Text
          style={
            styles.stateTextStyle
          }>{`Check Status: ${checkboxState.toString()}`}</Text>
      </View>
      <BouncyCheckbox
        style={{marginTop: 16}}
        ref={(ref: any) => (bouncyCheckboxRef = ref)}
        isChecked={checkboxState}
        text="Synthetic Checkbox"
        disableBuiltInState
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <RNBounceable
        style={styles.syntheticButton}
        onPress={() => {
          console.log(bouncyCheckboxRef?.onPress());
          // bouncyCheckboxRef?.current.onPress();
          // bouncyCheckboxRef?.onPress();
        }}>
        <Text style={{color: '#fff'}}>Synthetic Checkbox Press</Text>
      </RNBounceable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stateContainer: {
    height: 30,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  stateTextStyle: {
    color: '#fff',
  },
  syntheticButton: {
    height: 50,
    marginTop: 16,
    borderRadius: 12,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffc484',
  },
});

export default App;
