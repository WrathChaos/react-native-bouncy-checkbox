import * as React from "react";
import {
  Text,
  View,
  Image,
  Easing,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
} from "react-native";
import styles, { _textStyle, _iconContainer } from "./BouncyCheckbox.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;

export interface IBouncyCheckboxProps {
  style?: StyleProp<ViewStyle>;
  size?: number;
  text?: string;
  iconStyle?: any;
  textStyle?: StyleProp<TextStyle>;
  fillColor?: string;
  iconComponent?: React.ReactNode;
  isChecked?: boolean;
  unfillColor?: string;
  disableText?: boolean;
  ImageComponent?: any;
  iconImageStyle?: StyleProp<ViewStyle>;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  disableBuiltInState?: boolean;
  checkIconImageSource?: Image;
  textContainerStyle?: CustomStyleProp;
  TouchableComponent?: any;
  onPress?: (checked: boolean) => void;
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
    this.setState({ checked: this.props.isChecked || false });
  }

  onPress = () => {
    const {
      disableBuiltInState = false,
      useNativeDriver = true,
      bounceEffect = 1,
      bounceFriction = 3,
    } = this.props;
    const { checked, springValue } = this.state;
    if (!disableBuiltInState) {
      this.setState({ checked: !checked }, () => {
        springValue.setValue(0.7);
        Animated.spring(springValue, {
          toValue: bounceEffect,
          friction: bounceFriction,
          useNativeDriver,
        }).start();
        this.props.onPress && this.props.onPress(this.state.checked);
      });
    } else {
      springValue.setValue(0.7);
      Animated.spring(springValue, {
        toValue: bounceEffect,
        friction: bounceFriction,
        useNativeDriver,
      }).start();
      this.props.onPress && this.props.onPress(this.state.checked);
    }
  };

  renderCheckIcon = () => {
    const { checked, springValue } = this.state;
    const {
      size = 25,
      iconStyle,
      iconComponent,
      iconImageStyle,
      fillColor = "#ffc484",
      ImageComponent = Image,
      unfillColor = "transparent",
      disableBuiltInState,
      isChecked,
      checkIconImageSource = defaultCheckImage,
    } = this.props;

    const checkStatus = disableBuiltInState ? isChecked! : checked;
    return (
      <Animated.View
        style={[
          { transform: [{ scale: springValue }] },
          _iconContainer(size, checkStatus, fillColor, unfillColor),
          iconStyle,
        ]}
      >
        {iconComponent ||
          (checkStatus && (
            <ImageComponent
              source={checkIconImageSource}
              style={[styles.iconImageStyle, iconImageStyle]}
            />
          ))}
      </Animated.View>
    );
  };

  renderCheckboxText = () => {
    const {
      text,
      isChecked,
      textStyle,
      textContainerStyle,
      disableBuiltInState,
      disableText = false,
    } = this.props;
    const { checked } = this.state;
    return (
      !disableText && (
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text
            style={[
              _textStyle(disableBuiltInState ? isChecked! : checked),
              textStyle,
            ]}
          >
            {text}
          </Text>
        </View>
      )
    );
  };

  render() {
    const { style, TouchableComponent = TouchableOpacity } = this.props;
    return (
      <TouchableComponent
        {...this.props}
        style={[styles.container, style]}
        onPress={this.onPress.bind(this, Easing.bounce)}
      >
        {this.renderCheckIcon()}
        {this.renderCheckboxText()}
      </TouchableComponent>
    );
  }
}

export default BouncyCheckbox;
