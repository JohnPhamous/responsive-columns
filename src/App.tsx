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

  return (
    <main>
      <button onClick={addColumn}>Add Column</button>
      <ColumnsContainer columns={columns} />
    </main>
  );
};

export default App;
