import React from "react";
import { IColumnModel } from "../models/Column";
import styled from "styled-components";

interface IColumnProps {
  column: IColumnModel;
  removeColumns: () => void;
}

const Column = (props: IColumnProps) => {
  const { column, removeColumns } = props;
  const { displayName } = column;

  return (
    <ColumnContainer backgroundColor={column.color}>
      <p>{displayName}</p>
      <button onClick={removeColumns}>Remove</button>
    </ColumnContainer>
  );
};

export default Column;

interface ColumnContainerProps {
  readonly backgroundColor: string;
}

const ColumnContainer = styled.div<ColumnContainerProps>`
  background-color: ${(props) => props.backgroundColor};
`;
