import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";
import { CornerBanner } from "../CornerBanner";

const BusinessListingOrderContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class BusinessListingOrder extends React.Component<{}> {
  static defaultProps: BusinessListingOrder["props"];
  render() {
    return (
      <Placeholder>
        Business listing container
        <Placeholder>
          Left White container
          <CornerBanner />
          <Placeholder>Business logo</Placeholder>
        </Placeholder>
        <Placeholder>
          Right green container
          <Placeholder>
            Content frame
            <Placeholder>
              Left aligned items
              <Placeholder>Business name H4</Placeholder>
              <Placeholder>Business type H5</Placeholder>
              <Placeholder>City (Distance in km) H6</Placeholder>
            </Placeholder>
            <Placeholder>Offer text</Placeholder>
          </Placeholder>
          <Placeholder>Down icon</Placeholder>
        </Placeholder>
      </Placeholder>
    );
  }
}
