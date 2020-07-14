import React, { useState } from "react";
import ColumnsContainer from "./components/ColumnsContainer";
import { v4 as uuid } from "uuid";
import { IColumnModel } from "./models/Column";
import GetNextDisplayName from "./utils/GetNextDisplayName";
import colors from "./theme/colors";
import styled from "styled-components";

const App = () => {
  const [columns, setColumns] = useState<IColumnModel[]>([]);
  const [colorIndex, setColorIndex] = useState<number>(0);

  const addColumn = () => {
    const newColumns = [...columns];

    newColumns.push({
      id: uuid(),
      displayName: GetNextDisplayName(newColumns),
      color: `#${colors[colorIndex]}`,
    });
    setColumns(newColumns);
    setColorIndex((colorIndex + 1) % colors.length);
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
    <AppWrapper>
      <button onClick={addColumn}>Add Column</button>
      <ColumnsContainer columns={columns} removeColumns={removeColumn} />
    </AppWrapper>
  );
};

export default App;

const AppWrapper = styled.main`
  height: 100px;
`;
