import { useState } from "react";
import { Task } from "./Task";
import { HiOutlineX, HiOutlinePlus } from "react-icons/hi";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const TaskList = ({ category, tasks, addTask, removeTask, closeList }) => {
    const [newTask, setNewTask] = useState("");

    const updateNewTask = (event) => {
        setNewTask(event.target.value);
    };

    const handleAddingTask = () => {
        addTask(category.id, newTask);
        setNewTask("");
    };

    return (
        <div className="task-list-wrapper">
            <div className="task-list">
                <div className="task-list-heading">
                    <div className="task-list-heading-title">
                        <h2>{category.name}</h2>
                        <button className="btn-close-task-list" onClick={closeList}>
                            <HiOutlineX />
                        </button>
                    </div>
                    <h3>{weekDays[new Date().getDay()]}</h3>
                </div>
                <div className="input-row">
                    <input type="text" name="addTask" value={newTask} onChange={updateNewTask}/>
                    <button className="btn-add" onClick={handleAddingTask}>
                        <HiOutlinePlus />
                    </button>
                </div>
                <ul className="list">
                    {tasks.map(task => 
                        <Task key={task.id} task={task.name} onClick={() => removeTask(task.id)}/>
                    )}
                </ul>
            </div>
        </div>
    );
};