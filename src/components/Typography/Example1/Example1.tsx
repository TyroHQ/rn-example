import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const Example1Container = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class Example1 extends React.Component<{}> {
  static defaultProps: Example1["props"];
  render() {
    return;
    <Text>Example1</Text>;
  }
}
