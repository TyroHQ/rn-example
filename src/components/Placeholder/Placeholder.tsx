import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";

const PlaceholderContainer = styled(View)<{ orientation: "row" | "column" }>`
  border: 1px solid grey;
  padding: 10px;
  display: flex;
  flex-direction: ${props => props.orientation};
  align-items: center;
  justify-content: center;
  flex: 1;
`;

function wrapString(c: React.ReactNode, i?: number): React.ReactNode {
  if (typeof c === "string") return <Text key={i}>{c}</Text>;

  if (React.isValidElement(c)) return React.cloneElement(c, { key: i });
  return c;
}

export class Placeholder extends React.Component<{
  children?: React.ReactNode;
  orientation?: "row" | "column";
}> {
  static defaultProps: Placeholder["props"] = {
    orientation: "row"
  };

  render() {
    const children = Array.isArray(this.props.children)
      ? this.props.children.map(wrapString)
      : wrapString(this.props.children);
    return (
      <PlaceholderContainer orientation={this.props.orientation}>
        {children}
      </PlaceholderContainer>
    );
  }
}
