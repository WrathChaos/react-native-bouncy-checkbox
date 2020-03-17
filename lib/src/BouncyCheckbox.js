import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles, { iconContainer, textStyle } from "./BouncyCheckbox.style";

class BouncyCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      springValue: new Animated.Value(1)
    };
  }

  componentDidMount() {
    this.setState({ checked: this.props.isChecked });
  }

  spring = () => {
    const { checked, springValue } = this.state;
    this.setState({ checked: !checked }, () => {
      springValue.setValue(0.7);
      Animated.spring(springValue, {
        toValue: 1,
        friction: 3
      }).start();
      // Outside of the onPress function
      const { onPress } = this.props;
      if (onPress) onPress(this.state.checked);
    });
  };

  renderCheckIcon = () => {
    const { checked, springValue } = this.state;
    const {
      checkboxSize,
      borderColor,
      fillColor,
      borderRadius,
      unfillColor,
      iconComponent,
      iconName,
      iconSize,
      iconType,
      iconColor
    } = this.props;
    return (
      <Animated.View
        style={[
          iconContainer(
            checkboxSize,
            checked,
            borderRadius,
            borderColor,
            fillColor,
            unfillColor
          ),
          { transform: [{ scale: springValue }] }
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
      textColor,
      fontFamily,
      fontSize,
      disableTextDecoration
    } = this.props;

    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.spring.bind(this, Easing.bounce)}
      >
        {this.renderCheckIcon()}
        <View style={styles.textContainer}>
          <Text
            style={textStyle(
              this.state.checked,
              textColor,
              fontFamily,
              fontSize,
              disableTextDecoration
            )}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

BouncyCheckbox.propTypes = {
  text: PropTypes.string,
  textColor: PropTypes.string,
  fontFamily: PropTypes.string,
  borderRadius: PropTypes.number,
  fontSize: PropTypes.number,
  isChecked: PropTypes.bool,
  checkboxSize: PropTypes.number,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  unfillColor: PropTypes.string,
  iconName: PropTypes.string,
  iconSize: PropTypes.number,
  iconType: PropTypes.string,
  iconColor: PropTypes.string,
  disableTextDecoration: PropTypes.bool
};

BouncyCheckbox.defaultProps = {
  fontSize: 16,
  iconSize: 15,
  checkboxSize: 25,
  isChecked: false,
  iconName: "check",
  iconType: "Entypo",
  textColor: "#757575",
  borderRadius: 25 / 2,
  fillColor: "#ffc484",
  iconColor: "#fdfdfd",
  text: "Call my mom 😇",
  borderColor: "#ffc484",
  unfillColor: "transparent",
  disableTextDecoration: false
};

export default BouncyCheckbox;
