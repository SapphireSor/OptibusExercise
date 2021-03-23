import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import DriverRow from './DriverRow';
import RowActions from '../../common/RowActions';

const columns = [{ label: 'Name' }, { label: 'ID' }, { label: 'Actions' }];

const DriversTable = ({ data, selectedId, onSelect, isTaskSelected }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.label}>{column.label}</TableCell>
            ))}
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
    </TableContainer>
  );
};

export default DriversTable;
