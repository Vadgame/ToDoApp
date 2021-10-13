import { FaPlus } from "react-icons/fa"

const TaskForm = ({ onSubmit, taskInputValue, setTaskInputValue }) => {
    return (
        <form onSubmit={(e) => onSubmit(e)} className="addNewTask">
            <input type="text" placeholder="Add New Task" value={taskInputValue} 
            onChange={(e) => setTaskInputValue(e.target.value)} className="addNewTask__input"></input>
            <FaPlus onClick={(e) => onSubmit(e)} className="addNewTask__icon"/>
        </form>
    )
}

export default TaskForm