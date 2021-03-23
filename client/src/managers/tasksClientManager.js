export const getAllTasks = () => {
  return fetch('/tasks/').then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Failed fetching tasks');
    }
  });
};
export const assignDriver = (driverId, taskId) => {
  return fetch('/tasks/assignDriver', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ driverId, taskId }),
  });
};
export const removeAssignedDriver = taskId => {
  return fetch('/tasks/removeAssignedDriver', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ taskId }),
  });
};
