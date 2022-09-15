import Menu from "./MenuComponent";
import React, {Component} from "react";
import {DISHES} from '../shared/dishes';
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes} from 'react-router-dom';
import Home from "./HomeComponent";
import {Navigate} from "react-router";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }

    onDishSelect(dishId) {

        this.setState({
            selectedDish: dishId
        });
    }


    render() {
        return (
            <div className="App">
                <Header/>
                <Routes>
                    <Route path="/home" element={<Home/>}/>
                    <Route exact path="/menu" element={<Menu selectedDish={this.state.selectedDish} dishes={this.state.dishes} onClick={(dishId) => {
                        this.onDishSelect(dishId)
                    }}/>}/>
                    <Route
                        path="*"
                        element={<Navigate to="/home" replace />}
                    />

                </Routes>


                <Footer/>
            </div>
        );
    }
}


export default Main;
