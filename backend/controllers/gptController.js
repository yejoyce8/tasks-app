const {authorize, listEvents} = require('../google-api/auth-utils');

async function createTask(req, res) {
    // const { taskName, time } = req.body;
    // const response = { taskName: req.body.taskName, time: req.body.time };
    try {
        const authClient = await authorize();
        const events = await listEvents(authClient);
        res.status(201).json(events);
    } catch(error) {
        console.error('Error fetching Google Calendar Events:', error);
        res.status(500).json({ error: 'An error occurred' });
    }
    // res.status(201).json(response);
}

module.exports = {
    createTask,
}