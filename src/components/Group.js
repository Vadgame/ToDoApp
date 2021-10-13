import { FaAlignJustify } from "react-icons/fa"

const Group = ({ name, changeGroup, header }) => {
    return (
        <button onClick={() => changeGroup(name)} className={`navGroup__list ${name === header && "navGroup__list--actual"}`} >
            <FaAlignJustify />
            <h3 className="navGroup__list__name">{name}</h3>
        </button>
    )
}

export default Group