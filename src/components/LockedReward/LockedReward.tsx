import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";
import { SmallPointStatusBox } from "../SmallPointStatusBox";

const LockedRewardContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class LockedReward extends React.Component<{}> {
  static defaultProps: LockedReward["props"];
  render() {
    return (
      <Placeholder>
        LockedReward container
        <RewardTileHeader />
        <Placeholder>
          White container
          <SmallPointStatusBox />
          <SmallPointStatusBox />
          <SmallPointStatusBox />
        </Placeholder>
      </Placeholder>
    );
  }
}
