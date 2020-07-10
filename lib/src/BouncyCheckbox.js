import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, { _iconContainer, _textStyle } from "./BouncyCheckbox.style";

class BouncyCheckbox extends Component {
  constructor(props) {
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
    const { useNativeDriver } = this.props;
    const { checked, springValue } = this.state;
    this.setState({ checked: !checked }, () => {
      springValue.setValue(0.7);
      Animated.spring(springValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver,
      }).start();
      // Outside of the onPress function
      const { onPress } = this.props;
      if (onPress) onPress(this.state.checked);
    });
  };

  renderCheckIcon = () => {
    const { checked, springValue } = this.state;
    const {
      iconName,
      iconSize,
      iconType,
      iconColor,
      fillColor,
      iconStyle,
      unfillColor,
      iconComponent,
    } = this.props;
    return (
      <Animated.View
        style={[ { transform: [{ scale: springValue }] },
          _iconContainer(checked, fillColor, unfillColor),  iconStyle,
        ]}
      >
        {iconComponent || (
          <Icon
            size={iconSize}
            name={iconName}
            type={iconType}
            color={iconColor}
          />
        )}
      </Animated.View>
    );
  };

  render() {
    const {
      text,
      fontSize,
      textColor,
      textStyle,
      fontFamily,
      disableTextDecoration,
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.spring.bind(this, Easing.bounce)}
      >
        {this.renderCheckIcon()}
        <View style={styles.textContainer}>
          <Text
            style={[_textStyle(
                this.state.checked,
                textColor,
                fontFamily,
                fontSize,
                disableTextDecoration
              ), textStyle ]}>
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

BouncyCheckbox.propTypes = {
  text: PropTypes.string,
  isChecked: PropTypes.bool,
  fontSize: PropTypes.number,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
  fillColor: PropTypes.string,
  fontFamily: PropTypes.string,
  unfillColor: PropTypes.string,
  useNativeDriver: PropTypes.bool,
  disableTextDecoration: PropTypes.bool,
};

BouncyCheckbox.defaultProps = {
  fontSize: 16,
  iconSize: 15,
  isChecked: false,
  iconName: "check",
  iconType: "Entypo",
  textColor: "#757575",
  fillColor: "#ffc484",
  iconColor: "#fdfdfd",
  useNativeDriver: true,
  text: "Call my mom 😇",
  unfillColor: "transparent",
  disableTextDecoration: false,
};

export default BouncyCheckbox;
