import Menu from "./MenuComponent";
import React from "react";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import {Route, Routes} from 'react-router-dom';
import Home from "./HomeComponent";
import {Navigate} from "react-router";
import Contact from "./ContactComponent";
import DishWithId from "./DishWithId";
import About from "./AboutComponent";
import {connect} from 'react-redux';


const Main = ({dishes, promotions, comments, leaders}) => {

    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path="/home" element={<Home
                    dish={dishes.filter((dish) => dish.featured)[0]}
                    promotion={promotions.filter((promo) => promo.featured)[0]}
                    leader={leaders.filter((leader) => leader.featured)[0]}
                />}/>
                <Route exact path="/menu" element={<Menu dishes={dishes}/>}/>
                <Route path="/menu/:id" element={<DishWithId
                    dishes={dishes}
                    comments={comments}/>}/>
                <Route exact path="/aboutus" element={<About leaders={leaders}/>}/>
                <Route exact path="/contactus" element={<Contact/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/home" replace/>}
                />
            </Routes>
            <Footer/>
        </div>
    );
}


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
}

export default (connect(mapStateToProps)(Main));
