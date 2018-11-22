import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";
import { RectangularButton } from "../RectangularButton";
import { HeaderText } from "../Typography/HeaderText";

const OfferTileContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class OfferTile extends React.Component<{}> {
  static defaultProps: OfferTile["props"];
  render() {
    return (
      <Placeholder>
        UnlockedReward
        <RewardTileHeader />
        <Placeholder>
          Rectangle with white background
          <HeaderText />
          <RectangularButton />
        </Placeholder>
      </Placeholder>
    );
  }
}
