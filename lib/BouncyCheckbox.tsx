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
  ImageSourcePropType,
  TouchableWithoutFeedbackProps,
} from "react-native";
import styles, { _textStyle, _iconContainer } from "./BouncyCheckbox.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type BaseTouchableProps = Pick<
  TouchableWithoutFeedbackProps,
  Exclude<keyof TouchableWithoutFeedbackProps, "onPress">
>;

export interface IBouncyCheckboxProps extends BaseTouchableProps {
  size?: number;
  text?: string;
  iconStyle?: any;
  fillColor?: string;
  isChecked?: boolean;
  unfillColor?: string;
  disableText?: boolean;
  ImageComponent?: any;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  disableBuiltInState?: boolean;
  TouchableComponent?: any;
  iconComponent?: React.ReactNode;
  textComponent?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  textStyle?: CustomTextStyleProp;
  iconImageStyle?: CustomStyleProp;
  textContainerStyle?: CustomStyleProp;
  checkIconImageSource?: ImageSourcePropType;
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
      textComponent,
      isChecked,
      textStyle,
      textContainerStyle,
      disableBuiltInState,
      disableText = false,
    } = this.props;
    const { checked } = this.state;
    return (
      !disableText &&
      (textComponent || (
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
      ))
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
