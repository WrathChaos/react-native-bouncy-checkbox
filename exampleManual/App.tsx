import React, {useRef} from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import BouncyCheckbox, {BouncyCheckboxHandle} from './build/dist';

const App = () => {
  const bouncyCheckboxRef = useRef<BouncyCheckboxHandle>(null);

  const [checkboxState, setCheckboxState] = React.useState(false);

  return (
    <ImageBackground
      style={styles.container}
      source={require('./assets/bg.jpg')}>
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
        size={50}
        textStyle={styles.textStyle}
        style={{marginTop: 16}}
        iconImageStyle={styles.iconImageStyle}
        fillColor={'#00C0EE'}
        unFillColor={'transparent'}
        ref={bouncyCheckboxRef}
        isChecked={checkboxState}
        text="Synthetic Checkbox"
        onPress={() => setCheckboxState(!checkboxState)}
      />
      <RNBounceable
        style={styles.syntheticButton}
        onPress={() => {
          bouncyCheckboxRef.current?.onCheckboxPress();
        }}>
        <Text style={{color: '#fff'}}>Synthetic Checkbox Press</Text>
      </RNBounceable>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stateContainer: {
    height: 45,
    width: 175,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginBottom: 12,
  },
  stateTextStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  syntheticButton: {
    height: 50,
    marginTop: 64,
    borderRadius: 12,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00C0EE',
  },
  iconImageStyle: {
    width: 20,
    height: 20,
  },
  textStyle: {
    color: '#010101',
    fontWeight: '600',
  },
});

export default App;
