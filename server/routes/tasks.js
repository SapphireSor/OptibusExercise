const express = require('express');
const router = express.Router();
let tasks = require('../../data/ops-Exercise-tasks.json');

// Route - GET api/tasks
// Get all tasks
router.get('/', (req, res) => res.json(tasks));

// Route - PUT api/tasks/assignDriver
//Assign driver to task
router.put('/assignDriver', (req, res) => {
  // let foundDriver = drivers.find(driver => driver.id === req.body.driverId);
  let foundTask = tasks.find(task => task.lineId === req.body.taskId);

  if (!foundTask) {
    res.status(400).json({ msg: `task not found` });
  } else {
    tasks = tasks.map(task => {
      if (task.lineId === req.body.taskId) {
        return { ...task, driverId: req.body.driverId };
      }
      return task;
    });

    res.end();
  }
});

// Route - PUT api/tasks/removeAssignedDriver
//Remove driver from task
router.put('/removeAssignedDriver', (req, res) => {
  let foundTask = tasks.find(task => task.lineId === req.body.taskId);

  if (!foundTask) {
    res.status(400).json({ msg: `task not found` });
  } else {
    if (foundTask.hasOwnProperty('driverId')) {
      delete foundTask.driverId;
    }

    res.end();
  }
});

module.exports = router;
