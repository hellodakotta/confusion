import './App.css';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from "./components/MenuComponent";
import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Main from "./components/MainComponent";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Main />
            </div>
        );
    }
}



export default App;
