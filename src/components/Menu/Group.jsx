import { useState } from "react";
import { HiDotsVertical, HiOutlineViewList, HiOutlinePlus } from "react-icons/hi"

export const Group = ({ group, categories, addCategory, setCategory }) => {
    const [isInputVisible, setIsInputVisible] = useState(false);
    const [newCategoryName, setNewCategoryName] = useState("");

    const toggleInputVisibility = () => {
        setIsInputVisible(prev => !prev);
    };

    const updateNewCategoryName = (event) => {
        setNewCategoryName(event.target.value);
    };

    const handleAddingCategory = () => {
        addCategory(group.id, newCategoryName);
        setNewCategoryName("");
    };

    return (
        <div className="group">
            <div className="group-heading">
                <button className="btn-group-options" onClick={toggleInputVisibility}>
                    <HiDotsVertical />
                </button>
                <h3>{group.name}</h3>
            </div>
            <div>
                {isInputVisible && 
                    <div className="input-row">
                        <input
                            type="text"
                            value={newCategoryName}
                            onChange={updateNewCategoryName}
                        />
                        <button className="btn-add" onClick={handleAddingCategory}>
                            <HiOutlinePlus />
                        </button>
                    </div>
                }
            </div>
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