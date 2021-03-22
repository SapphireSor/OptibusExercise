import React from "react";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { IconButton } from "@material-ui/core";

const AddButton = ({ onAdd }) => {
  return (
    <IconButton aria-label="add" onClick={onAdd} size={24}>
      <AddCircleOutlineIcon fontSize="inherit" />
    </IconButton>
  );
};

export default AddButton;
