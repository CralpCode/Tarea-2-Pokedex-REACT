import './display.css'
const url = 'https://pokeapi.co/api/v2/pokemon/ditto'

function Display () {
    return (<div className="primary-display">
        <h1>Holaaa = {datos() + 'asda'}</h1>
    </div>
)}

function datos() {
    var name = '';
        fetch(url)
        .then( response => response.json())
        .then((data) =>{
            return name = data.name;
        });
    return prueba(name);
}

function prueba(name) {
    console.log(name);
    console.log(typeof name);
    return name;
}

export default Display;