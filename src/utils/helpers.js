/**
 * Get Formatted row data for the table
 * @param {Array} data - List of all data
 * @param {Array} headerData - List of all headerData
 * @returns {string}
 */
export const getTableRowData = (data, headerData, isRows) => {
  if (data.tableData && data.tableData.length) {
    const { tableData, limit, page, totalDocs } = data;
    const formattedDocs = {
      rows: tableData,
      header: headerData,
      pagination: {
        limit,
        page,
        totalDocs,
      },
    };
    if (isRows) {
      return formattedDocs.rows;
    }
    return formattedDocs;
  }
  return [];
};

export const getRowData = (row, header) => {
  if (row && header && header.accessor) {
    if (row[header.accessor]) {
      return row[header.accessor];
    }
    return "-";
  }
  return "-";
};

export const getRowSecondData = (row, header, key) => {
  if (row && header && header[key]) {
    return row[header[key]];
  }
  return "-";
};

export const getTitleData = (row, header) => {
  if (row && header && header.title) {
    return row[header.title];
  } else if (row && header && header.accessor) {
    if (row[header.accessor]) {
      return row[header.accessor];
    }
    return "-";
  }
  return "-";
};
