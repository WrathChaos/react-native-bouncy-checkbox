import React from "react";
import PropTypes from "prop-types";
import { Text, View } from "react-native";

const NewComponent = props => {
  const { example } = props;
  return (
    <View>
      <Text>{example}</Text>
    </View>
  );
};

NewComponent.propTypes = {
  example: PropTypes.number
};

NewComponent.defaultProps = {
  example: 5
};

export default NewComponent;
