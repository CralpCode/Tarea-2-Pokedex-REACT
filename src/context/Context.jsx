import { createContext, useState, useEffect} from "react";

export const TopContext = createContext()
const values ={
        count:1,
        arrow_left :'<',
        arrow_right:'>'
}


export function AllContextProvider(props) {

    const imgurl = require('../assets/Not-pokemon.png');
    const urlapi = 'https://pokeapi.co/api/v2/pokemon/';

    const [pokemon,setPokemon] = useState('');
    const [imgs,setimg] = useState(imgurl);
    const [pokvalue,setPokvalue] = useState({})
    const [count,setCount] = useState(values)

    useEffect(() =>{
        setimg(imgurl)
        setPokvalue({});
        if(pokemon !== ''){
            
                fetch(urlapi + pokemon, {
                    headers : { 
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                       }
                })
                .then((res) =>{
                    if (res.ok) return res.json();
                })
                .then(json => {
                    if (typeof json === "object") {  
                        if (json.name === pokemon || json.id.toString() === pokemon) {
                            setPokvalue(json);
                            setimg(json.sprites.front_default);                    
                        }
                    }
                })  
        }
        return;
    },[imgurl, pokemon]);

    function addObjectPoke(e) {
    setPokemon(e.target.value)
    setCount(values)
    return
    }

    function actionBtnRight() {
         
        console.log('mas')
        console.log(count.count)
        if (count.count >= 1) {
        setCount({
            ...count,
            count: count.count + 1
        })
    }
    setPokemon(count.count.toString())
        
        
        return console.log(count.count)
    }

    function actionBtnLeft() {
        console.log('menos')
        console.log(count.count)
        if (count.count > 1) {
            setCount({
                ...count,
                count: count.count - 1
            })
        }
        setPokemon(count.count.toString())
        return console.log(count.count)
    }

    function rst() {
        setCount(values)
        setPokemon('')
        setimg(imgurl)
        setPokvalue({})
        return;
    }

    return(
        <TopContext.Provider value={{
           imgs,
           addObjectPoke,
           pokvalue,
           actionBtnRight,
           actionBtnLeft,
           count,
           rst
        }}>
            {props.children}
        </TopContext.Provider>
    )
}