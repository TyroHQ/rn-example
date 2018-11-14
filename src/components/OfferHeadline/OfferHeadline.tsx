import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

const OfferHeadlineContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class OfferHeadline extends React.Component<{}> {
  static defaultProps: OfferHeadline["props"];
  render() {
    return <Text>OfferHeadline</Text>;
  }
}
