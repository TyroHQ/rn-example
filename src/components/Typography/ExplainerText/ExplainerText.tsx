import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const ExplainerTextContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class ExplainerText extends React.Component<{}> {
  static defaultProps: ExplainerText["props"];
  render() {
    return <ExplainerTextContainer>ExplainerText</ExplainerTextContainer>;
  }
}
