import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const H4Container = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class H4 extends React.Component<{}> {
  static defaultProps: H4["props"];
  render() {
    return <Text>H4</Text>;
  }
}
