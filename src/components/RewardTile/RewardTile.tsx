import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";
import { RewardTileHeader } from "../RewardTileHeader";
import { SmallPointStatusBox } from "../SmallPointStatusBox";

const RewardTileContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class RewardTile extends React.Component<{}> {
  static defaultProps: RewardTile["props"];
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
