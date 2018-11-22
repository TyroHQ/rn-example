import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const StarRatingContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class StarRating extends React.Component<{}> {
  static defaultProps: StarRating["props"];
  render() {
    return <StarRatingContainer>
      <Placeholder>Empty Rating Star</Placeholder>
      <Placeholder>Empty Rating Star</Placeholder>
      <Placeholder>Filled Rating Star</Placeholder>
      <Placeholder>Filled Rating Star</Placeholder>
      <Placeholder>Filled Rating Star</Placeholder>
    </StarRatingContainer>
  }
}
