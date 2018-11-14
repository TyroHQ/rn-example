import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { TitleText } from "../Typography/TitleText";
import { HeaderText } from "../Typography/HeaderText";
import { H4 } from "../Typography/H4";
import { H5 } from "../Typography/H5";
import { H6 } from "../Typography/H6";
import { ExplainerText } from "../Typography/ExplainerText";
import { InputPlaceholder } from "../Typography/InputPlaceholder";

const TypographyComponentsContainer = styled.View`
  background-color: lightgrey;
  padding: 10px;
`;

export class TypographyComponents extends React.Component<{}> {
  static defaultProps: TypographyComponents["props"];
  render() {
    return (
      <Text>
        Text container
        <TitleText />
        <HeaderText />
        <H4 />
        <H5 />
        <H6 />
        <ExplainerText />
        <InputPlaceholder />
      </Text>
    );
  }
}
