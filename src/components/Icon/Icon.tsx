import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const IconContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class Icon extends React.Component<{}> {
  static defaultProps: Icon["props"];
  render() {
    return (
      <IconContainer>
        <Text>Icon</Text>
      </IconContainer>
    );
  }
}
