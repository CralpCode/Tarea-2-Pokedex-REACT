import "./pokedex.css";
import Display from './Display'

function Pokedexleft() {
    return (
      <div className="pokedex-l">
      <div className="in-pokedex-l">
         <div className="leds"></div>
         <div className="display-margin">
            <Display/>
         </div>
         <div className="btns-l"></div>
      </div>
      </div>
    );
  }
  
  export default Pokedexleft;