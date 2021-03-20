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

### React Native

```ruby
npm i react-native-bouncy-checkbox
```

## Version 2.0.0 is Here 🥳

- Typescript
- **Zero Dependency**
- More Customization Options

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

```jsx
<BouncyCheckbox
  size={25}
  fillColor="red"
  unfillColor="#FFFFFF"
  text="Custom Checkbox"
  iconStyle={{ borderColor: "red" }}
  textStyle={{ fontFamily: "JosefinSans-Regular" }}
  onPress={(isChecked: boolean) => {}}
/>
```

### Configuration - Props

| Property             |   Type    |    Default     | Description                                                 |
| -------------------- | :-------: | :------------: | ----------------------------------------------------------- |
| text                 |  string   | Call my mom 😇 | set the checkbox's text                                     |
| onPress              | function  |      null      | set your own onPress functionality after the bounce effect  |
| disableText          |  boolean  |     false      | if you want to use checkbox without text, you can enable it |
| size                 |  number   |       25       | size of `width` and `height` of the checkbox                |
| style                |   style   |    default     | set/override the container style                            |
| textStyle            |   style   |    default     | set/override the text style                                 |
| iconStyle            |   style   |    default     | set/override the icon style                                 |
| isChecked            |  boolean  |     false      | set the default checkbox value                              |
| fillColor            |   color   |    #f09f48     | change the checkbox's filled color                          |
| unfillColor          |   color   |  transparent   | change the checkbox's un-filled color when it's not checked |
| useNativeDriver      |  boolean  |      true      | enable/disable the useNativeDriver for animation            |
| iconComponent        | component |      Icon      | set your own icon component                                 |
| checkIconImageSource |   image   |    default     | set your own check icon image                               |
| ImageComponent       | component |     Image      | set your own Image component instead of RN's default Image  |
| bounceEffect         |  number   |       1        | change the bounce effect                                    |
| bounceFriction       |  number   |       3        | change the bounce friction                                  |

### Future Plans

- [x] ~~LICENSE~~
- [x] ~~Typescript Challange!~~
- [x] ~~Version 2.0.0 is alive 🥳~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bouncy Checkbox is available under the MIT license. See the LICENSE file for more info.
