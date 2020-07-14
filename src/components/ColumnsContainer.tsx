import React from "react";
import Column from "./Column";

interface IColumnsContainerProps {
  columns: string[];
  removeColumns: (id: string) => void;
}

const ColumnsContainer = (props: IColumnsContainerProps) => {
  const { columns, removeColumns } = props;

  return (
    <>
      {columns.map((id: string) => (
        <Column key={id} id={id} removeColumns={() => removeColumns(id)} />
      ))}
    </>
  );
};

export default ColumnsContainer;
