import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const PageHeaderContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class PageHeader extends React.Component<{}> {
  static defaultProps: PageHeader["props"];
  render() {
    return (
      <Placeholder>
        PageHeader Component
        <Placeholder>Back icon</Placeholder>
        <Placeholder>Header text</Placeholder>
      </Placeholder>
    );
  }
}
