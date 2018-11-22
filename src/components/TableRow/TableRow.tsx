import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const TableRowContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class TableRow extends React.Component<{}> {
  static defaultProps: TableRow["props"];
  render() {
    return <TableRowContainer>
      <Placeholder>Table Row Container
          <Placeholder>Table Row Text</Placeholder>
        <Placeholder>Table Row Text</Placeholder>
        <Placeholder>Table Row Text</Placeholder>
        <Placeholder>Table Row Text</Placeholder>
      </Placeholder>
    </TableRowContainer>
  }
}
