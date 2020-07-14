import React, { useState } from "react";
import ColumnsContainer from "./components/ColumnsContainer";
import { v4 as uuid } from "uuid";
import { IColumnModel } from "./models/Column";

const App = () => {
  const [columns, setColumns] = useState<IColumnModel[]>([]);

  const addColumn = () => {
    const newColumns = [...columns];
    newColumns.push({ id: uuid(), displayName: "A", color: "red" });
    setColumns(newColumns);
  };

  const removeColumn = (id: string) => {
    const newColumns = [...columns];
    const index = newColumns.findIndex(
      (column: IColumnModel) => column.id === id
    );
    newColumns.splice(index, 1);
    setColumns(newColumns);
  };

  return (
    <main>
      <button onClick={addColumn}>Add Column</button>
      <ColumnsContainer columns={columns} removeColumns={removeColumn} />
    </main>
  );
};

export default App;
