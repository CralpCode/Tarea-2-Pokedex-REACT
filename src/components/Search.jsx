import './search.css'
import { useContext } from 'react';
import { TopContext } from '../context/Context';

function Search() {

    const {addObjectPoke} = useContext(TopContext);

    return(
        <input
            type={"search"}
            className="search"
            onChange={addObjectPoke}
        />
    )
}

export default Search;