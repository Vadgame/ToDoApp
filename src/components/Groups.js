import Group from "./Group"

const Groups = ({ database, header, groupId, changeGroup }) => {
    return (
        <>
            {database.categories.map(category => {
                if (category.groupId === groupId) {
                    return (
                        <Group 
                        key={"category" + category.id} 
                        name={category.name} 
                        header={header} 
                        changeGroup={changeGroup} 
                        /> 
                    )
                }
            })}
        </>
    )
}

export default Groups