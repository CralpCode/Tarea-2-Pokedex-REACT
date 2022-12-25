import "./pokedex.css";
import Leds from "./leds";
import Search from "./Search";
import Displaystate from "./Display-state";

function Pokedexright() {
   return (
      <div className="pokedex-R">
         <div className="in-pokedex-R">
            <div className="Search">
               <Search />
            </div>
            <div className="display-R">
               <Displaystate />
            </div>
            <div className="btns-R">
               <div className="container-btns-R">
                  <button className="btn-Rl">{'<'}</button>
                  <button  className="btn-RR">{'>'}</button>
               </div>
               <Leds number={3} />
            </div>
         </div>
      </div>
   );
}

export default Pokedexright;