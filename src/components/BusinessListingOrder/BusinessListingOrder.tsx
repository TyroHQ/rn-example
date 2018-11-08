import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { Placeholder } from "../Placeholder";

const BusinessListingOrderContainer = styled.View`
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
          <Placeholder>
            corner banner
            <Placeholder>
              Green polygon
              <Placeholder>Join text</Placeholder>
            </Placeholder>
          </Placeholder>
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
