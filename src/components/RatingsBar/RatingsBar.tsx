import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const RatingsBarContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class RatingsBar extends React.Component<{}> {
  static defaultProps: RatingsBar["props"];
  render() {
    return (
      <Placeholder>
        Ratings bar
        <Placeholder>Explainer text - 5 stars</Placeholder>
        <Placeholder>Rectangle 2.4 background</Placeholder>
        <Placeholder>Rectangle 2.5 fill</Placeholder>
        <Placeholder>Explainer text - 5 people</Placeholder>
      </Placeholder>
    );
  }
}
