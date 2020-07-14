import { IColumnModel } from "../models/Column";

const GetNextDisplayName = (columns: IColumnModel[]) => {
  const lastColumn = columns[columns.length - 1];
  // TODO: This will only work for 26 entries. After 26 the display names it will wrap to characters.
  // If we need to support more than 26 display names then we should create a dedicated ID allocator.
  // Other considerations is localization and other alphabets.
  if (lastColumn) {
    return String.fromCharCode(lastColumn.displayName.charCodeAt(0) + 1);
  }

  return "A";
};

export default GetNextDisplayName;
