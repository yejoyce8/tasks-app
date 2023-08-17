import axios from "axios";

const API_BASE_URL='http://localhost:5000/api';

export interface Task {
    taskName: string;
    time: number;
}

export async function createTask(newTask: Partial<Task>): Promise<Task> {
    try {
        console.log('Hitting createTask endpoint..');
        const response = await axios.post<Task>('http://localhost:5000/api/createTask', newTask);
        console.log('Received response! ', response);
        return response.data;
    } catch(error) {
        throw error;
    }
}