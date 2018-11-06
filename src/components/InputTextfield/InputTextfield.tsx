import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const InputTextfieldContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class InputTextfield extends React.Component<{}> {
  static defaultProps: InputTextfield["props"];
  render() {
    return <Placeholder>Input textfield</Placeholder>;
  }
}
