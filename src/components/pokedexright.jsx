import "./pokedex.css";
import Leds from "./leds";
import Search from "./Search";
import Displaystate from "./Display-state";
import { TopContext } from "../context/Context";
import { useContext } from "react";

function Pokedexright() {

   const {actionBtnRight, count, actionBtnLeft} = useContext(TopContext);

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
                  <button className="btn-Rl" onClick={actionBtnLeft}>{count.arrow_left}</button>
                  <button  className="btn-RR" onClick={actionBtnRight}>{count.arrow_right}</button>
               </div>
               <Leds number={3} />
            </div>
         </div>
      </div>
   );
}

export default Pokedexright;