import React from "react";

interface IColumnProps {
  id: string;
}

const Column = (props: IColumnProps) => {
  const { id } = props;

  return <p>{id}</p>;
};

export default Column;
