import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import data from "./data/db.json"

function App() {
    const [header, setHeader] = useState("My Day")
    const [taskInputValue, setTaskInputValue] = useState("")
    const [database, setDatabase] = useState(data)
    const [categoryId, setCategoryId] = useState(0)

    const changeGroup = name => {
        setHeader(name)
        for (let index = 0; index < database.categories.length; index++) {
            if (database.categories[index].name === name) {
                setDatabase({ 
                    ...database, 
                    categories: [ 
                        ...database.categories, 
                        database.categories[categoryId].addInputPlaceholder = taskInputValue 
                    ] 
                })
                setTaskInputValue(database.categories[index].addInputPlaceholder)
                setCategoryId(database.categories[index].id)
                break
            }
        }
    }

    const setId = tableName => {
        return tableName[0] ? tableName.at(-1).id+1 : 0
    }

    return (
        <div className="container">
            <Nav 
            header={header} 
            database={database} 
            setDatabase={setDatabase} 
            changeGroup={changeGroup} 
            setId={setId}
            />
            <Main 
            header={header} 
            taskInputValue={taskInputValue} 
            setTaskInputValue={setTaskInputValue} 
            database={database} 
            setDatabase={setDatabase} 
            categoryId={categoryId} 
            setId={setId}
            />
        </div>
    )
}

export default App