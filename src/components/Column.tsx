import React from "react";
import { IColumnModel } from "../models/Column";

interface IColumnProps {
  column: IColumnModel;
  removeColumns: () => void;
}

const Column = (props: IColumnProps) => {
  const { column, removeColumns } = props;
  const { displayName } = column;

  return (
    <div>
      <p>{displayName}</p>
      <button onClick={removeColumns}>Remove</button>
    </div>
  );
};

export default Column;
