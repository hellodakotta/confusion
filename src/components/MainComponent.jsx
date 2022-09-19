import Menu from "./MenuComponent";
import React, {Component} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes} from 'react-router-dom';
import Home from "./HomeComponent";
import {Navigate} from "react-router";
import Contact from "./ContactComponent";
import {DISHES} from '../shared/dishes';
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS,
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
                    <Route path="/home" element={<Home
                        dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                        leader={this.state.leaders.filter((leader) => leader.featured)[0]}
                    />}/>
                    <Route exact path="/menu" element={<Menu
                        selectedDish={this.state.selectedDish}
                        dishes={this.state.dishes}
                        comments={this.state.comments}
                        onClick={(dishId) => {
                        this.onDishSelect(dishId)
                    }}/>}/>
                    <Route path="/contactus" element={<Contact />}/>
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
