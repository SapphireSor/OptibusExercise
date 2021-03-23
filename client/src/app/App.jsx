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

const App = () => {
  const [drivers, setDrivers] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [displayTasks, setDisplayTasks] = useState([]);
  const [loading, setLoading] = useState(true);
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

  // Assign driver to task
  useEffect(() => {
    if (selectedRows.driverId && selectedRows.taskId) {
      assignDriver(selectedRows.driverId, selectedRows.taskId).then(() => {
        setAllTaskData(
          tasks.map(prevTask =>
            prevTask.lineId === selectedRows.taskId
              ? { ...prevTask, driverId: selectedRows.driverId }
              : prevTask
          )
        );
      });

      setSelectedRows({
        driverId: null,
        taskId: null,
      });
    }
  }, [selectedRows]);

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
    // setDisplayTasks()
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
    if (!!driverId) {
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
        isTaskSelected={!!selectedRows.taskId}
      />
      <TasksTable
        data={displayTasks}
        selectedId={selectedRows.taskId}
        isDriverSelected={!!selectedRows.driverId}
        onSelect={onTaskSelect}
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
