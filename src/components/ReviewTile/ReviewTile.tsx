import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const ReviewTileContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class ReviewTile extends React.Component<{}> {
  static defaultProps: ReviewTile["props"];
  render() {
    return <ReviewTileContainer>
      <Placeholder>Empty Rating Star
          <Placeholder>Vector</Placeholder>
      </Placeholder>
      <Placeholder>Empty Rating Star
          <Placeholder>Vector</Placeholder>
      </Placeholder>
      <Placeholder>Filled Rating Star
          <Placeholder>Vector</Placeholder>
      </Placeholder>
      <Placeholder>Filled Rating Star
          <Placeholder>Vector</Placeholder>
      </Placeholder>
      <Placeholder>Filled Rating Star
          <Placeholder>Vector</Placeholder>
      </Placeholder>
      <Placeholder>Detailed Components from your review</Placeholder>
      <Placeholder>The Pantry</Placeholder>
      <Placeholder>07.07.18</Placeholder>
      <Placeholder>Rectangle</Placeholder>
      <Placeholder>Rectangle</Placeholder>
      <Placeholder>Rectangle</Placeholder>
      <Placeholder>Rectangle</Placeholder>
    </ReviewTileContainer>
  }
}
