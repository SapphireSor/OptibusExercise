import React from 'react';
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
} from '@material-ui/core';
import {
  StyledTableContainer,
  StyledTableHeaderCell,
} from '../../styled-components/StyledTable';
import TaskRow from './TaskRow';
import RowActions from '../common/RowActions';

const useStyles = makeStyles({
  actionCell: {
    width: 110,
  },
});

const columns = [
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
  data,
  selectedId,
  onSelect,
  isDriverSelected,
  getDriverName,
  removeDriverFromTask,
}) => {
  const classes = useStyles();

  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableHeaderCell className={classes.actionCell}>
              Driver
            </StyledTableHeaderCell>
            {columns.map(column => (
              <StyledTableHeaderCell key={column.label}>
                {column.label}
              </StyledTableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(task => (
            <TaskRow
              key={task.lineId}
              task={task}
              isSelected={selectedId === task.lineId && !isDriverSelected}
              getDriverName={getDriverName}
              removeDriverFromTask={removeDriverFromTask}
            >
              <RowActions
                isRowSelected={selectedId === task.lineId}
                isActionAvailable={!selectedId}
                buttonText={isDriverSelected ? 'Pair' : 'Driver'}
                onSelect={() => onSelect(task.lineId)}
                onDeselect={() => onSelect(null)}
              />
            </TaskRow>
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  );
};

export default TasksTable;
