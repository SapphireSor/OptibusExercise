import { makeStyles, TableCell, TableRow } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  selectedRow: { backgroundColor: '#252a34' },
  cell: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const DriverRow = ({ driver, isSelected, children }) => {
  const classes = useStyles();
  return (
    <TableRow className={isSelected && classes.selectedRow}>
      <TableCell className={isSelected && classes.cell}>
        {driver.name}
      </TableCell>
      <TableCell className={isSelected && classes.cell}>{driver.id}</TableCell>
      <TableCell padding='none'>{children}</TableCell>
    </TableRow>
  );
};

export default DriverRow;
