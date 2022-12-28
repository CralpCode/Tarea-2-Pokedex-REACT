import './Miniparts.css'
import { TopContext } from '../context/Context';
import { useContext } from 'react';

function Btnreset() {

    const {rst} = useContext(TopContext);

    return(
        
        <input
            type={'button'}
            className="btn-reset"
            onClick={rst}
        />
    )
}

export default Btnreset;