import React from "react";
import Column from "./Column";
import { IColumnModel } from "../models/Column";
import styled from "styled-components";

interface IColumnsContainerProps {
  columns: IColumnModel[];
  removeColumns: (id: string) => void;
}

const ColumnsContainer = (props: IColumnsContainerProps) => {
  const { columns, removeColumns } = props;

  return (
    <ColumnsWrapper>
      {columns.map((column: IColumnModel) => (
        <Column
          key={column.id}
          column={column}
          removeColumns={() => removeColumns(column.id)}
        />
      ))}
    </ColumnsWrapper>
  );
};

export default ColumnsContainer;

const ColumnsWrapper = styled.div`
  display: flex;
`;
