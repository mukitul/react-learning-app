import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomeScreen from "./screens/HomeScreen";

function App() {
    return (
        <div className="">
            <BrowserRouter>
                <Switch>
                    <Route exact path={"/"}>
                        <HomeScreen/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;