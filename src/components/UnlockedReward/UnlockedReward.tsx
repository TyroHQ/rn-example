import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";

const UnlockedRewardContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class UnlockedReward extends React.Component<{}> {
  static defaultProps: UnlockedReward["props"];
  render() {
    return (
      <Placeholder>
        UnlockedReward
        <RewardTileHeader />
        <Placeholder>
          Rectangle with white background
          <Placeholder>Offer Headline</Placeholder>
          <Placeholder>Rectangular button right</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
