import { useState } from "react"
import Nav from "./components/Nav"
import Main from "./components/Main"
import data from "./data/db.json"

function App() {
    const changeSection = (header) => {
        const names = data.names
        let allSection = []
        names.map((name) => {data[name].map((n) => {if (n.name === header) {allSection = n}})})
        return allSection
    }
    const [header, setHeader] = useState("My Day")
    const [taskInputValue, setTaskInputValue] = useState("")
    const [section, setSection] = useState(changeSection(header))
    const changeGroup = (name) => {
        const names = data.names
        names.map((name) => {data[name].map((n) => {if (n.name === header) {
            n.add = taskInputValue
            n.tasks = section.tasks
        }})})
        setHeader(name)
        let betaSection = changeSection(name)
        setSection(betaSection)
        setTaskInputValue(betaSection.add)
    }
    const updateAddNewList = (e, name, nameIndex, addNewList, setAddNewList) => {
        e.preventDefault()
        data[name].push({
            name: addNewList[nameIndex],
            add: "",
            tasks: []
        })
        setAddNewList(data.names.map((name) => ""))
    }
    return (
        <div className="container">
            <Nav groups={data} changeGroup={changeGroup} updateAddNewList={updateAddNewList} header={header} ></Nav>
            <Main header={header} section={section} taskInputValue={taskInputValue} setTaskInputValue={setTaskInputValue} 
            setSection={setSection}></Main>
        </div>
    )
}

export default App