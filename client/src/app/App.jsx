import React, { useEffect, useState } from 'react';
import DriversTable from '../app/drivers-table/DriversTable';
import TasksTable from '../app/tasks-table/TasksTable';
import { CircularProgress } from '@material-ui/core';
import { getAllDrivers } from '../managers/driversClientManager';
import {
  getAllTasks,
  assignDriver,
  removeAssignedDriver,
} from '../managers/tasksClientManager';
import './App.css';

export const selectionModeEnum = {
  noneChosen: 0,
  taskChosen: 1,
  driverChosen: 2,
};

const App = () => {
  const [drivers, setDrivers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectionMode, setSelectionMode] = useState(
    selectionModeEnum.noneChosen
  );
  const [selectedRows, setSelectedRows] = useState({
    driverId: null,
    taskId: null,
  });

  // Fetch all data
  useEffect(() => {
    Promise.all([getAllDrivers(), getAllTasks()]).then(
      ([driversData, tasksData]) => {
        setDrivers(driversData);
        setAllTaskData(tasksData);
        setLoading(false);
      }
    );
  }, []);

  // Change selection mode
  // If both selected assign driver to task
  useEffect(() => {
    // set to notDefined selection mode
    if (!selectedRows.driverId && !selectedRows.taskId) {
      setSelectionMode(selectionModeEnum.noneChosen);
    }

    // set to driverChosen selection mode
    if (selectedRows.driverId && !selectedRows.taskId) {
      setSelectionMode(selectionModeEnum.driverChosen);
    }
    // set to taskChosen selection mode
    if (selectedRows.taskId && !selectedRows.driverId) {
      setSelectionMode(selectionModeEnum.taskChosen);
    }
    // Assign driver to task
    if (selectedRows.driverId && selectedRows.taskId) {
      assignDriver(selectedRows.driverId, selectedRows.taskId).then(() => {
        setAllTaskData(prevTasks =>
          prevTasks.map(prevTask =>
            prevTask.lineId === selectedRows.taskId
              ? { ...prevTask, driverId: selectedRows.driverId }
              : prevTask
          )
        );

        // If selection mode is driver chosen then can keep  pair mode
        // Else reset the selection mode
        if (selectionModeEnum.driverChosen !== selectionMode) {
          setSelectionMode(selectionModeEnum.noneChosen);
          setSelectedRows({
            driverId: null,
            taskId: null,
          });
        } else {
          setSelectedRows(prevSelected => ({
            ...prevSelected,
            taskId: null,
          }));
        }
      });
    }
  }, [selectedRows, selectionMode]);

  // Remove Driver assigned to a task by task id
  const removeDriverFromTask = taskId => {
    removeAssignedDriver(taskId).then(() => {
      setAllTaskData(prevTasks =>
        prevTasks.map(prevTask => {
          if (prevTask.lineId === taskId) {
            delete prevTask.driverId;
          }
          return prevTask;
        })
      );
    });
  };

  // Set tasks and display tasks
  const setAllTaskData = newTasksData => {
    setTasks(newTasksData);
    setDisplayTasks(newTasksData);
  };

  // Get display driver Name by driver id
  const getDriverName = driverId => {
    const foundDriver = drivers.find(driver => driver.id === driverId);
    return foundDriver ? foundDriver.name : 'Unknown Driver';
  };

  // Set driver id as selected, if driver id null deselect driver
  const onDriverSelect = driverId => {
    setSelectedRows(prevSelected => ({ ...prevSelected, driverId }));
    if (!!driverId && selectionModeEnum.taskChosen !== selectionMode) {
      // Filter out tasks assigned to another driver
      setDisplayTasks(
        tasks.filter(task => !task.driverId || task.driverId === driverId)
      );
    } else {
      // Display all tasks
      setDisplayTasks(tasks);
    }
  };

  // Set task id as selected
  const onTaskSelect = taskId => {
    setSelectedRows(prevSelected => {
      const newSelectedTaskId = prevSelected.taskId !== taskId ? taskId : null;
      return { ...prevSelected, taskId: newSelectedTaskId };
    });
  };

  return (
    <div className='app gridDisplay'>
      <DriversTable
        data={drivers}
        selectedId={selectedRows.driverId}
        onSelect={onDriverSelect}
        selectionMode={selectionMode}
      />
      <TasksTable
        data={displayTasks}
        selectedId={selectedRows.taskId}
        onSelect={onTaskSelect}
        selectionMode={selectionMode}
        getDriverName={getDriverName}
        removeDriverFromTask={removeDriverFromTask}
      />
      {loading && (
        <div className='loader'>
          <CircularProgress size={50} />
        </div>
      )}
    </div>
  );
};

export default App;
