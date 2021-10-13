import { useState } from "react"
import Groups from "./Groups"
import AddNew from "./AddNew"

const Nav = ({ groups, changeGroup, updateAddNewList, header }) => {
    const [groupInputValue, setGroupInputValue] = useState("")
    const [activatedAdd, setActivatedAdd] = useState(false)
    const [addNewList, setAddNewList] = useState(Array(groups.names.length).fill(""))
    const names = groups.names
    const submitGroupInput = (e, groupInputValue) => {
        e.preventDefault()
        groups[groupInputValue] = []
        groups.names.push(groupInputValue)
        setAddNewList([...addNewList, ""])
    }
    const changeListInput = (e, nameIndex) => {
        const newState = [...addNewList]
        newState[nameIndex] = e
        setAddNewList(newState)
    }
    return (
        <nav>
            {names.map((name, index) => 
            <div key={name + index} className="navGroup">
                <h2 className="navGroup__header">{name}</h2>
                <Groups groups={groups} name={name} changeGroup={changeGroup} header={header} />
                {activatedAdd && <AddNew header={"Add New List"} 
                onSubmit={(e) => updateAddNewList(e, name, groups.names.indexOf(name), addNewList, setAddNewList)} 
                placeholder={"New List"} value={addNewList[groups.names.indexOf(name)]} 
                setValue={(e) => changeListInput(e, groups.names.indexOf(name))} />}
            </div>)}
            {activatedAdd && <AddNew header={"Add New Group"} 
            onSubmit={(e) => {submitGroupInput(e, groupInputValue);setGroupInputValue("")}} placeholder={"New Group"} 
            value={groupInputValue} setValue={setGroupInputValue} />}
            <button className="nav__button" 
            onClick={() => {setActivatedAdd(!activatedAdd)}}>{activatedAdd ? "Close" : "Add"}</button>
        </nav>
    )
}

export default Nav