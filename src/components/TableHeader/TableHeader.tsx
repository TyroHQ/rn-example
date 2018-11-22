import React from "react";
import { Text, View } from "react-native";
import styled from 'styled-components'
import { Placeholder } from "../Placeholder";

const TableHeaderContainer = styled(View)`
  background-color: lightgrey;
  padding: 10px;
`

export class TableHeader extends React.Component<{}> {
  static defaultProps: TableHeader["props"];
  render() {
    return <TableHeaderContainer>
      <Placeholder>Rectangle - Green
          <Placeholder>Date</Placeholder>
      </Placeholder>
    </TableHeaderContainer>
  }
}
