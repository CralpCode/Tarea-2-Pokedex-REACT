import { useContext } from 'react';
import './display.css'
import { TopContext } from '../context/Context';

function Display () {
    const {imgs} = useContext(TopContext);
    return (<div className="primary-display">
        <input type='image' src={imgs}  alt="pokemon"  className='pokeimg'/>
    </div>
)};

export default Display;