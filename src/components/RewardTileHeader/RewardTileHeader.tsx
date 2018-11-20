import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const RewardTileHeaderContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class RewardTileHeader extends React.Component<{}> {
  static defaultProps: RewardTileHeader["props"];
  render() {
    return (
      <Placeholder>
        Green background Rectangle
        <Placeholder>
          Reward tile frame
          <Placeholder>
            Left Aligned Text
            <Placeholder>Offer Headline</Placeholder>
            <Placeholder>Requirement</Placeholder>
          </Placeholder>
          <Placeholder>Unlocked</Placeholder>
        </Placeholder>
        <Placeholder>Drop down angle icon</Placeholder>
      </Placeholder>
    );
  }
}
