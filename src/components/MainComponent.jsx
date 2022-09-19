import Menu from "./MenuComponent";
import React, {Component, useState} from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes, useParams} from 'react-router-dom';
import Home from "./HomeComponent";
import {Navigate } from "react-router";
import Contact from "./ContactComponent";
import {DISHES} from '../shared/dishes';
import {COMMENTS} from "../shared/comments";
import {PROMOTIONS} from "../shared/promotions";
import {LEADERS} from "../shared/leaders";
import DishWithId from "./DishWithId";


const Main = (props) => {

    let [dishes] = useState(DISHES);
    let [comments] = useState(COMMENTS);
    let [promotions] = useState(PROMOTIONS);
    let [leaders] = useState(LEADERS);

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<Home
                    dish={dishes.filter((dish) => dish.featured)[0]}
                    promotion={promotions.filter((promo) => promo.featured)[0]}
                    leader={leaders.filter((leader) => leader.featured)[0]}
                />}/>
                <Route exact path="/menu" element={<Menu

                    dishes={dishes}

                />}/>
                <Route path="/menu/:id" element={<DishWithId
                    dishes={dishes}
                    comments={comments} /> }/>
                <Route exact path="/contactus" element={<Contact />}/>
                <Route
                    path="*"
                    element={<Navigate to="/home" replace />}
                />

            </Routes>


            <Footer/>
        </div>
    );
}


export default Main;
