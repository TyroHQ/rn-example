import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const PlaceholderContainer = styled.View<{ orientation: "row" | "column" }>`
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: ${props => props.orientation};
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export class Placeholder extends React.Component<{
  children?: React.ReactNode;
  orientation?: "row" | "column";
}> {
  static defaultProps: Placeholder["props"] = {
    orientation: "row"
  };

  render() {
    return (
      <PlaceholderContainer orientation={this.props.orientation}>
        {typeof this.props.children === "string" ? (
          <Text>{this.props.children}</Text>
        ) : (
          this.props.children
        )}
      </PlaceholderContainer>
    );
  }
}
