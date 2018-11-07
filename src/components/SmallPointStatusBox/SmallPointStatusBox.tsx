import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const SmallPointStatusBoxContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class SmallPointStatusBox extends React.Component<{}> {
  static defaultProps: SmallPointStatusBox["props"];
  render() {
    return (
      <Placeholder>
        small point status box
        <Placeholder>Explainer text</Placeholder>
        <Placeholder>Explainer text - 2</Placeholder>
      </Placeholder>
    );
  }
}
