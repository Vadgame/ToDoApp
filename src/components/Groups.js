import Group from "./Group"

const Groups = ({ groups, name, changeGroup, header }) => {
    const array = groups[name]
    return (
        <>
            {array.map((section, index) => <Group key={section.name + index} name={section.name} 
            changeGroup={changeGroup} header={header}></Group>)}
        </>
    )
}

export default Groups