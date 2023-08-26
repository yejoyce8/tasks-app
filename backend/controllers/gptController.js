module.exports = {
    async createTask(req, res) {
        const {taskName, time} = req.body;
        const response = {taskName: req.body.taskName, time: req.body.time}
        // try {
        //   //const response = {taskName: req.body.taskName, time: req.body.time}
        //   //const response = await axios.get()
        //   res.status(201).json(response);
        // } catch(error) {
        //   console.error('Error fetching Google Calendar Events:', error);
        //   res.status(500).json({ error: 'An error occurred' });
        // }
        res.status(201).json(response);
    }
}