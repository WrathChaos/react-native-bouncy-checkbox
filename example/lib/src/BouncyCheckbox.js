import React, { Component } from "react";
import PropTypes from "prop-types";
import { Animated, Easing, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

class BouncyCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      springValue: new Animated.Value(1)
    };
  }

  setChecked = () => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };

  spring = () => {
    this.setChecked();
    const { springValue } = this.state;
    springValue.setValue(0.7);
    Animated.spring(springValue, {
      toValue: 1,
      friction: 3
    }).start();
  };

  renderCheckIcon = () => {
    const { checked, springValue } = this.state;
    return (
      <Animated.View
        style={[
          {
            width: 35,
            height: 35,
            borderWidth: 1,
            borderRadius: 35,
            borderColor: "orange",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: checked ? "orange" : "transparent"
          },
          { transform: [{ scale: springValue }] }
        ]}
      >
        <Icon name="check" type="Entypo" size={20} color="white" />
      </Animated.View>
    );
  };

  render() {
    const { text, onPress } = this.props;

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
              color: "#757575",
              fontSize: 18,
              fontFamily: "JosefinSans-Regular"
            }}
          >
            Call my mom
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

BouncyCheckbox.propTypes = {
  example: PropTypes.number
};

BouncyCheckbox.defaultProps = {
  example: 5
};

export default BouncyCheckbox;
