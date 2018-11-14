import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const H6Container = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class H6 extends React.Component<{}> {
  static defaultProps: H6["props"];
  render() {
    return <Text>H6</Text>;
  }
}
