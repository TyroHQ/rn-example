import React from "react";
import { Text } from "react-native";
import styled from 'styled-components/native'

const {{pascalCase name}}Container = styled.View`
  background-color: lightgrey;
  padding: 10px;
`

export class {{pascalCase name}} extends React.Component<{}> {
  static defaultProps: {{pascalCase name}}["props"];
  render() {
    return <{{pascalCase name}}Container>
        <Text>{{pascalCase name}}</Text>
      </{{pascalCase name}}Container>
  }
}
