import { TableCell, TableContainer, withStyles } from '@material-ui/core';

export const StyledTableContainer = withStyles({
  root: {
    width: '90%',
    height: '90%',
  },
})(TableContainer);

export const StyledTableCell = withStyles({
  root: {
    padding: '10px',
  },
  stickyHeader: {
    backgroundColor: '#00adb5',
    color: '#eeeeee',
    fontWeight: 'bold',
  },
})(TableCell);
