import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const H5Container = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class H5 extends React.Component<{}> {
  static defaultProps: H5["props"];
  render() {
    return <Text>H5</Text>;
  }
}
