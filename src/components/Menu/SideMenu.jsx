import { useState } from "react";
import { Group } from "./Group";


export const SideMenu = ({ groups, categories, addGroup, addCategory, setCategory }) => {
    const [newGroupName, setNewGroupName] = useState("");

    const handleAddNewGroup = () => {
        addGroup(newGroupName);
        setNewGroupName("");
    };

    return (
        <nav className="side-menu">
            {groups.map(group => 
                <Group
                    key={group.id}
                    group={group}
                    categories={categories.filter(category => category.groupID === group.id)}
                    addCategory={addCategory}
                    setCategory={setCategory}
                />
            )}
            <div className="add-new-group">
                <input type="text" value={newGroupName} onChange={(e) => setNewGroupName(e.target.value)}/>
                <button className="btn-add-group" onClick={handleAddNewGroup}>
                    Add new group
                </button>
            </div>
        </nav>
    );
};