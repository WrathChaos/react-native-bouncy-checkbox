<img alt="React Native Bouncy Checkbox" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox)

[![Fully customizable animated bouncy checkbox for React Native](https://img.shields.io/badge/-Fully%20customizable%20animated%20bouncy%20checkbox%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox)

[![npm version](https://img.shields.io/npm/v/react-native-bouncy-checkbox.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox)
[![npm](https://img.shields.io/npm/dt/react-native-bouncy-checkbox.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<table>
  <tr>
    <td align="center">
      <img alt="React Native Bouncy Checkbox"
        src="assets/Screenshots/react-native-bouncy-checkbox.gif" />
    </td>
    <td align="center">
      <img alt="React Native Bouncy Checkbox"
        src="assets/Screenshots/react-native-bouncy-checkbox.png" />
    </td>
   </tr>
</table>

## Installation

Add the dependency:

<b>Zero Dependency</b> 🥳 

### React Native

```shell
npm i react-native-bouncy-checkbox
```

## 🥳  <i> Version 4.1.1 is here</i> 🚀 

- **Complete re-written with Modern Functional Component**
- Fully Refactored with React Hooks
- Imperative Handle Support
- **Checkbox is controllable with `isChecked` prop**
- `onLongPress` support
- `testID` support
- Finally, get rid of `disableBuiltInState` prop 
- Cool customizable animation options
- Control your own check state with `useBuiltInState` to disable
- Typescript
- Community Supported Stable Version

## Import

```js
import BouncyCheckbox from "react-native-bouncy-checkbox";
```

# Usage

## Basic Usage

```js
<BouncyCheckbox onPress={(isChecked: boolean) => {}} />
```

## Advanced Custom Usage

```tsx
<BouncyCheckbox
  size={25}
  fillColor="red"
  unFillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  innerIconStyle={{ borderWidth: 2 }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {console.log(isChecked)}}
/>
```

## Disable Built-In State

To fully control checkbox state outside with your own state, just set `useBuiltInState` to `false` and send your state value to `isChecked` prop

```tsx

const [localChecked, setLocalChecked] = React.useState(false);

 <BouncyCheckbox
   isChecked={localChecked}
   disableText
   fillColor="green"
   size={50}
   useBuiltInState={false}
   iconImageStyle={styles.iconImageStyle}
   iconStyle={{borderColor: 'green'}}
   onPress={(checked: boolean) => {
         // These two should be same value
         console.log('::Checked::', checked);
         console.log('::LocalChecked::', localChecked);
         setLocalChecked(!localChecked);
   }}
/>
```

### Configuration - Props

| Property             |   Type    |    Default    | Description                                                                                                                                    |
|----------------------| :-------: |:-------------:|------------------------------------------------------------------------------------------------------------------------------------------------|
| **isChecked**        |  **boolean**  | **undefined** | **if you want to control check state yourself, you can use `isChecked` prop now!**                                                             |
| onPress              | function  |     null      | set your own onPress functionality after the bounce effect, callback receives the next `isChecked` boolean if disableBuiltInState is false     |
| onLongPress          | function  |     null      | set your own onLongPress functionality after the bounce effect, callback receives the next `isChecked` boolean if disableBuiltInState is false |
| text                 |  string   |   undefined   | set the checkbox's text                                                                                                                        |
| textComponent        | component |   undefined   | set the checkbox's text by a React Component                                                                                                   |
| disableText          |  boolean  |     false     | if you want to use checkbox without text, you can enable it                                                                                    |
| useBuiltInState          |  boolean  |     false     | to fully control the checkbox itself outside with your own state, just set to `false` and send your state value to `isChecked` prop            |
| size                 |  number   |      25       | size of `width` and `height` of the checkbox                                                                                                   |
| style                |   style   |    default    | set/override the container style                                                                                                               |
| textStyle            |   style   |    default    | set/override the text style                                                                                                                    |
| iconStyle            |   style   |    default    | set/override the outer icon container style                                                                                                    |
| innerIconStyle       |   style   |    default    | set/override the inner icon container style                                                                                                    |
| fillColor            |   color   |    #f09f48    | change the checkbox's filled color                                                                                                             |
| unfillColor          |   color   |  transparent  | change the checkbox's un-filled color when it's not checked                                                                                    |
| iconComponent        | component |     Icon      | set your own icon component                                                                                                                    |
| checkIconImageSource |   image   |    default    | set your own check icon image                                                                                                                  |
| textContainerStyle   | ViewStyle |    default    | set/override the text container style                                                                                                          |
| ImageComponent       | component |     Image     | set your own Image component instead of RN's default Image                                                                                     |
| TouchableComponent   | Component |   Pressable   | set/override the main TouchableOpacity component with any Touchable Component like Pressable                                                   |

### Animation Configurations

| Property          |  Type  | Default | Description                               |
| ----------------- | :----: | :-----: | ----------------------------------------- |
| bounceEffectIn    | number |   0.9   | change the bounce effect when press in    |
| bounceEffectOut   | number |    1    | change the bounce effect when press out   |
| bounceVelocityIn  | number |   0.1   | change the bounce velocity when press in  |
| bounceVelocityOut | number |   0.4   | change the bounce velocity when press out |
| bouncinessIn      | number |   20    | change the bounciness when press in       |
| bouncinessOut     | number |   20    | change the bounciness when press out      |

## Synthetic Press Functionality with Manual Controlling State

<div>
    <img alt="React Native Bouncy Checkbox"
      src="assets/Screenshots/react-native-bouncy-checkbox-syntetic-onpress.gif" height="650" />
</div>

Please check the `example` runnable project to how to make it work on a real project.

- </b></i> The `onPress` callback **WILL RECEIVE** the next `isChecked` when using `ref` is used.
- <b><i>You MUST set the `isChecked` prop to use your own check state manually.

Here is the basic implementation:

```tsx
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import BouncyCheckbox from "./lib/BouncyCheckbox";
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
      <View style={styles.checkboxesContainer}>
        <Text style={styles.titleSynthetic}>Synthetic Checkbox</Text>
        <Text style={styles.checkboxSyntheticSubtitle}>
          Control Checkbox with Another Button
        </Text>
        <View style={styles.checkboxSyntheticContainer}>
          <BouncyCheckbox
                  ref={bouncyCheckboxRef}
                  disableText
                  fillColor="#9342f5"
                  size={50}
                  iconImageStyle={styles.iconImageStyle}
                  iconStyle={{borderColor: '#9342f5'}}
                  onPress={isChecked => {
                    Alert.alert(`Checked:: ${isChecked}`);
                  }}
          />
          <RNBounceable
                  style={styles.syntheticButton}
                  onPress={() => {
                    if (bouncyCheckboxRef.current) {
                      bouncyCheckboxRef.current.onCheckboxPress();
                    }
                  }}>
            <Text style={{color: '#fff', fontWeight: '600'}}>
              Change Checkbox
            </Text>
          </RNBounceable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default App;
```


Another example with `isChecked` prop:

```tsx
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
````

## [React Native Bouncy Checkbox Group](https://github.com/WrathChaos/react-native-bouncy-checkbox-group)

<img alt="React Native Bouncy Checkbox"
        src="https://github.com/WrathChaos/react-native-bouncy-checkbox-group/blob/master/assets/Screenshots/react-native-bouncy-checkbox-group.png.gif" height="550" />


We have also this library's checkbox group library as well 🍻 Please take a look 😍

## FAQ

<b>How to disable strikethrough?</b>

- Simply use the `textStyle` prop and set the `textDecorationLine` to `none`

```tsx
textStyle={{
  textDecorationLine: "none",
}}
```

<b>How to make square checkbox?</b>

- Simply use the `iconStyle` prop and set the `borderRadius` to `0`

```tsx
innerIconStyle={{
  borderRadius: 0, // to make it a little round increase the value accordingly
}}
```

<b>How to use multiple checkbox and control all of them with one checkbox?</b>

- You can use `isChecked` prop to control all of them one by one and with simple handling function to make them all checked or not

```tsx
  const data = [
    {
      id: 0,
      isChecked: false,
    },
    {
      id: 1,
      isChecked: false,
    },
    {
      id: 2,
      isChecked: false,
    },
  ]

  const [checkBoxes, setCheckBoxes] = useState(data);


  const handleCheckboxPress = (checked: boolean, id: number) => {
    if (id === 0) {
      setCheckBoxes(
        checkBoxes.map(item => ({
          ...item,
          isChecked: checked,
        })),
      );
      return;
    }

    setCheckBoxes(
      checkBoxes.map(item =>
        item.id === id ? {...item, isChecked: checked} : item,
      ),
    );
  };
```

Please check out the example for this:
https://github.com/WrathChaos/react-native-bouncy-checkbox-check-all-with-one-checkbox

### Future Plans

- [x] ~~LICENSE~~
- [x] ~~Typescript Challange!~~
- [x] ~~Version 2.0.0 is alive 🥳~~
- [x] ~~Synthetic Press Functionality~~
- [x] ~~Disable built-in check state~~
- [x] ~~React Native Bouncy Checkbox Group Library Extension~~
- [x] ~~New Animation and More Customizable Animation~~
- [x] ~~Version 3.0.0 is alive 🚀~~
- [x] ~~Better Documentation~~
- [x] ~~Version 4.0.0 is alive 🚀~~
- [x] ~~Get rid of `disableBuiltInState` prop~~
- [ ] Write an article about the lib on Medium

## Credits

Photo by <a href="https://unsplash.com/@fakurian?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Milad Fakurian</a> on <a href="https://unsplash.com/photos/blue-orange-and-yellow-wallpaper-E8Ufcyxz514?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>


## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bouncy Checkbox is available under the MIT license. See the LICENSE file for more info.
