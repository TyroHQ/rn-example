import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const RectangularButtonContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class RectangularButton extends React.Component<{}> {
  static defaultProps: RectangularButton["props"];
  render() {
    return <Placeholder>Next button</Placeholder>;
  }
}
