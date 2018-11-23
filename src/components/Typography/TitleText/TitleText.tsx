import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const TitleTextContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class TitleText extends React.Component<{}> {
  static defaultProps: TitleText["props"];
  render() {
    return <TitleTextContainer>Title text</TitleTextContainer>;
  }
}
