import React from 'react';
import AddButton from './AddButton';
import SelectedToggle from './SelectedToggle';

const RowActions = ({
  isRowSelected,
  isActionAvailable,
  buttonText,
  onSelect,
  onDeselect,
}) => {
  return (
    <>
      {isRowSelected && <SelectedToggle onClick={onDeselect} />}
      {isActionAvailable && (
        <AddButton onClick={onSelect} buttonText={buttonText} />
      )}
    </>
  );
};

export default RowActions;
