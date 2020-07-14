import React from "react";

interface IColumnProps {
  id: string;
  removeColumns: () => void;
}

const Column = (props: IColumnProps) => {
  const { id, removeColumns } = props;

  return (
    <div>
      <p>{id}</p>
      <button onClick={removeColumns}>Remove</button>
    </div>
  );
};

export default Column;
