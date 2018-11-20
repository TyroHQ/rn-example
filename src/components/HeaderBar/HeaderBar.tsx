import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const HeaderBarContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class HeaderBar extends React.Component<{}> {
  static defaultProps: HeaderBar["props"];
  render() {
    return (
      <Placeholder orientation="row">
        <Placeholder>Menu icon </Placeholder>
        <Placeholder> Logo </Placeholder>
      </Placeholder>
    );
  }
}
