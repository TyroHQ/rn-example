import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const HeaderTextContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class HeaderText extends React.Component<{}> {
  static defaultProps: HeaderText["props"];
  render() {
    return <Text>Header text</Text>;
  }
}
