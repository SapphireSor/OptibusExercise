import React from 'react';
import { Grid, IconButton, makeStyles, TableRow } from '@material-ui/core';
import { StyledTableHeaderCell } from '../../styled-components/StyledTable';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles({
  tableCellRoot: {
    textAlign: 'center',
  },
  rowRoot: {
    height: 55,
  },
  removeIcon: {
    maxWidth: '30%',
    color: 'red',
  },
  driverName: {
    paddingLeft: '2px',
    maxWidth: '70%',
  },
});

const TaskRow = ({
  task,
  isSelected,
  removeDriverFromTask,
  getDriverName,
  children,
}) => {
  const classes = useStyles();

  // Display the driver name with a remove action
  const driverNameDisplay = () => (
    <StyledTableHeaderCell>
      <Grid container direction='row' alignItems='center'>
        <IconButton
          className={classes.removeIcon}
          onClick={() => removeDriverFromTask(task.lineId)}
          size='small'
        >
          <RemoveIcon fontSize='inherit' />
        </IconButton>
        <div className={classes.driverName}>
          {' '}
          {getDriverName(task.driverId)}
        </div>
      </Grid>
    </StyledTableHeaderCell>
  );

  return (
    <TableRow selected={isSelected} classes={{ root: classes.rowRoot }}>
      {task.driverId ? (
        driverNameDisplay()
      ) : (
        <StyledTableHeaderCell
          padding='none'
          classes={{
            root: classes.tableCellRoot,
          }}
        >
          {children}
        </StyledTableHeaderCell>
      )}
      <StyledTableHeaderCell>{task.lineDisplayId}</StyledTableHeaderCell>
      {task.tasks.map(dayTask => (
        <StyledTableHeaderCell key={dayTask.taskID}>
          {dayTask.type}
        </StyledTableHeaderCell>
      ))}
    </TableRow>
  );
};

export default TaskRow;
