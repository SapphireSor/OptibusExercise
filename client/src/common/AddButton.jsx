import React from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';

const AddButton = ({ onClick, buttonText }) => {
  return (
    <Button size='small' onClick={onClick}>
      <AddIcon size='small' /> <span>{buttonText}</span>
    </Button>
  );
};

export default AddButton;
