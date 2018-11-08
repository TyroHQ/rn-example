import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";
import { BusinessListingOrder } from "../BusinessListingOrder";

const BusinessListingContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class BusinessListing extends React.Component<{}> {
  static defaultProps: BusinessListing["props"];
  render() {
    return (
      <Placeholder>
        Business Expanded Container
        <BusinessListingOrder />
        <Placeholder>
          Dropdown white Container
          <Placeholder>
            Point status Boxes
            <Placeholder>
              Box one
              <Placeholder>
                Grey Input Placeholder
                <Placeholder>Placeholder available points</Placeholder>
              </Placeholder>
              <Placeholder>
                White background box
                <Placeholder>Points in figures</Placeholder>
              </Placeholder>
            </Placeholder>
            <Placeholder>
              Box two
              <Placeholder>
                Grey Input Placeholder
                <Placeholder>My Visits</Placeholder>
              </Placeholder>
              <Placeholder>
                White background box
                <Placeholder>Number of visits in figures</Placeholder>
              </Placeholder>
            </Placeholder>
            <Placeholder>
              Box three
              <Placeholder>
                Grey Input Placeholder
                <Placeholder>Redeemed</Placeholder>
              </Placeholder>
              <Placeholder>
                White background box
                <Placeholder>Redeemed Rewards in figures</Placeholder>
              </Placeholder>
            </Placeholder>
          </Placeholder>
        </Placeholder>
        <Placeholder>
          Unlocked stamps closed
          <Placeholder>
            Content frame
            <Placeholder>
              Right aligned content
              <Placeholder>Offer Headline</Placeholder>
              <Placeholder>Explainer Text</Placeholder>
            </Placeholder>
            <Placeholder>Unlocked</Placeholder>
          </Placeholder>
          <Placeholder>Down Icon</Placeholder>
        </Placeholder>
        <Placeholder>
          White Buttons
          <Placeholder>Business info button</Placeholder>
          <Placeholder>Reward Rules button</Placeholder>
          <Placeholder>Notifications button</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
