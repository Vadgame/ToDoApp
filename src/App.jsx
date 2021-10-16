import { useState } from "react";
import { SideMenu } from "./components/Menu/SideMenu";
import { TaskList } from "./components/TaskList/TaskList";
import initialData from "./data.json";
import { generateID } from "./utils";
import "./styles.css";

export const App = () => {
    const [groups, setGroups] = useState(initialData.groups);
    const [categories, setCategories] = useState(initialData.categories);
    const [tasks, setTasks] = useState(initialData.tasks);
    const [selectedCategory, setSelectedCategory] = useState(null);

    const addGroup = (name) => {
        setGroups(prev => [...prev, { id: generateID(), name }]);
    };

    const addCategory = (groupID, name) => {
        setCategories(prev => [...prev, { id: generateID(), groupID, name }]);
    };

    const addTask = (categoryID, name) => {
        setTasks(prev => [...prev, { id: generateID(), categoryID, name }]);
    };

    const removeTask = (taskID) => {
        setTasks(prev => prev.filter(task => task.id !== taskID));
    };

    const setCategory = (category) => {
        setSelectedCategory(category);
    };


    return (
        <div className="container">
            <SideMenu
                groups={groups}
                categories={categories}
                addGroup={addGroup}
                addCategory={addCategory}
                setCategory={setCategory}
            />
            {selectedCategory &&
                <TaskList
                    category={selectedCategory}
                    tasks={tasks.filter(task => task.categoryID === selectedCategory.id)}
                    addTask={addTask}
                    removeTask={removeTask}
                    closeList={() => setSelectedCategory(null)}
                />
            }
        </div>
    );
};
