import './App.css'


export function Library({name, img, url, libraryGroup, isSelected, onSelectLibrary, selectedGroup}){
    if(libraryGroup === selectedGroup){
        return(
            <div className={'library ' + (isSelected ? "selected" : "") + (libraryGroup === selectedGroup ? "" : 'display = none')}
                onClick={() => onSelectLibrary(name)}>
                <img src={img}></img>
                <label>{name}</label>
            </div>
        )
    }
    
}