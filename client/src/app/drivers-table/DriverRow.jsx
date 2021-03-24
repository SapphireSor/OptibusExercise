import React from 'react';
import { makeStyles, TableRow } from '@material-ui/core';
import { StyledTableHeaderCell } from '../../styled-components/StyledTable';

const useStyles = makeStyles({
  tableCellRoot: {
    textAlign: 'center',
  },
  rowRoot: {
    height: 55,
  },
});

const DriverRow = ({ driver, isSelected, children }) => {
  const classes = useStyles();
  return (
    <TableRow selected={isSelected} classes={{ root: classes.rowRoot }}>
      <StyledTableHeaderCell>{driver.name}</StyledTableHeaderCell>
      <StyledTableHeaderCell>{driver.id}</StyledTableHeaderCell>
      <StyledTableHeaderCell
        padding='none'
        classes={{
          root: classes.tableCellRoot,
        }}
      >
        {children}
      </StyledTableHeaderCell>
    </TableRow>
  );
};

export default DriverRow;
