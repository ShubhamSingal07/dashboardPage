import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.action.hover,
    color: theme.palette.common.black,
    fontWeight: 700,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(date, store, contact, address, city, status, amount) {
  return { date, store, contact, address, city, status, amount };
}

const rows = [
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'cancelled',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'refunded',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'inprogress',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
  createData(
    '04-07-2020',
    'KOYO mart',
    94847393739,
    'Nagaramalai',
    'Bengaluru',
    'accepted',
    2134,
  ),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

export default function CustomizedTables() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Store Name</StyledTableCell>
            <StyledTableCell>Contact Number</StyledTableCell>
            <StyledTableCell>Address</StyledTableCell>
            <StyledTableCell>City</StyledTableCell>
            <StyledTableCell>Status</StyledTableCell>
            <StyledTableCell>Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                {row.date}
              </StyledTableCell>
              <StyledTableCell>{row.store}</StyledTableCell>
              <StyledTableCell>{row.contact}</StyledTableCell>
              <StyledTableCell>{row.address}</StyledTableCell>
              <StyledTableCell>{row.city}</StyledTableCell>
              <StyledTableCell>
                <div
                  style={{
                    color: row.status === 'inprogress' ? 'black' : 'white',
                    backgroundColor:
                      row.status === 'inprogress'
                        ? '#ffc53f'
                        : row.status === 'cancelled'
                        ? 'red'
                        : row.status === 'refunded'
                        ? 'grey'
                        : '#4caf50',
                    textTransform: 'capitalize',
                    borderRadius: '5px',
                    display: 'inline',
                    padding: '7px',
                  }}>
                  {row.status}
                </div>
              </StyledTableCell>
              <StyledTableCell>
                <span style={{ paddingRight: '4px' }}>&#x20b9;</span>
                {row.amount}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[10, 20, 50, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={10}
              page={0}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
