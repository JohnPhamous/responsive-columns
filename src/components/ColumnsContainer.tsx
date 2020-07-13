import React from "react";
import Column from "./Column";

interface IColumnsContainerProps {
  columns: string[];
}

const ColumnsContainer = (props: IColumnsContainerProps) => {
  const { columns } = props;

  return (
    <>
      {columns.map((column: string) => (
        <Column key={column} id={column} />
      ))}
    </>
  );
};

export default ColumnsContainer;
