import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const TitleTextContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class TitleText extends React.Component<{}> {
  static defaultProps: TitleText["props"];
  render() {
    return <Text>Title text</Text>;
  }
}
