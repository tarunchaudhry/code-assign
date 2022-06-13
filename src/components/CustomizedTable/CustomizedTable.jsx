import * as React from "react";

// Third Party Library
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TableFooter from "@mui/material/TableFooter";
import Pagination from "./Pagination";
import Link from "@mui/material/Link";

// Helper
import {
  getRowData,
  getRowSecondData,
  getTitleData,
} from "../../utils/helpers";

// Component
import { NotFound } from "..";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    backgroundColor: theme.palette.common.white,
    borderBottom: `3px solid ${theme.palette.background.default}`,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&": {
    backgroundColor: "transparent",
  },
  td: {
    borderRight: `2px solid ${theme.palette.background.default}`,
    minWidth: "100px",
  },
  "& td:first-of-type": {
    borderTopLeftRadius: "8px",
    borderBottomLeftRadius: "8px",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
    borderRight: `2px solid ${theme.palette.background.default}`,
  },
  "& td:last-child": {
    borderTopRightRadius: "8px",
    borderBottomRightRadius: "8px",
    borderRight: 0,
  },
}));

export default function CustomizedTable({
  popup,
  actions,
  data,
  handlePageChange,
  handleRowChange,
  isLoading,
}) {
  const { header, rows, pagination } = data;
  if (data && rows && rows.length && !isLoading) {
    return (
      <div className="table-wrapper">
        {popup && popup()}
        <TableContainer component={Paper} sx={{ background: "transparent" }}>
          <Table
            sx={{ minWidth: 700, borderCollapse: "separate" }}
            aria-label="custom pagination table"
          >
            <TableHead>
              <TableRow>
                {header.map((item, index) => (
                  <StyledTableCell key={index}>{item.label}</StyledTableCell>
                ))}
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((rowItem, indexRow) => (
                <StyledTableRow key={indexRow}>
                  {header.map((item, indexHead) => (
                    <StyledTableCell key={indexHead}>
                      {item.type === "link" || item.type === "imageLink" ? (
                        <>
                          {item.type === "imageLink" ? (
                            <img
                              className="image-link"
                              src={getRowSecondData(rowItem, item, "linkAcc")}
                              style={{ maxWidth: "90px" }}
                              alt={getRowData(rowItem, item)}
                            />
                          ) : (
                            <Link
                              target="_blank"
                              data-testid={`link-${getRowData(rowItem, item)}`}
                              href={getRowSecondData(rowItem, item, "linkAcc")}
                            >
                              {getRowData(rowItem, item)}
                            </Link>
                          )}
                        </>
                      ) : (
                        <>
                          {item.type === "boxed" ? (
                            <Chip
                              label={getRowData(rowItem, item)}
                              color="info"
                            />
                          ) : item.type === "status" ? (
                            <span
                              data-testid={`status-${getRowData(
                                rowItem,
                                item
                              )}`}
                              className={getRowData(rowItem, item)}
                            >
                              {getRowData(rowItem, item)}
                            </span>
                          ) : (
                            <span
                              className={item.name}
                              title={getTitleData(rowItem, item)}
                              data-testid={getRowData(rowItem, item)}
                            >
                              {getRowData(rowItem, item)}
                            </span>
                          )}
                        </>
                      )}
                    </StyledTableCell>
                  ))}
                  <StyledTableCell align="center">
                    {actions && actions(rowItem)}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <Pagination
                  colSpan={header && header.length + 1}
                  pagination={pagination}
                  handlePageChange={handlePageChange}
                  handleRowChange={handleRowChange}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </div>
    );
  }

  return <NotFound text={"No Data Found"} />;
}
