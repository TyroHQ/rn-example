import React from "react";
import { View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";
import { BusinessListingHeader } from "../BusinessListingHeader";
import { PointStatusBox } from "../PointStatusBox";
import { RewardTileHeader } from "../RewardTileHeader";

const BusinessListingContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class BusinessListing extends React.Component<{}> {
  static defaultProps: BusinessListing["props"];
  render() {
    return (
      <Placeholder>
        Business Expanded Container
        <BusinessListingHeader />
        <Placeholder>
          Dropdown white Container
          <Placeholder>
            Point status Boxes
            <PointStatusBox />
            <PointStatusBox />
            <PointStatusBox />
          </Placeholder>
          <RewardTileHeader />
          <Placeholder>
            White Buttons
            <Placeholder>Business info button</Placeholder>
            <Placeholder>Reward Rules button</Placeholder>
            <Placeholder>Notifications button</Placeholder>
          </Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
