import * as React from "react";
import {
  Text,
  View,
  Image,
  Easing,
  Animated,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import styles, { _textStyle, _iconContainer } from "./BouncyCheckbox.style";

export interface ISource {
  source: string | { uri: string };
}

export interface IBouncyCheckboxProps extends TouchableOpacityProps {
  style?: any;
  size?: number;
  text?: string;
  iconStyle?: any;
  textStyle?: any;
  fillColor?: string;
  iconComponent?: any;
  isChecked?: boolean;
  unfillColor?: string;
  disableText?: boolean;
  ImageComponent?: any;
  iconImageStyle?: any;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  checkIconImageSource?: ISource;
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
    this.setState({ checked: this.props.isChecked || false });
  }

  springBounceAnimation = () => {
    const {
      useNativeDriver = true,
      bounceEffect = 1,
      bounceFriction = 3,
    } = this.props;
    const { checked, springValue } = this.state;
    this.setState({ checked: !checked }, () => {
      springValue.setValue(0.7);
      Animated.spring(springValue, {
        toValue: bounceEffect,
        friction: bounceFriction,
        useNativeDriver,
      }).start();
      this.props.onPress && this.props.onPress(this.state.checked);
    });
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
      checkIconImageSource = defaultCheckImage,
    } = this.props;
    return (
      <Animated.View
        style={[
          { transform: [{ scale: springValue }] },
          _iconContainer(size, checked, fillColor, unfillColor),
          iconStyle,
        ]}
      >
        {iconComponent ||
          (checked && (
            <ImageComponent
              source={checkIconImageSource}
              style={[styles.iconImageStyle, iconImageStyle]}
            />
          ))}
      </Animated.View>
    );
  };

  renderCheckboxText = () => {
    const { textStyle, text, disableText = false } = this.props;
    return (
      !disableText && (
        <View style={styles.textContainer}>
          <Text style={[_textStyle(this.state.checked), textStyle]}>
            {text}
          </Text>
        </View>
      )
    );
  };

  render() {
    const { style } = this.props;
    return (
      <TouchableOpacity
        {...this.props}
        style={[styles.container, style]}
        onPress={this.springBounceAnimation.bind(this, Easing.bounce)}
      >
        {this.renderCheckIcon()}
        {this.renderCheckboxText()}
      </TouchableOpacity>
    );
  }
}

export default BouncyCheckbox;
