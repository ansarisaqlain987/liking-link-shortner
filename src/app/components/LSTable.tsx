import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

type CMTableProps = {
  tableHead: string[];
  tableBody: string[][];
};

export default function LSTable({
  tableHead = [],
  tableBody = [],
}: CMTableProps) {
  return (
    <TableContainer component={Paper} className="shadow-lg rounded-lg">
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {tableHead.length > 0 &&
              tableHead.map((head, index) => (
                <StyledTableCell
                  key={index}
                  align={`${index === 0 ? "left" : "center"}`}
                  scope="col"
                >
                  {head}
                </StyledTableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBody.length === 0 ? (
            <StyledTableRow>
              <StyledTableCell colSpan={tableHead.length} align="center">
                No data available
              </StyledTableCell>
            </StyledTableRow>
          ) : (
            tableBody.map((tableBodyData, index) => (
              <StyledTableRow key={index}>
                {tableBodyData.map((rowdata: string, index: number) => (
                  <StyledTableCell
                    key={index}
                    align={`${index === 0 ? "left" : "center"}`}
                  >
                    {rowdata}
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
