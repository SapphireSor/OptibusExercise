import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  IconButton,
} from '@material-ui/core';
import TaskRow from './TaskRow';
import AddButton from '../../common/AddButton';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import SelectedToggle from '../../common/SelectedToggle';
import RowActions from '../../common/RowActions';

const useStyles = makeStyles({
  removeIcon: {
    color: 'red',
  },
});

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
  data,
  selectedId: selectedTaskId,
  onSelect,
  isDriverSelected,
  getDriverName,
  removeDriverFromTask,
}) => {
  const classes = useStyles();
  const driverNameDisplay = task => (
    <div>
      <IconButton
        className={classes.removeIcon}
        onClick={() => removeDriverFromTask(task.lineId)}
        size='small'
      >
        <RemoveCircleOutlineIcon fontSize='inherit' />
      </IconButton>
      <span> {getDriverName(task.driverId)}</span>
    </div>
  );

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
          {data.map(task => (
            <TaskRow
              key={task.lineId}
              task={task}
              isSelected={selectedTaskId === task.lineId && !isDriverSelected}
            >
              {task.driverId ? (
                driverNameDisplay(task)
              ) : (
                <RowActions
                  isRowSelected={selectedTaskId === task.lineId}
                  isActionAvailable={!selectedTaskId}
                  buttonText={isDriverSelected ? 'Pair' : 'Driver'}
                  onSelect={() => onSelect(task.lineId)}
                  onDeselect={() => onSelect(null)}
                />
              )}
            </TaskRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TasksTable;
