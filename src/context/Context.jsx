import { createContext, useState, useEffect} from "react";

export const TopContext = createContext()

export function AllContextProvider(props) {

    const imgurl = require('../assets/Not-pokemon.png');
    const urlapi = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon,setPokemon] = useState({});
    const [imgs,setimg] = useState(imgurl);

    useEffect(() =>{
        setimg(imgurl)
        if(pokemon !== ''){
                fetch(urlapi + pokemon)
                .then(res => res.json())
                .then(json => {
                    if (json.name === pokemon || json.id.toString() === pokemon) {
                        return setimg(json.sprites.front_default);                    
                    }
                })
        }
    },[imgurl, pokemon]);

    function addObjectPoke(e) {
    setPokemon(e.target.value)
    }

    return(
        <TopContext.Provider value={{
           imgs,
           addObjectPoke
        }}>
            {props.children}
        </TopContext.Provider>
    )
}