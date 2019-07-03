import React from 'react';
import './App.css';
import Countdown from "./Countdown"
import logo from "./logo-one-week.png"
import logoDivesoft from "./divesoft-logo.svg"
import logoDivers from "./divers-direct-logo.jpg"
import logoAdventure from "./adventure-menu_logo.jpeg"
import logoBeer from "./logo_nove.jpeg"
import logoCopy from "./tshirts4U_logo-1.png"

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Countdown date={Date.now()}/>
                <div>
                    <img src={logo}/>
                </div>
                <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginTop: "24px", width: "100%"}}>
                    <div>
                        <img src={logoDivesoft} className="image" />
                    </div>
                    <div>
                        <img src={logoDivers}className="image"/>
                    </div>
                    <div>
                        <img src={logoAdventure}className="image"/>
                    </div>
                    <div>
                        <img src={logoCopy}className="image"/>
                    </div>
                    <div>
                        <img src={logoBeer} style={{height: "15vh"}}/>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
