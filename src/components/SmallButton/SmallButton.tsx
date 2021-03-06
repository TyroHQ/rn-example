import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const SmallButtonContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class SmallButton extends React.Component<{}> {
  static defaultProps: SmallButton["props"];
  render() {
    return <Placeholder>SmallSquareButton</Placeholder>;
  }
}
