import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const InputPlaceholderContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class InputPlaceholder extends React.Component<{}> {
  static defaultProps: InputPlaceholder["props"];
  render() {
    return <Text>InputPlaceholder</Text>;
  }
}
