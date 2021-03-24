import React from 'react';
import { makeStyles, TableRow } from '@material-ui/core';
import { StyledTableCell } from '../../../styled-components/StyledTable';

const useStyles = makeStyles({
  tableCellRoot: {
    textAlign: 'center',
  },
  rowRoot: {
    height: 55,
  },
});

const DriverRow = ({ driver, children }) => {
  const classes = useStyles();
  return (
    <TableRow classes={{ root: classes.rowRoot }}>
      <StyledTableCell>{driver.name}</StyledTableCell>
      <StyledTableCell>{driver.id}</StyledTableCell>
      <StyledTableCell
        padding='none'
        classes={{
          root: classes.tableCellRoot,
        }}
      >
        {children}
      </StyledTableCell>
    </TableRow>
  );
};

export default DriverRow;
