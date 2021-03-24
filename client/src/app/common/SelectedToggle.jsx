import React, { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

const useStyles = makeStyles({
  checkIcon: {
    color: 'green',
    fontSize: 24,
  },
  removeIcon: {
    color: 'red',
    fontSize: 24,
  },
});

const SelectedToggle = ({ onClick }) => {
  const classes = useStyles();
  const [hover, setHover] = useState(false);

  return (
    <IconButton
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      size='small'
    >
      {hover ? (
        <RemoveCircleOutlineIcon className={classes.removeIcon} />
      ) : (
        <CheckCircleOutlineIcon className={classes.checkIcon} />
      )}
    </IconButton>
  );
};

export default SelectedToggle;
