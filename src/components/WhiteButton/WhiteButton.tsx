import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const WhiteButtonContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class WhiteButton extends React.Component<{}> {
  static defaultProps: WhiteButton["props"];
  render() {
    return <Placeholder>White button</Placeholder>;
  }
}
