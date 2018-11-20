import React from "react";
import styled from 'styled-components'
import {Text} from "react-native";

const {{pascalCase name}}Container = styled(Text)`
  background-color: lightgrey;
  padding: 10px;
`

export class {{pascalCase name}} extends React.Component<{}> {
  static defaultProps: {{pascalCase name}}["props"];
  render() {
    return <{{pascalCase name}}Container>
        {{pascalCase name}}
      </{{pascalCase name}}Container>
  }
}
