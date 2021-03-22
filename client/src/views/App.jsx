import React, { useEffect, useState } from "react";
import axios from "axios";
import DriversTable from "./drivers-table/DriversTable";
import "./App.css";
import TasksTable from "./tasks-table/TasksTable";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [selectedDriver, setSelectedDriver] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    axios.get("/api/drivers").then((res) => {
      setDrivers(res.data);
    });
    axios.get("/api/tasks").then((res) => {
      setTasks(res.data);
    });
  }, []);

  useEffect(() => {
    if ((selectedDriver, selectedTask)) {
      // TODO: save to server connection
      setSelectedTask(null);
      setSelectedDriver(null);
    }
  }, [selectedDriver, selectedTask]);

  const getDriverName = (driverId) => {
    const foundDriver = drivers.find((driver) => driver.id === driverId);
    return foundDriver ? foundDriver.name : "Unknown Driver";
  };

  return (
    <div className="app">
      <DriversTable
        drivers={drivers}
        isSelectMode={selectedTask && !selectedDriver}
        setSelectedDriver={setSelectedDriver}
      />
      <TasksTable
        tasks={tasks}
        isSelectMode={selectedDriver && !selectedTask}
        setSelectedTask={setSelectedTask}
        getDriverName={getDriverName}
      />
    </div>
  );
};

export default App;
