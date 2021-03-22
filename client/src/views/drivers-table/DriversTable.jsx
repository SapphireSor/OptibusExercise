import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import React, { useState } from 'react';
import AddButton from '../../common/AddButton';
import DriverRow from './DriverRow';
import AddIcon from '@material-ui/icons/Add';

const columns = [{ label: 'Name' }, { label: 'ID' }];

const DriversTable = ({ drivers, isSelectMode, setSelectedDriver }) => {
  return (
    <TableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            {columns.map(column => (
              <TableCell key={column.label}>{column.label}</TableCell>
            ))}
            <TableCell padding='checkbox'>Select Driver</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {drivers.map(driver => (
            <DriverRow key={driver.id} driver={driver}>
              {isSelectMode ? (
                <AddButton onAdd={() => setSelectedDriver(driver.id)} />
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<AddIcon />}
                  onClick={() => setSelectedDriver(driver.id)}
                >
                  Add Assingment
                </Button>
              )}
            </DriverRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DriversTable;
