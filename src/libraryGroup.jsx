import './App.css'

export function LibraryGroup({groupName, groupId, img, onSelectGroup, isSelected}){
    return(
        <div className={'group ' + (isSelected ? "group-selected" : "")} onClick={() => onSelectGroup(groupId)}>
            <p>{groupName}</p>
            <img src={img}></img>
        </div> 
    )
}