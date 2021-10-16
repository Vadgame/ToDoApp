import { useState } from "react";
import { HiTrash } from "react-icons/hi";

export const Task = ({ task, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="task">
            <span>{task}</span>
            <button className="btn-remove" onClick={onClick}>
                <HiTrash
                    color={isHovered ? "crimson" : ""}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
            </button>
        </div>
    );
};