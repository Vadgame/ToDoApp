import TaskForm from "./TaskForm"
import Tasks from "./Tasks"

const Main = ({ header, taskInputValue, setTaskInputValue, database, setDatabase, categoryId, setId }) => {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();

    const addTask = e => {
        e.preventDefault()
        if ( taskInputValue ) {
            const newTask = { 
                id: setId(database.tasks), 
                categoryId: categoryId, 
                name: taskInputValue 
            }
            setDatabase({ 
                ...database, 
                tasks: [ 
                    ...database.tasks, 
                    newTask 
                ] 
            })
            setTaskInputValue("")
        }
    }

    return (
        <main>
            <header>
                <h1>{header}</h1>
                {header === "My Day" && <h3>{days[date.getDay()]}</h3>}
            </header>
            <TaskForm 
            addTask={addTask} 
            taskInputValue={taskInputValue} 
            setTaskInputValue={setTaskInputValue} 
            /> 
            <Tasks 
            database={database} 
            setDatabase={setDatabase} 
            categoryId={categoryId} 
            />
        </main>
    )
}

export default Main