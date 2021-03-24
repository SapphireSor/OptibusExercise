import React from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DriverRow from './driver-row/DriverRow';
import {
  StyledTableContainer,
  StyledTableCell,
} from '../../styled-components/StyledTable';
import { selectionModeEnum } from '../App';
import RowActions from '../../common/RowActions';

const useStyles = makeStyles({
  actionCell: {
    width: 60,
  },
});

const columns = [{ label: 'Name' }, { label: 'ID' }];

const DriversTable = ({ data, selectedId, onSelect, selectionMode }) => {
  const classes = useStyles();
  const buttonText =
    selectionMode === selectionModeEnum.noneChosen ? 'Task' : 'Pair';

  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <StyledTableCell key={column.label}>
                {column.label}
              </StyledTableCell>
            ))}
            <StyledTableCell className={classes.actionCell}>
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(driver => (
            <DriverRow key={driver.id} driver={driver}>
              <RowActions
                tableChosen={selectionMode === selectionModeEnum.driverChosen}
                buttonText={buttonText}
                isSelected={selectedId === driver.id}
                onSelect={() => onSelect(driver.id)}
                onDeselect={() => onSelect(null)}
              />
            </DriverRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default DriversTable;
