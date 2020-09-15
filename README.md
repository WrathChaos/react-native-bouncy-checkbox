<img alt="React Native Bouncy Checkbox" src="assets/logo.png" width="1050"/>

[![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox)

[![Fully customizable animated bouncy checkbox for React Native](https://img.shields.io/badge/-Fully%20customizable%20animated%20bouncy%20checkbox%20for%20React%20Native-lightgrey?style=for-the-badge)](https://github.com/WrathChaos/react-native-bouncy-checkbox)

[![npm version](https://img.shields.io/npm/v/react-native-bouncy-checkbox.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox)
[![npm](https://img.shields.io/npm/dt/react-native-bouncy-checkbox.svg?style=for-the-badge)](https://www.npmjs.com/package/react-native-bouncy-checkbox)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Bouncy Checkbox"
        src="assets/Screenshots/example.gif" width="49%" height="715"/>
  <img alt="React Native Bouncy Checkbox"
        src="assets/Screenshots/example.png" width="49%" />
</p>

## Installation

Add the dependency:

### React Native:

```ruby
npm i react-native-bouncy-checkbox
```

## Version 1.0.0 is Here 🥳

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
<BouncyCheckbox />
```

## Basic Usage

```jsx
<BouncyCheckbox
  isChecked
  textColor="#000"
  fillColor="red"
  text="Buy tickets for concert 🎉 🎊"
  onPress={(checked) => console.log("Checked: ", checked)}
/>
```

## Advanced Custom Usage

```jsx
<BouncyCheckbox
  isChecked={false}
  textColor="#000"
  unfillColor="white"
  text="Custom Icon Example"
  fontFamily="JosefinSans-Regular"
  onPress={(checked) => console.log("Checked: ", checked)}
  iconComponent={
    <FastImage
      style={{ height: 10, width: 10 }}
      source={require("./assets/checkmark.png")}
    />
  }
/>
```

### Configuration - Props

| Property         |   Type    |    Default     | Description                                                 |
| ---------------- | :-------: | :------------: | ----------------------------------------------------------- |
| borderWidth      |  number   |       1        | border width of the checkbox                                |
| borderRadius     |  number   |       20       | border radius of the checkbox                               |
| borderColor      |  string   |    #ffc484     | border color of the checkbox                                |
| color            |  string   |    #757575     | color of the text                                           |
| size             |  number   |       25       | size of `width` and `height` of the checkbox                |
| isChecked        |  boolean  |     false      | set the default checkbox value                              |
| unfillColor      |   color   |  transparent   | change the checkbox's un-filled color when it's not checked |
| useNativeDriver  |  boolean  |      true      | enable/disable the useNativeDriver for animation            |
| text             |  string   | Call my mom 😇 | set the checkbox's text                                     |
| textColor        |   color   |    #757575     | change the text's color                                     |
| fontFamily       |  string   |    default     | set your own font family                                    |
| fontSize         |  number   |       16       | change the text's font size                                 |
| fillColor        |   color   |    #f09f48     | change the checkbox's filled color                          |
| textStyle        |  object   |    default     | set your own text style                                     |
| textDecoration   |  boolean  |     false      | enable/disable text decoration for Text                     |
| onPress          | function  |      null      | set your own onPress functionality after the bounce effect  |
| iconComponent    | component |      Icon      | set your own icon component                                 |
| iconStyle        |  object   |    default     | set your own icon style                                     |
| checkImageSource |   image   |    default     | set your own check icon image                               |
| checkImageWidth  |  number   |       10       | change the check icon's width                               |
| checkImageHeight |  number   |       10       | change the check icon's height                              |
| ImageComponent   | component |     Image      | set your own Image component instead of RN's default Image  |
| disableText      |  boolean  |     false      | if you want to use checkbox without text, you can enable it |

### Future Plans

- [x] ~~LICENSE~~
- [x] ~~Typescript Challange!~~
- [ ] Write an article about the lib on Medium

## Author

FreakyCoder, kurayogun@gmail.com

## License

React Native Bouncy Checkbox is available under the MIT license. See the LICENSE file for more info.
