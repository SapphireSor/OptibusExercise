import React from 'react';
import {
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DriverRow from './DriverRow';
import RowActions from '../common/RowActions';
import {
  StyledTableContainer,
  StyledTableHeaderCell,
} from '../../styled-components/StyledTable';

const useStyles = makeStyles({
  actionCell: {
    width: 60,
  },
});

const columns = [{ label: 'Name' }, { label: 'ID' }];

const DriversTable = ({ data, selectedId, onSelect, isTaskSelected }) => {
  const classes = useStyles();
  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <StyledTableHeaderCell key={column.label}>
                {column.label}
              </StyledTableHeaderCell>
            ))}
            <StyledTableHeaderCell className={classes.actionCell}>
              Actions
            </StyledTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(driver => (
            <DriverRow
              key={driver.id}
              driver={driver}
              isSelected={selectedId === driver.id && !isTaskSelected}
            >
              <RowActions
                isRowSelected={selectedId === driver.id}
                isActionAvailable={!selectedId}
                buttonText={isTaskSelected ? 'Pair' : 'Task'}
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
