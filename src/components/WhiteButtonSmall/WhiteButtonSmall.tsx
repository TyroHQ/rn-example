import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const WhiteButtonSmallContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class WhiteButtonSmall extends React.Component<{}> {
  static defaultProps: WhiteButtonSmall["props"];
  render() {
    return <WhiteButtonSmallContainer>
      <Placeholder>Vector - White Background
          <Placeholder>Business Info</Placeholder>
      </Placeholder>
    </WhiteButtonSmallContainer>
  }
}
