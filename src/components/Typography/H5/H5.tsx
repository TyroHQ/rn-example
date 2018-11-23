import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const H5Container = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class H5 extends React.Component<{}> {
  static defaultProps: H5["props"];
  render() {
    return <H5Container>H5</H5Container>;
  }
}
