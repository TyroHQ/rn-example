import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const RectangularButtonContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class RectangularButton extends React.Component<{}> {
  static defaultProps: RectangularButton["props"];
  render() {
    return (
      <Placeholder orientation="row">
        <Placeholder>Next button</Placeholder>
        <Placeholder>Enter button</Placeholder>
      </Placeholder>
    );
  }
}
