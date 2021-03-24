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
  StyledTableCell,
} from '../../styled-components/StyledTable';
import TaskRow from './task-row/TaskRow';
import { selectionModeEnum } from '../App';
import RowActions from '../../common/RowActions';

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
  selectionMode,
  getDriverName,
  removeDriverFromTask,
}) => {
  const classes = useStyles();
  const buttonText =
    selectionMode === selectionModeEnum.noneChosen ? 'Driver' : 'Pair';

  return (
    <StyledTableContainer component={Paper}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <StyledTableCell className={classes.actionCell}>
              Driver
            </StyledTableCell>
            {columns.map(column => (
              <StyledTableCell key={column.label}>
                {column.label}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(task => (
            <TaskRow
              key={task.lineId}
              task={task}
              getDriverName={getDriverName}
              removeDriverFromTask={removeDriverFromTask}
            >
              <RowActions
                tableChosen={selectionMode === selectionModeEnum.taskChosen}
                buttonText={buttonText}
                isSelected={selectedId === task.lineId}
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
