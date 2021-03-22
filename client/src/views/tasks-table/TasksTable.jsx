import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import React, { useMemo } from 'react';
import AddButton from '../../common/AddButton';
import AssingmentRow from './TaskRow';

const columns = [
  { label: 'Driver' },
  { label: 'Task ID' },
  { label: 'Day 1' },
  { label: 'Day 2' },
  { label: 'Day 3' },
  { label: 'Day 4' },
  { label: 'Day 5' },
  { label: 'Day 6' },
  { label: 'Day 7' },
];

const TasksTable = ({
  tasks,
  isSelectMode,
  setSelectedTask,
  getDriverName,
}) => {
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
          {tasks.map(assingment => (
            <AssingmentRow
              key={assingment.lineId}
              assingment={assingment}
              getDriverName={getDriverName}
              // driverName={hasDriver}
            >
              {/* {hasDriver ? getDriverName(hasDriver[1]) : children}
              {isSelectMode ? (
                <AddButton
                  onAdd={() => setSelectedAssingments(assingment.lineId)}
                />
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  startIcon={<AddIcon />}
                  onClick={() => setSelectedAssingments(assingment.lineId)}
                >
                  Add Driver
                </Button>
              )} */}
            </AssingmentRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TasksTable;
