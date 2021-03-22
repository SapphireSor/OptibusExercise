const express = require('express');
let drivers = require('./data/ops-Exercise-drivers.json');
let tasks = require('./data/ops-Exercise-tasks.json');

const app = express();

app.use(express.json());

//Get all drivers
app.get('/api/drivers', (req, res) => res.json(drivers));
//Get all tasks
app.get('/api/tasks', (req, res) => res.json(tasks));

//Assign task to driver
app.post('/api/assignTaskToDriver', (req, res) => {
  let foundDriver = drivers.find(driver => driver.id === req.body.driverId);
  let foundTask = tasks.find(task => task.lineId === req.body.taskId);

  if (!foundDriver || !foundTask) {
    res.status(400).json({ msg: `driver or task not found` });
  } else {
    if (!foundDriver.hasOwnProperty('tasks')) {
      foundDriver.tasks = [];
    }

    foundDriver.tasks.push(req.body.taskId);
    foundTask.driverId = req.body.driverId;

    res.end();
  }
});

//Remove assignment from task and driver
app.post('/api/removeAssignment', (req, res) => {
  let foundDriver = drivers.find(driver => driver.id === req.body.driverId);
  let foundTask = tasks.find(task => task.lineId === req.body.taskId);

  if (!foundDriver || !foundTask) {
    res.status(400).json({ msg: `driver or task not found` });
  } else {
    if (foundDriver.hasOwnProperty('tasks')) {
      foundDriver.tasks = foundDriver.tasks.filter(
        task => task.lineId !== req.body.taskId
      );
    }

    if (
      foundTask.hasOwnProperty('driverId') &&
      foundTask.driverId === req.body.driverId
    ) {
      delete foundTask.driverId;
    } else {
      res.status(400).json({ msg: `task has not been assign to this driver` });
    }

    res.end();
  }
});

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
