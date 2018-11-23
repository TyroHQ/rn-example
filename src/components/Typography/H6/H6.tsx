import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const H6Container = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class H6 extends React.Component<{}> {
  static defaultProps: H6["props"];
  render() {
    return <H6Container>H6</H6Container>;
  }
}
