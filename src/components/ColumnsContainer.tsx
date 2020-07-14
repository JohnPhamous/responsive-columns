import React from "react";
import Column from "./Column";
import { IColumnModel } from "../models/Column";
import { ReflexContainer, ReflexElement, ReflexSplitter } from "react-reflex";

import "react-reflex/styles.css";

interface IColumnsContainerProps {
  columns: IColumnModel[];
  removeColumns: (id: string) => void;
}

const ColumnsContainer = (props: IColumnsContainerProps) => {
  const { columns, removeColumns } = props;

  const renderColumns = () => {
    const renderedColumns: React.ReactNode[] = [];

    columns.forEach((column, index) => {
      renderedColumns.push(
        <ReflexElement key={`${column.id}-element`}>
          <Column
            key={column.id}
            column={column}
            removeColumns={() => removeColumns(column.id)}
          />
        </ReflexElement>
      );

      if (index < columns.length - 1) {
        renderedColumns.push(
          <ReflexSplitter key={`${column.id}-splitter`} propagate />
        );
      }
    });
    return renderedColumns;
  };
  return (
    <ReflexContainer orientation="vertical">{renderColumns()}</ReflexContainer>
  );
};

export default ColumnsContainer;
