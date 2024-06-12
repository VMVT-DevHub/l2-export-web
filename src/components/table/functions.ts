import { Columns } from '@aplinkosministerija/design-system';

export const getActiveColumns = (orderedColumns: Columns) =>
  Object.keys(orderedColumns).reduce((obj, key) => {
    if (orderedColumns[key].show) {
      obj[key] = orderedColumns[key];
    }
    return obj;
  }, {});
