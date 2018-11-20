import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "@src/components/Placeholder";

const WelcomePageContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class WelcomePage extends React.Component<{}> {
  static defaultProps: WelcomePage["props"];
  render() {
    return (
      <Placeholder>
        <Placeholder>Header bar</Placeholder>
        <Placeholder>
          Content Area - Vector component
          <Placeholder>Title text</Placeholder>
          <Placeholder>Header text</Placeholder>
        </Placeholder>
        <Placeholder>Rectangular button</Placeholder>
      </Placeholder>
    );
  }
}
