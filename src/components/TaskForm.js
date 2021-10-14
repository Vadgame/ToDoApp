import { FaPlus } from "react-icons/fa"

const TaskForm = ({ addTask, taskInputValue, setTaskInputValue }) => {
    return (
        <form onSubmit={(e) => addTask(e)} className="addNewTask">
            <input 
            type="text" 
            placeholder="Add New Task" 
            value={taskInputValue} 
            onChange={(e) => setTaskInputValue(e.target.value)} 
            className="addNewTask__input" 
            />
            <FaPlus 
            onClick={(e) => addTask(e)} 
            className="addNewTask__icon"
            />
        </form>
    )
}

export default TaskForm