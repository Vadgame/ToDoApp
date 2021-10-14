import Task from './Task'

const Tasks = ({ database, setDatabase, categoryId }) => {
    const deleteTask = index => {
        let newDatabase = database
        newDatabase.tasks.splice(index, 1)
        setDatabase({newDatabase})
        setDatabase({...database})
    }

    return (
        database.tasks.map((task, index) => {
            if ( task.categoryId === categoryId ) {
                return (
                    <Task 
                    key={"task" + task.id} 
                    name={task.name}  
                    deleteTask={() => deleteTask(index)} 
                    />
                )
            }
        })
    )
}

export default Tasks