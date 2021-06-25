import React from 'react';
import './App.css';
import Countdown from "./Countdown"
import logo from "./kosmow.png"
import logo2 from "./logo2.png"
import logoDivesoft from "./divesoft-logo.svg"
import logoAdventure from "./adventure-menu_logo.jpeg"
import logoFix from "./logo-fix.png"
import logoZel from "./logo-zelezarstvi.png"
import szdt from "./szdt.png"
import mana from "./mana.png"
const start =  new Date('2021-06-25T12:09:00').getTime(); ///



function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div style={{display: "flex", justifyContent: "space-between", "alignItems": "center", paddingLeft: "32px", "width": "100%"}}>
                    <h3 style={{ paddingLeft: "32px", color: "#FEFE38"}}>A.C.4.U. s.r.o.</h3>
                    <h3 style={{ paddingRight: "32px", color: "#FEFE38" }}>Horizont3000 z.s</h3>
                </div>
                <Countdown date={start}/>
                <div>
                    <img src={logo} style={{ height: "50vh" }}/>
                    <img src={logo2} style={{ height: "50vh" }}/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "24px", width: "100%"}}>
                    <div>
                        <img src={logoDivesoft} className="image" />
                    </div>
                    <div>
                        <img src={mana} className="image" />
                    </div>
                    <div>
                        <img src={logoAdventure}className="image"/>
                    </div>
                    <div>
                        <img src={logoFix} className="image" style={{ height: "12vh" }} />

                    </div>
                    <div>
                        <img src={logoZel} className="image" style={{ height: "15vh" }} />
                    </div>
                    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <img src={szdt} className="image" style={{ height: "5vh" }} />
                        </div>
                </div>
            </header>
        </div>
    );
}

export default App;
