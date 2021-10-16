import { useState } from "react";
import { HiOutlinePlus } from "react-icons/hi"


export const AddForm = ({ onSubmit, placeholder }) => {
    const [text, setText] = useState("");

    const updateText = (event) => {
        setText(event.target.value);
    };

    const handleClick = () => {
        if(text.length === 0) return; 
        onSubmit(text);
        setText("");
    };

    return (
        <div className="input-row">
            <input type="text" placeholder={placeholder} value={text} onChange={updateText}/>
            <button className="btn-add" onClick={handleClick}>
                <HiOutlinePlus />
            </button>
        </div>
    );
};