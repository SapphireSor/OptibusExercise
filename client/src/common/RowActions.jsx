import React from 'react';
import AddButton from './AddButton';
import SelectedToggle from './SelectedToggle';

const RowActions = ({
  tableChosen,
  buttonText,
  isSelected,
  onSelect,
  onDeselect,
}) => {
  if (!tableChosen) {
    return <AddButton onClick={onSelect} buttonText={buttonText} />;
  } else {
    return <>{isSelected && <SelectedToggle onClick={onDeselect} />}</>;
  }
};

export default RowActions;
