import React from 'react';
import './task.css';
export default function TaskItems({ item, onDelete }) {
    return (
        <li className="task-item">
            <span className="task-text">{item.task}</span>
            <span className="task-description">{item.description}</span>
            <span className="task-date">{item.date}</span>
            <button className="task-delete-button" onClick={() => onDelete(item.id)}>
                DELETE
            </button>
        </li>
    );
}