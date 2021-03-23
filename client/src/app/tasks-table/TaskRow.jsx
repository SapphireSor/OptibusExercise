import React from 'react';
import { makeStyles, TableCell, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
  selectedRow: { backgroundColor: '#252a34' },
  cell: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

const TaskRow = ({ task, isSelected, children }) => {
  const classes = useStyles();
  return (
    <TableRow className={isSelected && classes.selectedRow}>
      <TableCell padding='none'>{children}</TableCell>
      <TableCell className={isSelected && classes.cell}>
        {task.lineDisplayId}
      </TableCell>
      {task.tasks.map(dayTask => (
        <TableCell key={dayTask.taskID} className={isSelected && classes.cell}>
          {dayTask.type}
        </TableCell>
      ))}
    </TableRow>
  );
};

export default TaskRow;
