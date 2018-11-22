import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'

const TableRowContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class TableRow extends React.Component<{}> {
  static defaultProps: TableRow["props"];
  render() {
    return <TableRowContainer>
        <Text>TableRow</Text>
      </TableRowContainer>
  }
}
