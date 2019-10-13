import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import { iconContainer } from "./BouncyCheckbox.style";

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

  setChecked = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  spring = () => {
    this.setChecked();
    const { springValue } = this.state;
    const { onPress } = this.props;
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 3
    }).start();
    // Outside of the onPress function
    if (onPress) onPress();
  };

  renderCheckIcon = () => {
    const { checked, springValue } = this.state;
    const { checkboxSize, borderColor, fillColor, unfillColor } = this.props;
    return (
      <Animated.View
        style={[
          iconContainer(
            checkboxSize,
            checked,
            borderColor,
            fillColor,
            unfillColor
          ),
          { transform: [{ scale: springValue }] }
        ]}
      >
        <Icon
          {...this.props}
          name="check"
          type="Entypo"
          size={15}
          color="white"
        />
      </Animated.View>
    );
  };

  render() {
    const {
      text,
      size,
      isChecked,
      borderColor,
      fillColor,
      unfillColor,
      onPress
    } = this.props;

    return (
      <TouchableOpacity
        style={{
          margin: 8,
          flexDirection: "row",
          alignItems: "center"
        }}
        onPress={this.spring.bind(this, Easing.bounce)}
      >
        {this.renderCheckIcon()}
        <View style={{ marginLeft: 16 }}>
          <Text
            style={{
              fontSize: 16,
              color: "#757575",
              fontFamily: "JosefinSans-Regular",
              textDecorationLine: this.state.checked ? "line-through" : "none"
            }}
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
  isChecked: PropTypes.bool,
  checkboxSize: PropTypes.number,
  borderColor: PropTypes.string,
  fillColor: PropTypes.string,
  unfillColor: PropTypes.string
};

BouncyCheckbox.defaultProps = {
  checkboxSize: 25,
  isChecked: false,
  text: "Call my mom",
  fillColor: "#f09f48",
  borderColor: "#f09f48",
  unfillColor: "transparent"
};

export default BouncyCheckbox;
