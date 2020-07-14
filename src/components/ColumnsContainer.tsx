import React from "react";
import Column from "./Column";
import { IColumnModel } from "../models/Column";

interface IColumnsContainerProps {
  columns: IColumnModel[];
  removeColumns: (id: string) => void;
}

const ColumnsContainer = (props: IColumnsContainerProps) => {
  const { columns, removeColumns } = props;

  return (
    <>
      {columns.map((column: IColumnModel) => (
        <Column
          key={column.id}
          column={column}
          removeColumns={() => removeColumns(column.id)}
        />
      ))}
    </>
  );
};

export default ColumnsContainer;
