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
      <Placeholder>Rectangle - Left
        <Placeholder>Small Rectangle
          <Placeholder>07.07.18</Placeholder>
        </Placeholder>
        <Placeholder>Small Rectangle
          <Placeholder>The Pantry</Placeholder>
        </Placeholder>
        <Placeholder>Small Rectangle
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
        </Placeholder>
      </Placeholder>
      <Placeholder>Rectangle - Right
        <Placeholder>Detailed Components from your review</Placeholder>
      </Placeholder>
    </ReviewTileContainer>
  }
}
