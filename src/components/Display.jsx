const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

function Display () {
    return (<div>
        {datos()}
        
    </div>
)}

function datos() {
    <div>
        {
        fetch(url)
        .then( response => response.json())
        .then((data) =>{
            console.log(data.name);
            
        })}
    </div>
        
}


export default Display;