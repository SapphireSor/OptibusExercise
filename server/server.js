const express = require('express');

const app = express();

app.use(express.json());

// Routes
app.use('/drivers', require('./routes/drivers'));
app.use('/tasks', require('./routes/tasks'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
