import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const RatingsBarContainer = styled(View)`
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
        <Placeholder>
          Rectangle white
          <Placeholder>Rectangle green</Placeholder>
        </Placeholder>
        <Placeholder>Explainer text - 5 people</Placeholder>
      </Placeholder>
    );
  }
}
