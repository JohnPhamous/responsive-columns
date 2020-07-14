import React, { useState } from "react";
import ColumnsContainer from "./components/ColumnsContainer";
import { v4 as uuid } from "uuid";

const App = () => {
  const [columns, setColumns] = useState<string[]>([uuid()]);

  const addColumn = () => {
    const newColumns = [...columns];
    newColumns.push(uuid());
    setColumns(newColumns);
  };

  const removeColumn = (id: string) => {
    const newColumns = [...columns];
    const index = newColumns.indexOf(id);
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
