import React, {useState} from 'react';
import {createTask, Task} from '../services/apiService';

const CreateTaskContainer: React.FC = () => {
    const [taskName, setTaskName] = useState<string>('');
    const [time, setTime] = useState<number>();
    const [createdTask, setCreatedTask] = useState<Task | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e. preventDefault();

        // the taskName and time correlate to the state names in the hook
        const newTask: Partial<Task> = {taskName, time};

        try {
            const response = await createTask(newTask); // hit the endpoint
            setCreatedTask(response); // get response and store the created task in state
            console.log('Created task: ', createdTask);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h2>Create Task</h2>

            <form onSubmit={handleSubmit}>
                <label>
                    Task:
                    <input type="text" value={taskName} onChange={(e) => setTaskName(e.target.value)} />
                </label>
                <br/>
                <label>
                    Time:
                    <input type="number" value={time} onChange={(e) => setTime(Number(e.target.value))} />
                </label>
                <br/>
                <button type="submit">Create</button>
            </form>

            <div>
                <h3>Newly created task:</h3>
                <pre>{JSON.stringify(createdTask, null, 2)}</pre>
            </div>
        </div>
    );
};

export default CreateTaskContainer;