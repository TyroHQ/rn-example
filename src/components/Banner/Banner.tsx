import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'

const BannerContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class Banner extends React.Component<{}> {
  static defaultProps: Banner["props"];
  render() {
    return <BannerContainer>
      <Text>Banner</Text>
    </BannerContainer>
  }
}
