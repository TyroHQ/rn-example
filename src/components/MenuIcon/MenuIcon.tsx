import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const MenuIconContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class MenuIcon extends React.Component<{}> {
  static defaultProps: MenuIcon["props"];
  render() {
    return (
      <Placeholder>
        <Placeholder>MenuIcon</Placeholder>
      </Placeholder>
    );
  }
}
