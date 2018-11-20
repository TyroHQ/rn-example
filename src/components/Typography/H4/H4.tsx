import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const H4Container = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class H4 extends React.Component<{}> {
  static defaultProps: H4["props"];
  render() {
    return <Text>H4</Text>;
  }
}
