import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components";
import { Placeholder } from "../Placeholder";

const BusinessLogoContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`;

export class BusinessLogo extends React.Component<{}> {
  static defaultProps: BusinessLogo["props"];
  render() {
    return (
      <BusinessLogoContainer>
        <Placeholder>Rectangle</Placeholder>
      </BusinessLogoContainer>
    );
  }
}
