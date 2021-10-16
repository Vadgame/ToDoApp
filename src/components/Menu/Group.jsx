import { useState } from "react";
import { HiDotsVertical, HiOutlineViewList } from "react-icons/hi";
import { AddForm } from "../shared/AddForm";

export const Group = ({ group, categories, addCategory, setCategory }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);

    const toggleInputVisibility = () => {
        setIsInputVisible(prev => !prev);
    };

    const handleAddingCategory = (newCategoryName) => {
        addCategory(group.id, newCategoryName);
    };

    return (
        <div className="group">
            <div className="group-heading">
                <button className="btn-group-options" onClick={toggleInputVisibility}>
                    <HiDotsVertical />
                </button>
                <h3>{group.name}</h3>
            </div>
            {isInputVisible &&
                <AddForm onSubmit={handleAddingCategory} placeholder="Add new category"/>
            }
            <ul className="list">
                {categories.map(category => 
                    <li
                        className="category"
                        key={category.id}
                        name={category.name}
                        onClick={() => setCategory(category)}
                    >
                        <HiOutlineViewList/>
                        {category.name}
                    </li> 
                )}
            </ul>
        </div>
    );
};