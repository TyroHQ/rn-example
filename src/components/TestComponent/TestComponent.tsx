import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'

const TestComponentContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class TestComponent extends React.Component<{}> {
  static defaultProps: TestComponent["props"];
  render() {
    return <TestComponentContainer>
        <Text>TestComponent</Text>
      </TestComponentContainer>
  }
}
