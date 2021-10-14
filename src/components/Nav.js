import { useState } from "react"
import Groups from "./Groups"
import AddNew from "./AddNew"

const Nav = ({ header, database, setDatabase, changeGroup, setId }) => {
    const [activatedAdd, setActivatedAdd] = useState(false)
    const [addGroupInputValue, setAddGroupInputValue] = useState("")
    const [addListInputValues, setAddListInputValues] = useState(Array(database.groups.length).fill(""))

    const changeListInputValue = (e, groupId) => {
        const newList = [...addListInputValues]
        newList[groupId] = e
        setAddListInputValues(newList)
    }

    const addNewList = (e, groupId) => {
        e.preventDefault()
        if ( addListInputValues[groupId] ) {
            const newCategory = { 
                id: setId(database.categories), 
                groupId: groupId, 
                addInputPlaceHolder: "", 
                name: addListInputValues 
            }
            setDatabase({ 
                ...database, 
                categories: [ 
                    ...database.categories, 
                    newCategory 
                ] 
            })
            changeListInputValue("", groupId)
        }
    }

    const submitAddGroup = e => {
        e.preventDefault()
        const newGroup = { 
            id: setId(database.groups), 
            name: addGroupInputValue 
        }
        setDatabase({ 
            ...database, 
            groups: [ 
                ...database.groups, 
                newGroup 
            ] 
        })
    }

    return (
        <nav>
            {database.groups.map(group => 
            <div key={"group" + group.id} className="navGroup">
                <h2 className="navGroup__header">
                    {group.name}
                </h2>
                <Groups 
                database={database} 
                header={header} 
                groupId={group.id} 
                changeGroup={changeGroup} 
                />
                {activatedAdd && 
                <AddNew 
                header={"Add New List"} 
                onSubmit={e => addNewList(e, group.id)} 
                placeholder={"New List"} 
                value={addListInputValues[group.id]} 
                setValue={e => changeListInputValue(e, group.id)} 
                />}
            </div>)}
            {activatedAdd && 
            <AddNew 
            header={"Add New Group"} 
            onSubmit={(e) => submitAddGroup(e)} placeholder={"New Group"} 
            value={addGroupInputValue} 
            setValue={setAddGroupInputValue} 
            />}
            <button className="nav__button" onClick={() => setActivatedAdd(!activatedAdd)}>
                {activatedAdd ? "Close" : "Add"}
            </button>
        </nav>
    )
}

export default Nav