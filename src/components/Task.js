import { FaMinus } from "react-icons/fa"

const Task = ({ name, deleteTask }) => {
    return (
        <div className="task">
            <h4 className="task__text">{name}</h4>
            <FaMinus onClick={() => deleteTask()} className="task__remove-button"/>
        </div>
    )
} 

export default Task