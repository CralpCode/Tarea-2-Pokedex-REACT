import './display.css'
import { TopContext } from '../context/Context';
import { useContext } from 'react';

function Displaystate() {

    const { pokvalue } = useContext(TopContext)

    if (Object.entries(pokvalue).length === 0) {
        return(<div className="display-state">
            <h1>Not pokemon</h1>
        </div>) 
    }

  
    const states = pokvalue.stats.map((stats) => {        
            return(<div className='mini-statespoke' key={Math.random()}>
                <p>{stats.base_stat}</p>
                <p>{stats.stat.name}</p>
            </div>)  
    })
    
    const moves = pokvalue.moves.map((moves) => {
        let strmove = ' ';
        strmove += moves.move.name;
        return strmove;
    })

    return (
        <div className="display-state">
            <h2>Stats  Type: {pokvalue.types.map(types => types.type.name)}</h2>
            <div className='directions'>
                {states}
            </div>
            <div className='only-text'>
                <h3>Movimientos: {moves}</h3>
            </div>
        </div>
    )
}



export default Displaystate;