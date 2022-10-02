import './App.css';
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./components/MainComponent";
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import ConfigureStore from "./redux/configureStore";

function App() {
    const store = ConfigureStore();
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="App">
                    <Main/>
                </div>
            </BrowserRouter>
        </Provider>
    );
}


export default App;
