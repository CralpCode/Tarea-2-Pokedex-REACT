import "./pokedex.css";
import "./Miniparts.css";
import Display from './Display';
import Leds from './leds';
import Minidisplay from "./Minidisplay";
import Reset from "./Reset";
import Minileds from "./Minileds";

function Pokedexleft() {
    return (
      <div className="pokedex-l">
      <div className="in-pokedex-l">
         <div className="leds">
            <div className="big-led"></div>
            <Leds number={1}/>
            <Leds number={2}/>
            <Leds number={3}/>
         </div>
         <div className="display-margin">
            <Display/>
         </div>
         <div className="btns-l">
            <div className="d-pad">
            <div className="arrow-up-dpad">
              <div className="arrow-up">
                <img src={require("../assets/up-arrrows.png")} alt={"up-arrow"}/>
              </div>
            </div>
            <div className="arrow-lr-dpad">
              <div className="arrow-left">
                <img src={require("../assets/left-arrow.png")} alt="left-arrow"/>
              </div>
              <div className="arrow-rigth">
                <img src={require("../assets/rigth-arrrows.png")} alt="rigth-arrow"/>
              </div>
            </div>
            <div className="arrow-down-dpad">
              <div className="arrow-down">
                <img src={require("../assets/down-arrow.png")} alt="down-arrow"/>
              </div>
            </div>
            </div>
            <div className="mini-container">
               <div className="mini-states">
                  <Minidisplay/>
                  <Minileds/>
               </div>
               <div className="reset">
                  <p>Reset</p>
                  <Reset/>
               </div>
            </div>
         </div>
      </div>
      </div>
    );
  }
  
  export default Pokedexleft;