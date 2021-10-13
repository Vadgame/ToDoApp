import TaskForm from "./TaskForm"
import Tasks from "./Tasks"

const Main = ({ header, section, taskInputValue, setTaskInputValue, setSection }) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const onSubmit = e => {
        e.preventDefault()
        if (taskInputValue) {
            setSection({...section, tasks: [...section.tasks, taskInputValue]})
            setTaskInputValue("")
        }
    }
    const deleteTask = index => {
        let tasksList = section.tasks
        tasksList.splice(index, 1)
        setSection({...section, tasks: tasksList})
    }
    return (
        <main>
            <header>
                <h1>{header}</h1>
                {header === "My Day" && <h3>{days[date.getDay()]}</h3>}
            </header>
            <TaskForm onSubmit={onSubmit} taskInputValue={taskInputValue} setTaskInputValue={setTaskInputValue} />
            <Tasks section={section} deleteTask={deleteTask}></Tasks>
        </main>
    )
}

export default Main