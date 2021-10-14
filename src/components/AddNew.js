const AddNew = ({ header, onSubmit, placeholder, value, setValue }) => {
    return (
        <>
            <h4 className="nav__header">{header}</h4>
            <form onSubmit={(e) => onSubmit(e)} >
                <input 
                type="text" 
                placeholder={placeholder} 
                value={value} 
                onChange={(e) => setValue(e.target.value)} 
                className="nav__input"></input>
            </form>
        </>
    )
}

export default AddNew