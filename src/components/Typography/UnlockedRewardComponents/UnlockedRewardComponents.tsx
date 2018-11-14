import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Offer } from "../Offer";
import { OfferStatus } from "../OfferStatus";

const UnlockedRewardComponentsContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class UnlockedRewardComponents extends React.Component<{}> {
  static defaultProps: UnlockedRewardComponents["props"];
  render() {
    return (
      <Text>
        <Offer />
        <OfferStatus />
      </Text>
    );
  }
}
