import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const DropDownMenuContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class DropDownMenu extends React.Component<{}> {
  static defaultProps: DropDownMenu["props"];
  render() {
    return (
      <Placeholder>
        Drop down menu
        <Placeholder>selected text option</Placeholder>
        <Placeholder>Angle down icon</Placeholder>
        <Placeholder>
          Unselected list options
          <Placeholder>Option 1</Placeholder>
          <Placeholder>Option 2</Placeholder>
          <Placeholder>Option 3</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
