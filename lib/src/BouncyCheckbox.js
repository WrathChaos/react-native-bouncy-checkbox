import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Animated, Easing, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Icon from 'react-native-dynamic-vector-icons'

class BouncyCheckbox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      springValue: new Animated.Value(1)
    }
  }

  componentDidMount() {
    this.setState({ checked: this.props.isChecked })
  }

  spring = () => {
    const { useNativeDriver } = this.props
    const { checked, springValue } = this.state
    this.setState({ checked: !checked }, () => {
      springValue.setValue(0.7)
      Animated.spring(springValue, {
        toValue: 1,
        friction: 3,
        useNativeDriver
      }).start()
      // Outside of the onPress function
      const { onPress } = this.props
      if (onPress) {
        onPress(this.state.checked)
      }
    })
  }

  renderCheckIcon = () => {
    const { checked, springValue } = this.state
    const {
      size,
      fillColor,
      unfillColor,
      borderWidth,
      borderRadius,
      borderColor,
      iconName,
      iconSize,
      iconType,
      iconColor,
      iconStyle,
      iconComponent
    } = this.props
    return (
        <Animated.View
            style={[
              { transform: [{ scale: springValue }] },
              {
                width: size,
                height: size,
                borderWidth,
                borderRadius,
                alignItems: 'center',
                justifyContent: 'center',
                borderColor,
                backgroundColor: checked ? fillColor : unfillColor
              },
              iconStyle
            ]}
        >
          {iconComponent || <Icon size={iconSize} name={iconName} type={iconType} color={iconColor} />}
        </Animated.View>
    )
  }

  render() {
    const { checked } = this.state
    const { text, fontSize, color, textStyle, fontFamily, textDecoration } = this.props
    return (
        <TouchableOpacity style={styles.container} onPress={this.spring.bind(this, Easing.bounce)}>
          {this.renderCheckIcon()}
          <View style={styles.textContainer}>
            <Text
                style={[
                  {
                    fontSize,
                    fontFamily,
                    color,
                    textDecorationLine: !textDecoration && checked ? 'line-through' : 'none'
                  },
                  textStyle
                ]}
            >
              {text}
            </Text>
          </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 8,
    alignItems: 'center',
    flexDirection: 'row'
  },
  textContainer: { marginLeft: 16 }
})

BouncyCheckbox.propTypes = {
  borderWidth: PropTypes.number,
  borderRadius: PropTypes.number,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number,
  unfillColor: PropTypes.string,
  useNativeDriver: PropTypes.bool,
  text: PropTypes.string,
  fillColor: PropTypes.string,
  fontFamily: PropTypes.string,
  textStyle: PropTypes.object,
  textDecoration: PropTypes.bool,
  isChecked: PropTypes.bool,
  onPress: PropTypes.func,
  fontSize: PropTypes.number,
  iconName: PropTypes.string,
  iconType: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  iconStyle: PropTypes.object,
  iconComponent: PropTypes.element
}

BouncyCheckbox.defaultProps = {
  size: 25,
  borderWidth: 1,
  borderRadius: 20,
  borderColor: '#ffc484',
  fontSize: 16,
  iconSize: 15,
  isChecked: false,
  iconName: 'check',
  iconType: 'Entypo',
  color: '#757575',
  fillColor: '#ffc484',
  iconColor: '#fdfdfd',
  useNativeDriver: true,
  text: 'Call my mom 😇',
  unfillColor: 'transparent',
  textDecoration: false
}

export default BouncyCheckbox
