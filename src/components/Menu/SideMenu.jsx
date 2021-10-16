import { Group } from "./Group";
import { AddForm } from "../shared/AddForm";


export const SideMenu = ({ groups, categories, addGroup, addCategory, setCategory }) => {
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
            <AddForm onSubmit={addGroup} placeholder="Add new group"/>
        </nav>
    );
};