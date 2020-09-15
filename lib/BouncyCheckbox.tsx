import * as React from "react";
import {
  Animated,
  Easing,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import styles, {
  _textStyle,
  _iconContainer,
  _iconImageStyle,
} from "./BouncyCheckbox.style";

export interface IBouncyCheckboxProps {
  size: number;
  text: string;
  color: string;
  iconStyle: any;
  textStyle: any;
  iconName: string;
  iconSize: number;
  iconType: string;
  fillColor: string;
  fontSize: number;
  iconColor: string;
  fontFamily: string;
  iconComponent: any;
  isChecked: boolean;
  unfillColor: string;
  borderColor: string;
  borderWidth: number;
  borderRadius: number;
  ImageComponent: any;
  checkImageSource: any;
  textDecoration: string;
  checkImageWidth: number;
  checkImageHeight: number;
  useNativeDriver: boolean;
  onPress: (isChecked: boolean) => void;
}

interface IState {
  checked: boolean;
  springValue: Animated.Value;
}

const defaultCheckImage = require("./check.png");

class BouncyCheckbox extends React.Component<IBouncyCheckboxProps, IState> {
  constructor(props: IBouncyCheckboxProps) {
    super(props);
    this.state = {
      checked: false,
      springValue: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.setState({ checked: this.props.isChecked });
  }

  spring = () => {
    const { useNativeDriver = true } = this.props;
    const { checked, springValue } = this.state;
    this.setState({ checked: !checked }, () => {
      springValue.setValue(0.7);
      Animated.spring(springValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver,
      }).start();
      // ? Outside of the onPress function
      const { onPress } = this.props;
      if (onPress) {
        onPress(this.state.checked);
      }
    });
  };

  renderCheckIcon = () => {
    const { checked, springValue } = this.state;
    const {
      size = 25,
      iconStyle,
      iconComponent,
      borderWidth = 1,
      borderRadius = 20,
      checkImageWidth = 10,
      checkImageHeight = 10,
      fillColor = "#ffc484",
      ImageComponent = Image,
      borderColor = "#ffc484",
      unfillColor = "transparent",
      checkImageSource = defaultCheckImage,
    } = this.props;
    return (
      <Animated.View
        style={[
          { transform: [{ scale: springValue }] },
          _iconContainer(
            size,
            borderWidth,
            borderRadius,
            borderColor,
            checked,
            fillColor,
            unfillColor,
          ),
          iconStyle,
        ]}
      >
        {iconComponent || (
          <ImageComponent
            source={checkImageSource}
            style={_iconImageStyle(checkImageWidth, checkImageHeight)}
          />
        )}
      </Animated.View>
    );
  };

  render() {
    const {
      textStyle,
      fontFamily,
      fontSize = 16,
      textDecoration,
      color = "#757575",
      text = "Call my mom 😇",
    } = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.spring.bind(this, Easing.bounce)}
      >
        {this.renderCheckIcon()}
        <View style={styles.textContainer}>
          <Text
            style={[
              _textStyle(
                this.state.checked,
                color,
                fontFamily,
                fontSize,
                textDecoration,
              ),
              textStyle,
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default BouncyCheckbox;
