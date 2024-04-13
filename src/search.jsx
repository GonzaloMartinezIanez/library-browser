import './App.css'
import { useState } from 'react';

export function Search({onSearch, canConcat}){
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const getValueAndSearch = () => {
        onSearch(inputValue);
    }

    return(
        <header>
            <h1>Buscador en bibliotecas</h1>

            <div className="searcher">
                <input type="text" placeholder="Buscar..." onChange={handleChange}/>
                {
                    canConcat 
                    ? <button onClick={getValueAndSearch}>🔍</button>
                    : <button onClick={getValueAndSearch}>🔗🔍</button>
                }
            </div>
        </header>  
    )
}
