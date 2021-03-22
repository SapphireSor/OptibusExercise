import { TableCell, TableRow } from "@material-ui/core";
import React, { useMemo } from "react";

// const MyComponent = React.memo(function MyComponent(props) {
//   /* render using props */
// });

const DriverRow = ({ driver, children }) => {
  return (
    <TableRow key={driver.id}>
      <TableCell>{driver.name}</TableCell>
      <TableCell>{driver.id}</TableCell>
      <TableCell>
        {children}
        {driver.tasks && (
          <div>has {driver.tasks.length} assingments already!</div>
        )}
      </TableCell>
    </TableRow>
  );
};

export default DriverRow;
