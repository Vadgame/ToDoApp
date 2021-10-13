import Task from './Task'

const Tasks = ({ section, deleteTask }) => {
    return (
        section["tasks"].map((task, index) => {
            return <Task key={task + index} name={task} deleteTask={deleteTask} index={index}></Task>
        })
    )
}

export default Tasks