import { Task } from "./Task";
import { HiOutlineX } from "react-icons/hi";
import { AddForm } from "../shared/AddForm";

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export const TaskList = ({ category, tasks, addTask, removeTask, closeList }) => {

    const handleAddingTask = (newTask) => {
        addTask(category.id, newTask);
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
                <AddForm onSubmit={handleAddingTask} placeholder="Add new task"/>
                <ul className="list">
                    {tasks.map(task => 
                        <Task key={task.id} task={task.name} onClick={() => removeTask(task.id)}/>
                    )}
                </ul>
            </div>
        </div>
    );
};