import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const PointStatusBoxContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class PointStatusBox extends React.Component<{}> {
  static defaultProps: PointStatusBox["props"];
  render() {
    return (
      <Placeholder>
        Point Status
        <Placeholder>Input placeholder</Placeholder>
        <Placeholder>Header text</Placeholder>
      </Placeholder>
    );
  }
}
