import React from 'react';
import { Grid, IconButton, makeStyles, TableRow } from '@material-ui/core';
import { StyledTableCell } from '../../../styled-components/StyledTable';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

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

const TaskRow = ({ task, removeDriverFromTask, getDriverName, children }) => {
  const classes = useStyles();

  // Display the driver name with a remove action
  const driverNameDisplay = () => (
    <StyledTableCell>
      <Grid container direction='row' alignItems='center'>
        <IconButton
          className={classes.removeIcon}
          onClick={() => removeDriverFromTask(task.lineId)}
          size='small'
        >
          <HighlightOffIcon fontSize='inherit' />
        </IconButton>
        <div className={classes.driverName}>
          {' '}
          {getDriverName(task.driverId)}
        </div>
      </Grid>
    </StyledTableCell>
  );

  return (
    <TableRow classes={{ root: classes.rowRoot }}>
      {task.driverId ? (
        driverNameDisplay()
      ) : (
        <StyledTableCell
          padding='none'
          classes={{
            root: classes.tableCellRoot,
          }}
        >
          {children}
        </StyledTableCell>
      )}
      <StyledTableCell>{task.lineDisplayId}</StyledTableCell>
      {task.tasks.map(dayTask => (
        <StyledTableCell key={dayTask.taskID}>{dayTask.type}</StyledTableCell>
      ))}
    </TableRow>
  );
};

export default TaskRow;
