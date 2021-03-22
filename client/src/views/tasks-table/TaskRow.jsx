import { TableCell, TableRow } from "@material-ui/core";
import React from "react";

const TaskRow = ({ assingment, getDriverName, children }) => {
  return (
    <TableRow>
      <TableCell>{children}</TableCell>
      <TableCell>{assingment.lineDisplayId}</TableCell>
      {assingment.tasks.map((task) => (
        <TableCell key={task.taskID}>{task.type}</TableCell>
      ))}
    </TableRow>
  );
};

export default TaskRow;
