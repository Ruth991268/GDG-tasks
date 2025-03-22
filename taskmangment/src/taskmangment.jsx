import { useState } from "react";
import './task.css'; // Ensure your CSS file is appropriately named
import TaskItems from './TaskItem'; // Make sure to import your TaskItems component

export default function TaskApp() {
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleSubmit(e) {
        e.preventDefault();
        if (task && description && date) {
            setTasks([...tasks, { id: Date.now(), task, description, date }]); // Add all details to each task
            setTask(""); // Clear input after submit
            setDescription("");
            setDate("");
        }
    }

    function handleDelete(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    return (
        <div className="task-container">
            <h1 className="task-header">Task Management</h1>
            <form onSubmit={handleSubmit} className="task-form">
                <input 
                    onChange={(e) => setTask(e.target.value)} 
                    type="text" 
                    value={task} 
                    className="task-input" 
                    placeholder="Add a new task..." 
                />
                <input 
                    onChange={(e) => setDescription(e.target.value)} 
                    type="text" 
                    value={description} 
                    className="task-input" 
                    placeholder="Add a description..." 
                />
                <input 
                    onChange={(e) => setDate(e.target.value)} 
                    type="date" 
                    value={date} 
                    className="task-input" 
                />
                <button type="submit" className="task-button">ADD TO THE LIST</button>
            </form>
            <ul className="task-list">
                {tasks.map((item) => (
                    <TaskItems key={item.id} item={item} onDelete={handleDelete} />
                ))}
            </ul>
        </div>
    );
}