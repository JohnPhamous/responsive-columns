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
    <ColumnWrapper backgroundColor={column.color} onClick={removeColumns}>
      <p>{displayName}</p>
    </ColumnWrapper>
  );
};

export default Column;

interface ColumnContainerProps {
  readonly backgroundColor: string;
}

const ColumnWrapper = styled.div<ColumnContainerProps>`
  background-color: ${(props) => props.backgroundColor};
  height: 100%;
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  transition: 0.15s;
  transition-timing-function: ease-in;

  :hover {
    filter: brightness(1.25);
  }
`;
