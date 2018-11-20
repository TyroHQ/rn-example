import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const MenuIconContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class MenuIcon extends React.Component<{}> {
  static defaultProps: MenuIcon["props"];
  render() {
    return <Placeholder>MenuIcon</Placeholder>;
  }
}
