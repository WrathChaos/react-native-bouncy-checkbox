import * as React from "react";
import {
  Text,
  View,
  Image,
  Animated,
  StyleProp,
  ViewStyle,
  TextStyle,
  Pressable,
  ImageSourcePropType,
  TouchableWithoutFeedbackProps,
} from "react-native";
import styles, { _textStyle } from "./BouncyCheckbox.style";

type CustomStyleProp = StyleProp<ViewStyle> | Array<StyleProp<ViewStyle>>;
type CustomTextStyleProp = StyleProp<TextStyle> | Array<StyleProp<TextStyle>>;
type BaseTouchableProps = Pick<
  TouchableWithoutFeedbackProps,
  Exclude<keyof TouchableWithoutFeedbackProps, "onPress">
>;

export interface IBouncyCheckboxProps extends BaseTouchableProps {
  size?: number;
  text?: string;
  fillColor?: string;
  isChecked?: boolean;
  unfillColor?: string;
  disableText?: boolean;
  bounceEffect?: number;
  bounceFriction?: number;
  useNativeDriver?: boolean;
  disableBuiltInState?: boolean;
  ImageComponent?: any;
  TouchableComponent?: any;
  bounceEffectIn?: number;
  bounceEffectOut?: number;
  bounceVelocityIn?: number;
  bounceVelocityOut?: number;
  bouncinessIn?: number;
  bouncinessOut?: number;
  iconComponent?: React.ReactNode;
  textComponent?: React.ReactNode;
  iconStyle?: CustomStyleProp;
  innerIconStyle?: CustomStyleProp;
  style?: CustomStyleProp;
  textStyle?: CustomTextStyleProp;
  iconImageStyle?: CustomStyleProp;
  textContainerStyle?: CustomStyleProp;
  checkIconImageSource?: ImageSourcePropType;
  onPress?: (checked: boolean) => void;
}

interface IState {
  checked: boolean;
  springValue: Animated.Value;
  bounceValue: Animated.Value;
}

const defaultCheckImage = require("./check.png");

class BouncyCheckbox extends React.Component<IBouncyCheckboxProps, IState> {
  constructor(props: IBouncyCheckboxProps) {
    super(props);
    this.state = {
      checked: false,
      springValue: new Animated.Value(1),
      bounceValue: new Animated.Value(1),
    };
  }

  componentDidMount() {
    this.setState({ checked: this.props.isChecked || false });
  }

  getCheckState() {
    const { disableBuiltInState, isChecked } = this.props;
    const { checked } = this.state;
    if (disableBuiltInState) {
      if (isChecked === undefined || isChecked === null) {
        throw new Error(
          "BouncyCheckbox: Disabling built-in check state requires passing your own isChecked prop.",
        );
      }

      return isChecked;
    }

    return checked;
  }

  bounceEffect = (value: number, velocity: number, bounciness: number) => {
    const { useNativeDriver = true } = this.props;
    Animated.spring(this.state.bounceValue, {
      toValue: value,
      velocity,
      bounciness,
      useNativeDriver,
    }).start();
  };

  renderCheckIcon = () => {
    const {
      size = 25,
      iconStyle,
      iconComponent,
      iconImageStyle,
      fillColor = "#ffc484",
      ImageComponent = Image,
      unfillColor = "transparent",
      innerIconStyle,
      checkIconImageSource = defaultCheckImage,
    } = this.props;

    const checkState = this.getCheckState();
    return (
      <Animated.View
        style={[
          { transform: [{ scale: this.state.bounceValue }] },
          styles.iconContainer(size, checkState, fillColor, unfillColor),
          iconStyle,
        ]}
      >
        <View
          style={[styles.innerIconContainer(size, fillColor), innerIconStyle]}
        >
          {iconComponent ||
            (checkState && (
              <ImageComponent
                source={checkIconImageSource}
                style={[styles.iconImageStyle, iconImageStyle]}
              />
            ))}
        </View>
      </Animated.View>
    );
  };

  renderCheckboxText = () => {
    const {
      text,
      textComponent,
      textStyle,
      textContainerStyle,
      disableText = false,
    } = this.props;
    const checkDisableTextType = typeof disableText === "undefined";
    const checkState = this.getCheckState();
    return (
      (!disableText || checkDisableTextType) &&
      (textComponent || (
        <View style={[styles.textContainer, textContainerStyle]}>
          <Text style={[_textStyle(checkState), textStyle]}>{text}</Text>
        </View>
      ))
    );
  };

  handleCheck = () => {
    const { disableBuiltInState = false } = this.props;
    const { checked } = this.state;
    if (!disableBuiltInState) {
      this.setState({ checked: !checked }, () => {
        this.props.onPress && this.props.onPress(this.state.checked);
      });
    } else {
      this.props.onPress && this.props.onPress(this.state.checked);
    }
  };

  render() {
    const {
      style,
      bounceEffectIn = 0.9,
      bounceEffectOut = 1,
      bounceVelocityIn = 0.1,
      bounceVelocityOut = 0.4,
      bouncinessIn = 20,
      bouncinessOut = 20,
      text,
      disabled,
      TouchableComponent = Pressable,
    } = this.props;
    const checked = this.getCheckState();
    return (
      <TouchableComponent
        accessibilityLabel={text}
        accessibilityRole="checkbox"
        accessibilityState={{ checked, disabled }}
        accessibilityLiveRegion="polite"
        {...this.props}
        style={[styles.container, style]}
        onPressIn={() => {
          this.bounceEffect(bounceEffectIn, bounceVelocityIn, bouncinessIn);
        }}
        onPressOut={() => {
          this.bounceEffect(bounceEffectOut, bounceVelocityOut, bouncinessOut);
        }}
        onPress={this.handleCheck}
      >
        {this.renderCheckIcon()}
        {this.renderCheckboxText()}
      </TouchableComponent>
    );
  }
}

export default BouncyCheckbox;
